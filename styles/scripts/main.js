// =====================================================================
// === Configuración de Listas M3U/M3U8 y Constantes ===
// =====================================================================

// URL de la lista M3U de TV Abierta (Argentina)
const TV_M3U_URL = "https://radiosargentina.com.ar/TVAR.m3u";

// URL de la lista M3U para Radio AM/Digital
const RADIO_M3U_URL = "https://m3u.cl/lista/AR.m3u"; 

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


// =====================================================================
// === Funciones de Parser M3U (Ahora extrae el logo) ===
// =====================================================================

/**
 * Descarga y parsea una lista M3U desde una URL, incluyendo el logo.
 * @param {string} url - URL del archivo M3U.
 * @param {string} type - 'tv' o 'radio'.
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
                // 1. Extraer el nombre
                const nameMatch = line.match(/,(.+)$/);
                if (nameMatch && nameMatch[1]) {
                    currentItem.name = nameMatch[1].trim();
                }
                
                // 2. Extraer el logo (si existe)
                const logoMatch = line.match(/tvg-logo="([^"]+)"/);
                currentItem.logo = (logoMatch && logoMatch[1]) ? logoMatch[1] : null;

            } else if (line && !line.startsWith('#')) {
                currentItem.url = line;
                
                // Heurística de tipo: 'audio' si es la lista de radio o tiene extensión de audio
                currentItem.type = (type === 'radio' || currentItem.url.toLowerCase().match(/\.(mp3|aac|m4a)$/)) ? 'audio' : 'video';
                
                if (currentItem.name && currentItem.url) {
                    allMediaData[type].push(currentItem);
                }
                currentItem = {}; 
            }
        }
        
    } catch (error) {
        console.error(`Error al cargar ${type} desde M3U.`, error);
    }
}


// =====================================================================
// === Lógica del Reproductor (Mejorada) ===
// =====================================================================

/**
 * Inicia la reproducción HLS/M3U8 (Video)
 * @param {string} url - URL del stream.
 */
function playHLS(url) {
    playerElement.style.display = 'block';
    playerElement.load();
    playerElement.removeAttribute('poster'); 
    
    // Configurar para HLS
    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(playerElement);
        // Intentar reproducir, capturando el error de auto-reproducción
        playerElement.play().catch(e => {
            console.warn("Auto-reproducción bloqueada (HLS):", e);
            infoElement.textContent = `⚠️ Haz clic en el reproductor para ver ${infoElement.textContent.split(': ')[1]}.`;
        });
    } else if (playerElement.canPlayType("application/vnd.apple.mpegurl")) {
        playerElement.src = url;
        playerElement.play().catch(e => {
             console.warn("Auto-reproducción bloqueada (Nativo):", e);
             infoElement.textContent = `⚠️ Haz clic en el reproductor para ver ${infoElement.textContent.split(': ')[1]}.`;
        });
    } else {
        infoElement.textContent = "Error: Tu navegador no soporta este stream HLS/M3U8.";
    }
}

/**
 * Inicia la reproducción de Audio
 * @param {string} url - URL del stream.
 */
function playAudio(url) {
    playerElement.style.display = 'block';
    playerElement.src = url;
    playerElement.load();
    
    playerElement.play().catch(e => {
        console.warn("Auto-reproducción bloqueada (Audio):", e);
        infoElement.textContent = `⚠️ Haz clic en el reproductor para escuchar ${infoElement.textContent.split(': ')[1]}.`;
    });
}

/**
 * Maneja la selección de un medio y su reproducción.
 * @param {object} item - Objeto con name, url, type y logo.
 */
function handlePlayMedia(item) {
    // 1. Limpiar estilos "active" en todos los elementos
    document.querySelectorAll('.media-item, .cartoon-card').forEach(el => el.classList.remove('active'));

    // 2. Marcar el elemento seleccionado
    const selector = `.media-item[data-url="${item.url}"], .cartoon-card[data-url="${item.url}"]`;
    document.querySelector(selector)?.classList.add('active');
    
    // 3. Reproducir
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
 * @param {string} type - Tipo de contenido a renderizar ('tv', 'radio', 'movies').
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

        // Añadir logo si existe, o un placeholder
        const logoSrc = item.logo || `https://via.placeholder.com/35/2A2A2A/FFFFFF?text=${item.name.charAt(0)}`;
        div.innerHTML = `<img src="${logoSrc}" alt="${item.name} logo" class="media-logo" onerror="this.onerror=null;this.src='https://via.placeholder.com/35/2A2A2A/FFFFFF?text=${item.name.charAt(0)}'">
                         <span class="media-name">${item.name}</span>`;
        
        div.addEventListener('click', () => handlePlayMedia(item));
        listPlaceholder.appendChild(div);
    });

    // Reproducir el primer elemento automáticamente
    if (mediaList.length > 0) {
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
            // Mover la vista al reproductor principal en móviles
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
    // 1. Cargar todas las listas M3U/M3U8
    infoElement.textContent = 'Cargando listas (TV y Radio)...';
    await parseM3UList(TV_M3U_URL, 'tv');
    await parseM3UList(RADIO_M3U_URL, 'radio');
    infoElement.textContent = 'Listas cargadas. Selecciona un contenido.';
    
    // 2. Inicializar los eventos de las pestañas
    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            renderMediaList(e.target.dataset.type);
        });
    });
    
    // 3. Cargar el contenido por defecto (TV)
    renderMediaList('tv');
    
    // 4. Cargar el carrusel de Dibujos Animados
    renderCartoons();
});
