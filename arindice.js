// arindice.js - Lógica para mostrar canales y cargar streams

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

function abreventanaMEDIO(URL)
{
sw = 720;
sh = 560;
sl = (screen.width/80);
st = 2;
ss ='';
ss+='width='+sw+','+'height='+sh+','+'left='+sl+','+'top='+st;
var hWnd = window.open(URL,'medio',ss);
if (!hWnd.opener) hWnd.opener = self;
if (hWnd.focus != null) hWnd.focus();
return
}

function abreVENTANA(URL)
{
sw = 720;
sh = 560;
sl = (screen.width/80);
st = 2;
ss ='';
ss+='width='+sw+','+'height='+sh+','+'left='+sl+','+'top='+st;\
var hWnd = window.open(URL,'seccion',ss);\
if (!hWnd.opener) hWnd.opener = self;\
if (hWnd.focus != null) hWnd.focus();\
return\
}


var currentActiveListId = ''; // Variable global para rastrear la lista activa
let allProvincesData = []; // Para almacenar los datos del JSON

// === NUEVAS FUNCIONES PARA CARGAR Y MOSTRAR DATOS DESDE JSON ===

async function loadProvincesAndChannels() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        allProvincesData = data.provinces;
        renderProvinces(); // Renderiza las provincias una vez que los datos estén cargados
    } catch (error) {
        console.error("Error al cargar los datos de provincias y canales:", error);
        // Aquí podrías mostrar un mensaje de error en la UI si lo deseas
        document.getElementById('provinces-ul').innerHTML = '<li style="color: red;">Error al cargar los datos. Intenta de nuevo más tarde.</li>';
    }
}

function renderProvinces() {
    const provincesUl = document.getElementById('provinces-ul');
    provincesUl.innerHTML = ''; // Limpia la lista existente

    allProvincesData.forEach(province => {
        const li = document.createElement('li');
        li.className = 'province-item';
        const a = document.createElement('a');
        a.className = 'province-link';
        a.href = '#';
        a.textContent = province.name;
        a.onclick = () => showChannels(province.id); // Pasa el ID de la provincia
        li.appendChild(a);
        provincesUl.appendChild(li);
    });

    // Asegura que la lista de provincias sea visible
    showProvinces();
}

function showChannels(provinceId) {
    // Oculta la lista de provincias
    document.getElementById('province-list-area').classList.add('hidden');

    // Muestra el área de canales y el botón de volver
    const channelsArea = document.getElementById('channels-by-province-area');
    const backButton = document.getElementById('back-to-provinces');
    channelsArea.classList.remove('hidden');
    backButton.classList.remove('hidden');

    // Encuentra la provincia en los datos cargados
    const selectedProvince = allProvincesData.find(p => p.id === provinceId);

    if (selectedProvince) {
        document.getElementById('channels-list-title').textContent = selectedProvince.name;
        const channelsUl = document.getElementById('channels-ul');
        channelsUl.innerHTML = ''; // Limpia la lista de canales existente

        selectedProvince.channels.forEach(channel => {
            const li = document.createElement('li');
            li.className = 'channel-item';
            
            // Icono de Play
            const iconCol = document.createElement('div');
            iconCol.className = 'channel-icon-col';
            const playLink = document.createElement('a');
            playLink.href = 'javascript:void(0)';
            playLink.onclick = () => {
                // Decide si usar loadChannel o abrePAGINA para el stream
                if (channel.streamUrl.includes('youtube.com')) {
                    loadYouTubeEmbed(channel.streamUrl);
                } else if (channel.streamUrl) {
                    loadChannel(channel.streamUrl);
                } else {
                    alert('No hay URL de stream disponible para este canal.');
                }
            };
            const playIcon = document.createElement('img');
            playIcon.src = 'play-icon.svg'; // Asegúrate de tener este icono en tu carpeta
            playIcon.alt = 'Play';
            playIcon.className = 'channel-icon-play';
            playLink.appendChild(playIcon);
            iconCol.appendChild(playLink);
            li.appendChild(iconCol);

            // Tipo de Canal (CTV/Radio)
            const typeCol = document.createElement('div');
            typeCol.className = 'channel-type-col';
            typeCol.textContent = channel.type || ''; // Si no hay tipo, que no muestre nada
            li.appendChild(typeCol);

            // Nombre del Canal y Enlace a la página
            const nameCol = document.createElement('div');
            nameCol.className = 'channel-name-col';
            const nameLink = document.createElement('a');
            nameLink.className = 'channel-name-link';
            nameLink.textContent = channel.name;
            nameLink.href = 'javascript:void(0)';
            if (channel.pageUrl) {
                nameLink.onclick = () => abrePAGINA(channel.pageUrl);
            } else {
                nameLink.style.cursor = 'default'; // No es clickeable si no hay URL
            }
            nameCol.appendChild(nameLink);
            li.appendChild(nameCol);

            channelsUl.appendChild(li);
        });
    }
}

function showProvinces() {
    // Oculta el área de canales y el botón de volver
    document.getElementById('channels-by-province-area').classList.add('hidden');
    document.getElementById('back-to-provinces').classList.add('hidden');

    // Muestra la lista de provincias
    document.getElementById('province-list-area').classList.remove('hidden');
}


function loadChannel(streamUrl) {
    const iframe = document.getElementById('vivotv');
    if (iframe) {
        iframe.src = `arcltv.html?url=${encodeURIComponent(streamUrl)}`;
        console.log(`Cargando stream en iframe: ${streamUrl}`);
    } else {
        console.error("No se encontró el iframe 'vivotv'.");
    }
}

function loadYouTubeEmbed(youtubeUrlPlaceholder) {
    // Para que se abra en una nueva ventana:
    // window.open(youtubeUrlPlaceholder, '_blank', 'width=600,height=400,scrollbars=no');
    
    // Si arcltv.html ya maneja embeds de YouTube, puedes pasarlo como cualquier otra URL.
    // Asumiendo que `arcltv.html` puede manejar URLs directas de YouTube embed o de tipo HLS/MP4
    const iframe = document.getElementById('vivotv');
    if (iframe) {
        // Transformar el placeholder a una URL de embed real de YouTube
        // Ejemplo: "https://www.youtube.com/embed/gS26F4j_w1Y" a "https://www.youtube.com/embed/VIDEO_ID"
        // Necesitas extraer el ID del video si es un placeholder genérico.
        // Si el placeholder es directamente la URL de embed, úsala tal cual.
        let embedUrl = youtubeUrlPlaceholder;
        if (youtubeUrlPlaceholder.includes('googleusercontent.com/youtube.com/')) {
            // Esto es una simplificación, necesitarías una lógica para extraer el ID de video real
            // de tus placeholders o asegurarte que el JSON tenga la URL de embed completa.
            // Por ahora, si es un placeholder, lo dejamos así para no romper la lógica actual.
            console.warn("URL de YouTube es un placeholder. Asegúrate que arcltv.html la maneje correctamente o proporciona la URL de embed completa.");
        }
        
        iframe.src = `arcltv.html?url=${encodeURIComponent(embedUrl)}`;
        console.log(`Cargando video de YouTube en iframe: ${embedUrl}`);
    } else {
        console.error("No se encontró el iframe 'vivotv' para cargar el video de YouTube.");
    }
}


// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    loadProvincesAndChannels(); // Carga los datos y luego renderiza las provincias
    DiaHora(); // Llama a la función de fecha y hora
});


function DiaHora()
{
var fecha = new Date();
var dd,mm,aa,hh,mi,ss;
var strfecha;
dd = fecha.getDay();
mm = fecha.getMonth();
aa = fecha.getFullYear();
strfecha = " ";
if (dd == 0) {strfecha = strfecha + "Domingo "}
if (dd == 1) {strfecha = strfecha + "Lunes "}
if (dd == 2) {strfecha = strfecha + "Martes "}
if (dd == 3) {strfecha = strfecha + "Miercoles "}
if (dd == 4) {strfecha = strfecha + "Jueves "}
if (dd == 5) {strfecha = strfecha + "Viernes "}
if (dd == 6) {strfecha = strfecha + "Sabado "}
dd = fecha.getDate();
if (dd < 10) dd = "0" + dd;
strfecha = strfecha + dd + ' de '
if (mm == 0) {strfecha = strfecha + "Enero"}
if (mm == 1) {strfecha = strfecha + "Febrero"}
if (mm == 2) {strfecha = strfecha + "Marzo"}
if (mm == 3) {strfecha = strfecha + "Abril"}
if (mm == 4) {strfecha = strfecha + "Mayo"}
if (mm == 5) {strfecha = strfecha + "Junio"}
if (mm == 6) {strfecha = strfecha + "Julio"}
if (mm == 7) {strfecha = strfecha + "Agosto"}
if (mm == 8) {strfecha = strfecha + "Septiembre"}
if (mm == 9) {strfecha = strfecha + "Octubre"}
if (mm == 10) {strfecha = strfecha + "Noviembre"}
if (mm == 11) {strfecha = strfecha + "Diciembre"}
strfecha = strfecha + ' de ' + aa;
document.getElementById('fechaActual').innerHTML = strfecha;

hh = fecha.getHours();
mi = fecha.getMinutes();
ss = fecha.getSeconds();

if (hh < 10) hh = "0" + hh;
if (mi < 10) mi = "0" + mi;
if (ss < 10) ss = "0" + ss;

document.getElementById('horaActual').innerHTML = hh + ':' + mi + ':' + ss;
}
setInterval(DiaHora,1000);