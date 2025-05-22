// arindice.js - Lógica para mostrar canales y cargar streams

// Variable para rastrear la sección de canales actualmente visible
let currentActiveListId = 'province-list-area'; // Inicialmente, la lista de provincias está visible

// Funciones existentes (no modificadas, puedes mantenerlas como las tienes)
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function abrePAGINA(URL) {
  var hWnd = window.open(URL,'pagina','');
  if (!hWnd.opener) hWnd.opener = self;
  if (hWnd.focus != null) hWnd.focus();
  return;
}

function abreLISTA(URL) {
  var hWnd = window.open(URL,'lista','');
  if (!hWnd.opener) hWnd.opener = self;
  if (hWnd.focus != null) hWnd.focus();
  return;
}

function abreDIARIO(URL) {
  var hWnd = window.open(URL,'periodico','');
  if (!hWnd.opener) hWnd.opener = self;
  if (hWnd.focus != null) hWnd.focus();
  return;
}

function abreventanaINDICE(URL) {
  sw = 720;
  sh = 560;
  sl = (screen.width/80);
  st = 2;
  ss ='';
  ss+='width='+sw+','+'height='+sh+','+'left='+sl+','+'top='+st;
  var hWnd = window.open(URL,'indice',ss);
  if (!hWnd.opener) hWnd.opener = self;
  if (hWnd.focus != null) hWnd.focus();
  return;
}

function abreventanaMEDIO(URL) {
  sw = 720;
  sh = 560;
  sl = (screen.width/80);
  st = 2;
  ss ='';
  ss+='width='+sw+','+'height='+sh+','+'left='+sl+','+'top='+st;
  var hWnd = window.open(URL,'medio',ss);
  if (!hWnd.opener) hWnd.opener = self;
  if (hWnd.focus != null) hWnd.focus();
  return;
}


// **Función PRINCIPAL adaptada para la nueva estructura HTML**
function MosTV (idP) {
    // 1. Oculta la sección que estaba activa (puede ser una provincia o la lista de provincias)
    if (currentActiveListId) {
        const activeElement = document.getElementById(currentActiveListId);
        if (activeElement) {
            activeElement.classList.add('hidden');
        }
    }

    // 2. Muestra la nueva sección de canales (la provincia seleccionada)
    const newActiveElement = document.getElementById(idP);
    if (newActiveElement) {
        newActiveElement.classList.remove('hidden');
        currentActiveListId = idP; // Actualiza la variable con el ID de la sección activa
    }

    // Opcional: Desplazarse al inicio del panel dinámico si es necesario
    const dynamicContentArea = document.getElementById('dynamic-content-area');
    if (dynamicContentArea) {
        dynamicContentArea.scrollTop = 0;
    }
}


// Función para volver a mostrar la lista de provincias
function showProvinces() {
    // 1. Oculta la sección de canales que estaba activa
    if (currentActiveListId) {
        const activeElement = document.getElementById(currentActiveListId);
        if (activeElement) {
            activeElement.classList.add('hidden');
        }
    }

    // 2. Muestra la lista de provincias
    const provinceListArea = document.getElementById('province-list-area');
    if (provinceListArea) {
        provinceListArea.classList.remove('hidden');
        currentActiveListId = 'province-list-area'; // Actualiza a la lista de provincias
    }

    // Opcional: Desplazarse al inicio del panel dinámico si es necesario
    const dynamicContentArea = document.getElementById('dynamic-content-area');
    if (dynamicContentArea) {
        dynamicContentArea.scrollTop = 0;
    }
}


// **Funciones para cargar canales en el iframe principal (vivotv)**

// Carga un stream M3U8/MP4 directamente en el iframe a través de arcltv.html
function loadChannel(streamUrl) {
    const iframe = document.getElementById('vivotv');
    if (iframe) {
        // Carga arcltv.html y le pasa la URL del stream como parámetro 'url'
        iframe.src = `arcltv.html?url=${encodeURIComponent(streamUrl)}`;
        console.log(`Cargando stream: ${streamUrl} a través de arcltv.html`);
    } else {
        console.error('No se encontró el iframe con ID "vivotv".');
    }
}

// Carga un embed de YouTube en el iframe (si es una URL válida)
function loadYouTubeEmbed(youtubeEmbedUrl) {
    const iframe = document.getElementById('vivotv');
    if (iframe) {
        // Para URLs de embed de YouTube que funcionan con el iframe:
        // Asegúrate de que las URLs de YouTube que pases aquí sean realmente URLs de embed.
        // Por ejemplo: 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1'
        // Si tienes la URL "googleusercontent.com/youtube.com/...", se abrirá directamente en el iframe.
        // Si necesitas Video.js para manejar YouTube (requiere plugin), entonces sería:
        // iframe.src = `arcltv.html?url=${encodeURIComponent(youtubeEmbedUrl)}`;
        // Para simplificar, y dado que algunas de tus URLs son de googleusercontent, las cargamos directamente.
        // Si NO son URLs de embed directas de YouTube (como las del tipo youtube.com/watch?v=),
        // el navegador puede bloquearlas o no reproducirlas correctamente dentro del iframe.
        // La URL de Euronews: 'https://youtube.com/channel/UCyoGb3SMlTlB8CLGVH4c8Rw/live' sigue siendo un caso especial,
        // ya que el navegador podría intentar descargarla o no saber cómo reproducirla.
        // Si es una URL de embed directa de YouTube (ej. youtube.com/embed/...), debería funcionar.

        iframe.src = youtubeEmbedUrl;
        console.log(`Cargando embed de YouTube: ${youtubeEmbedUrl}`);
        // Considera agregar un mensaje de error si el embed no carga bien después de un tiempo
    } else {
        console.error('No se encontró el iframe con ID "vivotv".');
    }
}


// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Asegura que todas las secciones de canales estén ocultas al inicio
    const channelListAreas = document.querySelectorAll('.channel-list-area');
    channelListAreas.forEach(area => {
        area.classList.add('hidden');
    });

    // Muestra la lista de provincias inicialmente
    const provinceListArea = document.getElementById('province-list-area');
    if (provinceListArea) {
        provinceListArea.classList.remove('hidden');
        currentActiveListId = 'province-list-area'; // Establece el ID activo inicial
    }

    // Inicializa el iframe con un placeholder o arcltv.html sin URL para que no quede en blanco
    const vivotvIframe = document.getElementById('vivotv');
    if (vivotvIframe) {
        vivotvIframe.src = 'arcltv.html'; // Inicia el iframe con el reproductor vacío
    }
});