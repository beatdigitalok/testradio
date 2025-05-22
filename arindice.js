// arindice.js

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

function DiaHora() {
    var fecha = new Date();
    var dd, mm, aa, hh, mi, ss;
    var strfecha;
    dd = fecha.getDay();
    mm = fecha.getMonth();
    aa = fecha.getFullYear();
    strfecha = " ";
    if (dd == 0) { strfecha = strfecha + "Domingo "; }
    if (dd == 1) { strfecha = strfecha + "Lunes "; }
    if (dd == 2) { strfecha = strfecha + "Martes "; }
    if (dd == 3) { strfecha = strfecha + "Miercoles "; }
    if (dd == 4) { strfecha = strfecha + "Jueves "; }
    if (dd == 5) { strfecha = strfecha + "Viernes "; }
    if (dd == 6) { strfecha = strfecha + "Sabado "; }
    dd = fecha.getDate();
    if (dd < 10) dd = "0" + dd;
    strfecha = strfecha + dd + ' de ';
    if (mm == 0) { strfecha = strfecha + "Enero"; }
    if (mm == 1) { strfecha = strfecha + "Febrero"; }
    if (mm == 2) { strfecha = strfecha + "Marzo"; }
    if (mm == 3) { strfecha = strfecha + "Abril"; }
    if (mm == 4) { strfecha = strfecha + "Mayo"; }
    if (mm == 5) { strfecha = strfecha + "Junio"; }
    if (mm == 6) { strfecha = strfecha + "Julio"; }
    if (mm == 7) { strfecha = strfecha + "Agosto"; }
    if (mm == 8) { strfecha = strfecha + "Setiembre"; }
    if (mm == 9) { strfecha = strfecha + "Octubre"; }
    if (mm == 10) { strfecha = strfecha + "Noviembre"; }
    if (mm == 11) { strfecha = strfecha + "Diciembre"; }
    hh = fecha.getHours();
    mi = fecha.getMinutes();
    ss = fecha.getSeconds();
    if (hh < 10) hh = "0" + hh;
    if (mi < 10) mi = "0" + mi;
    if (ss < 10) ss = "0" + ss;
    strfecha = strfecha + ' ' + aa + ' - ' + hh + ':' + mi + ':' + ss + ' hs.';
    document.form1.hora.value = strfecha;
    setTimeout('DiaHora()', 1000);
}

// **MODIFICACIÓN CLAVE**: Esta función ahora carga arcltv.html en el iframe
function CLabreTV(canalNombre, tipo, categoria, provincia, idCanal, streamUrl) {
    const iframe = document.getElementById('vivotv'); // Usar getElementById y el ID 'vivotv'
    if (iframe) {
        // Construye la URL para arcltv.html, pasando la URL del stream como un parámetro
        const playerUrl = `arcltv.html?var1=${encodeURIComponent(streamUrl)}`;
        iframe.src = playerUrl;
        console.log(`Cargando reproductor para ${canalNombre} en iframe: ${playerUrl}`);
    } else {
        console.error('Error: Iframe de video (ID "vivotv") no encontrado.');
    }
}

// **MODIFICACIÓN CLAVE**: Funciones para manejar la visibilidad de las listas de canales
let currentDisplayArea = 'TV01'; // ID del primer canal a mostrar por defecto si no se carga la lista de provincias inicialmente.
                                 // Lo cambié a 'TV01' porque tu script original lo mostraba por defecto.

function MosTV(targetId) {
    const provinceListArea = document.getElementById('province-list-area');
    const backButton = document.getElementById('back-to-provinces');
    const channelListAreas = document.querySelectorAll('.channel-list-area'); // Todas las secciones de canales

    // Primero, oculta todas las secciones de canales
    channelListAreas.forEach(area => {
        area.classList.add('hidden');
    });

    // Oculta la lista de provincias por defecto
    if (provinceListArea) {
        provinceListArea.classList.add('hidden');
    }

    // Lógica para mostrar la lista de provincias
    if (targetId === 'province-list') {
        if (provinceListArea) {
            provinceListArea.classList.remove('hidden');
        }
        backButton.classList.add('hidden'); // Oculta el botón de volver
        currentDisplayArea = 'province-list-area';
        console.log('Mostrando lista de provincias.');
    }
    // Lógica para mostrar una lista de canales específica (ej. TV01)
    else {
        const targetChannelList = document.getElementById(targetId);
        if (targetChannelList) {
            targetChannelList.classList.remove('hidden'); // Muestra la lista de canales
            backButton.classList.remove('hidden'); // Muestra el botón de volver
            currentDisplayArea = targetId;
            console.log(`Mostrando lista de canales: ${targetId}`);
        } else {
            console.warn(`Sección de canales con ID '${targetId}' no encontrada. Volviendo a provincias.`);
            MosTV('province-list'); // Vuelve a mostrar las provincias si el ID no existe
        }
    }
}

// PopupPlayer: Mantiene tu función actual, pero recuerda que las URLs de YouTube
// que tienes en tu HTML ('https://youtube.com/channel/UCyoGb3SMlTlB8CLGVH4c8Rw/live','600','400')
// no son URLs directas de embed. Deberías cambiarlas por URLs de embed reales
// de YouTube para que funcione aquí o en una ventana emergente.
// Por ejemplo: 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1'
function PopupPlayer(youtubeUrlPlaceholder) {
    console.warn(`Funcionalidad 'PopupPlayer' llamada con: ${youtubeUrlPlaceholder}`);
    console.warn('Para que los videos de YouTube se reproduzcan, debes usar URLs de embed directas (ej. https://www.youtube.com/embed/VIDEO_ID) en tu HTML.');
    // Si la URL es una URL de embed de YouTube, la puedes cargar directamente.
    // Si es un simple ID, tendrías que construir la URL de embed.
    // Dada tu URL actual 'https://youtube.com/channel/UCyoGb3SMlTlB8CLGVH4c8Rw/live','600','400', esto no es un embed válido de YouTube.
    const iframe = document.getElementById('vivotv'); // O el iframe en la nueva ventana
    if (iframe && youtubeUrlPlaceholder.includes('youtube.com/embed/')) { // Verificar si es una URL de embed real
        iframe.src = youtubeUrlPlaceholder;
        console.log(`Cargando video de YouTube en iframe: ${youtubeUrlPlaceholder}`);
    } else {
        alert('Este es un enlace de YouTube que no tiene una URL de embed válida o necesita una implementación específica.');
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
    }

    // Oculta el botón de volver al inicio
    const backButton = document.getElementById('back-to-provinces');
    if (backButton) {
        backButton.classList.add('hidden');
    }
    
    // Si quieres que el primer canal (TV01) esté visible al inicio
    // descomenta la siguiente línea y comenta MosTV('province-list')
    // MosTV('TV01');
});