// =====================================================================
// === Configuración de Listas M3U/M3U8 y Constantes ===
// =====================================================================

// URL de la lista M3U de TV Abierta (Argentina)
const TV_M3U_URL = "https://radiosargentina.com.ar/TVAR.m3u";

// URL de la lista M3U para Radio AM/Digital
const RADIO_M3U_URL = "https://m3u.cl/lista/AR.m3u"; 

// URL de FALLBACK para RADIO (si la lista M3U falla) - Usando una radio de prueba conocida
const RADIO_FALLBACK_URL = "http://200.43.192.203:8000/fm-nacional-clasica.mp3"; 
const RADIO_FALLBACK_ITEM = { name: "Radio Nacional Clásica (Fallback)", url: RADIO_FALLBACK_URL, type: 'audio', logo: "https://via.placeholder.com/35/E50914/FFFFFF?text=RNC" };

// Se utiliza un proxy CORS para evitar el bloqueo del navegador si se ejecuta localmente.
const CORS_PROXY = "https://api.allorigins.win/raw?url=";

// Streams de prueba para las secciones fijas
const DEMO_MOVIES = [
    { name: "Big Buck Bunny (Demo)", url: "https://test-streams.mux.dev/bigbuckbunny/master.m3u8", type: 'video' },
    { name: "Serie Demo Capítulo 1", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", type: 'video' }
];

// Catálogo de Dibujos Animados (Simulación)
const CARTOONS_CATALOG = [
    { name: "Clásico Animado 1", url: "https://test-streams.mux.dev/bigbuckbunny/master.m3u8", type: 'video', img: "https://via.placeholder.com/200x140/E50914/FFFFFF?text=CARTOON+1" },
    { name: "Aventura Épica", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", type: 'video', img: "https://via.placeholder.com/200x140/141414/E50914?text=CARTOON+2" },
    { name: "Comedia Retro", url: "https://test-streams.mux.dev/bigbuckbunny/master.m3u8", type: 'video', img: "https://via.placeholder.com/200x140/E50914/FFFFFF?text=CARTOON+3" },
    { name: "Serie de Fantasía", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", type: 'video', img: "https://via.placeholder.com/200x140/141414/E50914?text=CARTOON+4" },
];

let allMediaData = {
    tv: [],
    radio: [],
    movies: DEMO_MOVIES
};

// Referencias a elementos del DOM
const playerElement = document.getElementById("main-media-player");
const infoElement = document.getElementById("current-media-info");
const listPlaceholder = document.getElementById("media-list-placeholder");
const tabButtons = document.querySelectorAll('.tab-button');

// Variable global para manejar el objeto HLS
let hlsInstance = null;


// =====================================================================
// === Funciones de Parser M3U ===
// =====================================================================

/**
 * Descarga y parsea una lista M3U, incluyendo el logo.
 */
async function parseM3UList(url, type) {
    try {
        const proxyUrl = CORS_PROXY + encodeURIComponent(url);
        const response = await fetch(proxyUrl);
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const text = await response.text();
        const lines = text.split('\n');
        
        let currentItem = {};
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            if (line.startsWith('#EXTINF:')) {
                const nameMatch = line.match(/,(.+)$/);
                if (nameMatch && nameMatch[1]) {
                    currentItem.name = nameMatch[1].trim();
                }
                
                // Extraer el logo
                const logoMatch = line.match(/tvg-logo="([^"]+)"/);
                // Usamos el proxy para el logo también, ya que los logos de IPTV pueden tener CORS
                currentItem.logo = (logoMatch && logoMatch[1]) ? `${CORS_PROXY}${encodeURIComponent(logoMatch[1])}` : null;

            } else if (line && !line.startsWith('#')) {
                currentItem.url = line;
                
                currentItem.type = (type === 'radio' || currentItem.url.toLowerCase().match(/\.(mp3|aac|m4a)$/)) ? 'audio' : 'video';
                
                if (currentItem.name && currentItem.url) {
                    allMediaData[type].push(currentItem);
                }
                currentItem = {}; 
            }
        }
        
    } catch (error) {
        console.error(`Error al cargar ${type} desde M3U.`, error);
        
        // Si falla la radio, agregamos un fallback conocido
        if (type === 'radio' && allMediaData.radio.length === 0) {
            allMediaData.radio.push(RADIO_FALLBACK_ITEM);
        }
    }
}


// =====================================================================
// === Lógica del Reproductor (Mejorada para Estabilidad) ===
// =====================================================================

/**
 * Detiene y limpia la instancia HLS anterior si existe.
 */
function cleanupHls() {
    if (hlsInstance) {
        hlsInstance.destroy();
        hlsInstance = null;
    }
    playerElement.src = "";
    playerElement.load();
}

/**
 * Inicia la reproducción HLS/M3U8 (Video)
 * @param {string} url - URL del stream.
 */
function playHLS(url) {
    cleanupHls();
    playerElement.style.display = 'block';
    playerElement.controls = true;
    playerElement.removeAttribute('poster'); 
    
    // Configurar para HLS
    if (Hls.isSupported() && url.toLowerCase().includes('.m3u8')) {
        hlsInstance = new Hls();
        hlsInstance.loadSource(url);
        hlsInstance.attachMedia(playerElement);
        
        hlsInstance.on(Hls.Events.MANIFEST_PARSED, function() {
            playerElement.play().catch(e => {
                console.warn("Auto-reproducción bloqueada (HLS):", e);
                infoElement.textContent = `⚠️ Haz clic en el reproductor para ver ${infoElement.textContent.split(': ')[1]}.`;
            });
        });
        
        // Detección Crítica de Fallo
        hlsInstance.on(Hls.Events.ERROR, function(event, data) {
            if (data.fatal) {
                console.error("HLS ERROR FATAL:", data);
                infoElement.textContent = `❌ ERROR FATAL: El stream está caído o bloqueado. Intenta con otro canal.`;
                cleanupHls();
            }
        });
        
    } else {
        // Fallback nativo (MP4 directo u otros)
        playerElement.src = url;
        playerElement.play().catch(e => {
             console.warn("Auto-reproducción bloqueada (Nativo):", e);
             infoElement.textContent = `⚠️ Haz clic en el reproductor para ver ${infoElement.textContent.split(': ')[1]}.`;
        });
    }
}

/**
 * Inicia la reproducción de Audio
 * @param {string} url - URL del stream.
 */
function playAudio(url) {
    cleanupHls();
    playerElement.style.display = 'block';
    playerElement.controls = true;
    playerElement.src = url;
    playerElement.load();
    
    playerElement.play().catch(e => {
        console.warn("Auto-reproducción bloqueada (Audio):", e);
        infoElement.textContent = `⚠️ Haz clic en el reproductor para escuchar ${infoElement.textContent.split(': ')[1]}.`;
    });
}

/**
 * Maneja la selección de un medio y su reproducción.
 */
function handlePlayMedia(item) {
    document.querySelectorAll('.media-item, .cartoon-card').forEach(el => el.classList.remove('active'));

    const selector = `.media-item[data-url="${item.url}"], .cartoon-card[data-url="${item.url}"]`;
    document.querySelector(selector)?.classList.add('active');
    
    if (item.type === 'video') {
        playHLS(item.url);
        infoElement.textContent = `📺 Viendo: ${item.name}`;
    } else if (item.type === 'audio') {
        playAudio(item.url);
        infoElement.textContent = `📻 Escuchando: ${item.name}`;
    }
}


// =====================================================================
// === Lógica de Renderizado y Eventos ===
// =====================================================================

/**
 * Renderiza la lista de contenido en el panel lateral.
 */
function renderMediaList(type) {
    const mediaList = allMediaData[type];
    
    listPlaceholder.innerHTML = "";
    if (mediaList.length === 0) {
        listPlaceholder.innerHTML = `<p style="color: var(--secondary-dark); padding:10px;">No hay contenido de ${type}.</p>`;
        return;
    }

    mediaList.forEach(item => {
        const div = document.createElement("div");
        div.className = "media-item";
        div.dataset.url = item.url;
        div.dataset.type = item.type;

        const logoSrc = item.logo || `https://via.placeholder.com/35/2A2A2A/FFFFFF?text=${item.name.charAt(0)}`;
        div.innerHTML = `<img src="${logoSrc}" alt="${item.name} logo" class="media-logo" onerror="this.onerror=null;this.src='https://via.placeholder.com/35/2A2A2A/FFFFFF?text=${item.name.charAt(0)}'">
                         <span class="media-name">${item.name}</span>`;
        
        div.addEventListener('click', () => handlePlayMedia(item));
        listPlaceholder.appendChild(div);
    });

    // Reproducir el primer elemento al cargar la lista (pero solo si no está reproduciendo el demo)
    if (mediaList.length > 0 && !playerElement.src.includes('bigbuckbunny')) {
        handlePlayMedia(mediaList[0]);
    }
}

/**
 * Renderiza el carrusel de Dibujos Animados.
 */
function renderCartoons() {
    const listContainer = document.getElementById("cartoons-list");
    listContainer.innerHTML = "";

    CARTOONS_CATALOG.forEach(cartoon => {
        const card = document.createElement("div");
        card.className = "cartoon-card";
        card.dataset.url = cartoon.url;
        card.dataset.type = cartoon.type;
        
        card.innerHTML = `
            <img src="${cartoon.img}" alt="${cartoon.name} Cover">
            <div class="cartoon-info">
                <p>${cartoon.name}</p>
            </div>
        `;
        
        card.addEventListener('click', () => {
            handlePlayMedia(cartoon);
            if (window.innerWidth < 1024) {
                 document.getElementById('media-player-section').scrollIntoView({ behavior: 'smooth' });
            }
        });
        
        listContainer.appendChild(card);
    });
}

// =====================================================================
// === Inicialización y Event Listeners ===
// =====================================================================

document.addEventListener("DOMContentLoaded", async () => {
    // 1. Iniciar con un canal de DEMO ESTABLE para verificar que el reproductor funciona
    const demoItem = DEMO_MOVIES[0];
    playHLS(demoItem.url);
    infoElement.textContent = `📺 Viendo: ${demoItem.name} (Prueba de Reproductor)`;
    
    // 2. Cargar todas las listas M3U/M3U8 en segundo plano
    await parseM3UList(TV_M3U_URL, 'tv');
    await parseM3UList(RADIO_M3U_URL, 'radio');
    
    // 3. Inicializar los eventos de las pestañas
    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            renderMediaList(e.target.dataset.type);
        });
    });
    
    // 4. Cargar el contenido por defecto (TV)
    renderMediaList('tv');
    
    // 5. Cargar el carrusel de Dibujos Animados
    renderCartoons();
});
