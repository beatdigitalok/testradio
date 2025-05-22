// arindice.js - Lógica para mostrar canales y cargar streams

let currentDisplayArea = 'province-list-area'; // Inicia mostrando la lista de provincias

function MosTV(targetId) {
    const provinceListArea = document.getElementById('province-list-area');
    const backButton = document.getElementById('back-to-provinces');
    const channelListAreas = document.querySelectorAll('.channel-list-area'); // Todas las secciones de canales

    // Primero, oculta todas las secciones de canales
    channelListAreas.forEach(area => {
        area.classList.add('hidden');
    });

    // Lógica para mostrar la lista de provincias
    if (targetId === 'province-list') {
        provinceListArea.classList.remove('hidden');
        backButton.classList.add('hidden'); // Oculta el botón de volver
        currentDisplayArea = 'province-list-area';
        console.log('Mostrando lista de provincias.');
    } 
    // Lógica para mostrar una lista de canales específica (ej. TV01)
    else {
        provinceListArea.classList.add('hidden'); // Oculta la lista de provincias
        const targetChannelList = document.getElementById(targetId);
        if (targetChannelList) {
            targetChannelList.classList.remove('hidden'); // Muestra la lista de canales
            backButton.classList.remove('hidden'); // Muestra el botón de volver
            currentDisplayArea = targetId;
            console.log(`Mostrando lista de canales: ${targetId}`);
        } else {
            console.warn(`Sección de canales con ID '${targetId}' no encontrada.`);
            MosTV('province-list'); // Vuelve a mostrar las provincias si el ID no existe
        }
    }
}

// CLabreTV: Carga la URL de transmisión en el iframe principal.
function CLabreTV(canalNombre, tipo, categoria, provincia, idCanal, streamUrl) {
    const iframe = document.getElementById('vivotvIframe');
    if (iframe) {
        iframe.src = streamUrl;
        console.log(`Cargando stream de ${canalNombre}: ${streamUrl}`);
    } else {
        console.error('Error: Iframe de video (ID "vivotvIframe") no encontrado.');
    }
    // No cerramos el panel de canales aquí, para que el usuario pueda seguir navegando en la lista.
    // MosTV(false); // Quité esta línea para que no cierre la lista al seleccionar un canal.
}

// abrePAGINA: Abre la URL del sitio web del canal en una nueva pestaña.
function abrePAGINA(url) {
    window.open(url, '_blank');
    console.log(`Abriendo página del canal: ${url}`);
}

// PopupPlayer: Maneja los enlaces de YouTube (googleusercontent.com/youtube.com/X)
// Para que esto funcione, necesitarías una forma de obtener el ID de YouTube
// y luego cargar el video de YouTube en el iframe o abrir una ventana emergente.
function PopupPlayer(youtubeUrlPlaceholder) {
    console.warn(`Funcionalidad 'PopupPlayer' llamada con: ${youtubeUrlPlaceholder}`);
    console.warn('Necesitas implementar la lógica para reproducir videos de YouTube desde este placeholder.');
    // Ejemplo de cómo podrías cargar un video de YouTube en el iframe si tuvieras el ID real:
    // const youtubeId = youtubeUrlPlaceholder.split('/').pop(); // Esto es una suposición
    // if (youtubeId) {
    //     const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
    //     CLabreTV('YouTube Video', '', '', '', '', embedUrl);
    // }
}


// Inicialización: Asegura que la lista de provincias sea la única visible al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Asegura que todas las secciones de canales estén ocultas al inicio
    const channelListAreas = document.querySelectorAll('.channel-list-area');
    channelListAreas.forEach(area => {
        area.classList.add('hidden');
    });

    // Muestra la lista de provincias
    document.getElementById('province-list-area').classList.remove('hidden');
    document.getElementById('back-to-provinces').classList.add('hidden'); // Asegura que el botón de volver esté oculto
});