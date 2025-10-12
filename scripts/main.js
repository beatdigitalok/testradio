// Asegúrate de que Hls.js y dash.js estén cargados en tu HTML antes de este script.

// ====================
// Lista de canales (¡La que proporcionaste!)
// ====================
const channels = [
    {name:"Ciudad Magazine", type:"hls", url:"https://live-01-07-ciudad.vodgc.net/live-01-07-ciudad.vodgc.net/index.m3u8", logo:"https://i.imgur.com/V1xZV72.png"},
    {
        name: "Bloomberg",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Bloomberg_TV.svg",
        url: "https://liveprodusphoenixeast.akamaized.net/USPhx-HD/Channel-TX-USPhx-AWS-virginia-1/Source-USPhx-16k-1-s6lk2-BP-07-02-81ykIWnsMsg_live.m3u8",
        type: "hls"
    },
    {
        name: "Canal 22",
        logo: "https://i.imgur.com/R4wXVxf.png",
        url: "https://5f700d5b2c46f.streamlock.net/canal22/canal22/playlist.m3u8",
        type: "hls"
    },
    {
        name: "AMC",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/AMC_logo_2019.svg",
        url: "https://amc-amcespanol-1-us.vizio.wurl.tv/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Argentinisima",
        logo: "https://www.argentinisimatv.com.ar/favicon.ico",
        url: "https://stream1.sersat.com/hls/argentinisima.m3u8",
        type: "hls"
    },
    {
        name: "Canal 79 Santa Clara del Mar",
        logo: "https://i.imgur.com/I93ypGY.png",
        url: "https://streamconex.com:19360/santaclara-1/santaclara-1.m3u8",
        type: "hls"
    },
    {
        name: "Canal de la Ciudad",
        logo: "https://www.buenosaires.gob.ar/sites/gcaba/files/favicon_0.ico",
        url: "https://www.youtube.com/embed/VHCnqfdX-t0?si=IdP5kIMZ1_9wP_m4&autoplay=1",
        type: "youtube"
    },
    {
        name: "YouTube Canal",
        logo: "https://i.imgur.com/Logo1.png",
        url: "https://www.youtube.com/embed/cb12KmMMDJA?si=izjgyuyQ1O8lGbbz&autoplay=1",
        type: "youtube"
    },
    {
        name: "5tv",
        logo: "https://i.imgur.com/mSn7ACs.png",
        url: "https://617c5175c970b.streamlock.net:4444/tvcinco/live1/playlist.m3u8",
        type: "hls"
    },
    {
        name: "13Max Television",
        logo: "https://i.imgur.com/QvF4lT.png",
        url: "https://617c5175c970b.streamlock.net:4444/13maxhd/live13maxtvnuevo_720p/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Aire de Santa Fe",
        logo: "https://i.imgur.com/60vSWW0.png",
        url: "https://unlimited1-us.dps.live/airedesantafetv/airedesantafetv.smil/playlist.m3u8",
        type: "hls"
    },
    {
        name: "AlternaTV",
        logo: "https://alternatv.ar/alternatv.png",
        url: "https://alternatv.ar/stream/hls/live.m3u8",
        type: "hls"
    },
    {
        name: "Argentinisima Satelital",
        logo: "https://i.imgur.com/xFgJawa.png",
        url: "https://stream1.sersat.com/hls/argentinisima.m3u8",
        type: "hls"
    },
    {
        name: "Azahares Radiovisual",
        logo: "https://i.imgur.com/g1BFoSs.png",
        url: "https://streamyes.alsolnet.com/azaharesfm/live/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Bayres TV",
        logo: "https://i.imgur.com/BayresTV.png",
        url: "https://streaming01.mikrolive.tv/bayrestv/live/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Beats Radio",
        logo: "https://i.imgur.com/zkNUO5p.png",
        url: "https://videostream.shockmedia.com.ar:19360/beatsradio/beatsradio.m3u8",
        type: "hls"
    },
    {
        name: "Cable Imagen Armstrong",
        logo: "https://i.imgur.com/U9NuJQC.png",
        url: "https://stream.arcast.com.ar/casse/casse/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Cadena103.TV",
        logo: "https://i.imgur.com/vBsry35.png",
        url: "https://streamlov.alsolnet.com/cadena103/live/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Canal 2 de Ushuaia",
        logo: "https://i.ibb.co/q5NPdK2/canal2-logo.png",
        url: "https://nd106.republicaservers.com:4433/hls/c6611/index.m3u8",
        type: "hls"
    },
    {
        name: "Canal 2 Misiones",
        logo: "https://i.imgur.com/YqTNXDf.png",
        url: "https://nd106.republicaservers.com:4433/hls/canal2misioness/index.m3u8",
        type: "hls"
    },
    {
        name: "Canal 3 La Pampa",
        logo: "https://i.imgur.com/SsNFudZ.png",
        url: "https://stream.arcast.com.ar/c3lapampa/ngrp:c3lapampa_all/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Canal 3 Las Heras",
        logo: "https://i.imgur.com/bd2afET.png",
        url: "https://stream.arcast.com.ar/canal3/canal3/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Canal 4 Posadas",
        logo: "https://i.imgur.com/tElJr3e.png",
        url: "https://iptv.ixfo.com.ar:30443/live/C4POS/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Canal 4 San Juan",
        logo: "https://i.imgur.com/MsCnwRA.png",
        url: "https://streamlov.alsolnet.com/canal4sanjuan/live/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Canal 5 Pico Truncado",
        logo: "https://i.imgur.com/VwUiSVF.png",
        url: "https://stream.arcast.com.ar/canal5picotruncado/canal5picotruncado/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Canal 5 Santa Fe",
        logo: "https://i.imgur.com/WX0esjQ.png",
        url: "https://stream.arcast.com.ar/c5sf/c5sf/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Canal 6 Posadas",
        logo: "https://i.imgur.com/OamBiS5.png",
        url: "https://iptv.ixfo.com.ar:30443/live/c6digital/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Canal 7 Neuquén",
        logo: "https://i.ibb.co/BrvQsWm/C7neuquenlogo2023.png",
        url: "https://stream.arcast.com.ar/c7nq/ngrp:c7nq_all/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Canal 7 Salta",
        logo: "https://i.imgur.com/CudG6sl.png",
        url: "https://vivo.solumedia.com:19360/cooperativa/cooperativa.m3u8",
        type: "hls"
    },
    {
        name: "Canal 7 TV",
        logo: "https://i.imgur.com/iJMH0UK.png",
        url: "https://stream.arcast.com.ar/envivo/castv/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Canal 9 Litoral",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Canal_9_Litoral_2021.png",
        url: "https://stream.arcast.live/ahora/ahora/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Canal 9 Resistencia",
        logo: "https://i.imgur.com/xqgRFpC.png",
        url: "http://coninfo.net:1935/9linklivert/smil:9linkmultibr.smil/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Canal 9 Televida",
        logo: "https://i.imgur.com/JUtAzg4.png",
        url: "https://unlimited1-saopaulo.dps.live/televidaar/televidaar.smil/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Canal 11 de la Costa",
        logo: "https://i.imgur.com/yYExcq1.jpg",
        url: "https://vivo.solumedia.com:19360/dadaproductora/dadaproductora.m3u8",
        type: "hls"
    },
    {
        name: "Canal 12 Web",
        logo: "https://i.imgur.com/VYcTRbd.png",
        url: "https://5f700d5b2c46f.streamlock.net/madryntv/madryntv/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Canal 13 Jujuy",
        logo: "https://i.imgur.com/lmKLiJ3.jpg",
        url: "https://genexservicios.com:19360/canal13jujuy/canal13jujuy.m3u8",
        type: "hls"
    },
    {
        name: "Canal 13 La Rioja",
        logo: "https://i.imgur.com/OI97Sgq.png",
        url: "https://stream.arcast.net:4443/mp/mp/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Canal 21 TV",
        logo: "https://i.imgur.com/Am7yMXg.png",
        url: "https://eus22.playlist.ttvnw.net/v1/playlist/CsYE9T-c44Ia1Mtu1YUcXc6AlpVvOKdYygBlRmn4UEinZHymBwUlDOjIUCpEh7xLJ0KZWblzIPrBkGArTefioeR2XLKhVDX9Pt0TDIbTjumg0Uh3sQ0MjXGIgwh4k1vVO2TQiar8xhxtVXX291wY0w0PyaOj-OvxFvHxAms2_NRFmloBvvAu2Bh3T3R-0ahKckz19l6a652l_xUg6mNtlZS12DRx2Mwl3MXPJRmFrriTCaVzJeh4FUfZnh9A6M4vv4DckhMvALLjgGJyFQBBHFYNNDK2X4n0sJ8KUkGV0LBrvkTZQEV_STOw00fXu9jIKZt1C2EYKdI7gPEQ9SGV9qIb4MiQ9YD0m7THiJjVnBfm1MxO3MrAZUO1kjnrMoRz6uvNecc3JB3c8RPKk8vYJjpYs0ayZMn_mkOhrg0D9GaMo3Up8px99X9YkrT-9nOMCf5H1YvAVvfD22oJDDK7eYMWagxS4oFMPNUiUOM575kO4XcE9PSsBW2CZYPUpk8FgikSHgLgMEvpMqFAU5cVVo7DyLR_yw940FWoILzh1V40pPslZ15oVTp-NuXTuINtgQYUTEru1NXZWhN2nx6_LOB0fvexTHn5m3OBD5MPDfFyK8UmaVh6vmz7vu_X7ZKyYP6a1bPUYJhu1b9VKfasRwxKPmz3m5DTjSRiKEa9uGStDeO-1qSGkGQvDzsIMMN92UA-43rvtkUjHVqjPVW7_eoDSv_0nXFbWVDdnTFtB1prjBAVQkjDtcltOy5hrGp24HYo4iVLWacWGgzrYtW-Z5szx5-APvkgASoJZXUtd2VzdC0yMIQN.m3u8",
        type: "hls"
    },
    {
        name: "Canal 22",
        logo: "https://i.imgur.com/R4wXVxf.png",
        url: "https://5f700d5b2c46f.streamlock.net/canal22/canal22/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Canal 34 San Juan",
        logo: "https://i.imgur.com/bZMEiYe.png",
        url: "https://streamyes.alsolnet.com/canal34hd/live/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Canal 40 Caucete SD",
        logo: "https://i.imgur.com/xUiQvk8.png",
        url: "https://canalsj.kozow.com/canal40/tracks-v1/index.fmp4.m3u8",
        type: "hls"
    },
    {
        name: "Canal E",
        logo: "https://i.ibb.co/y4pkxH3/Qtc8-M2-PG-400x400.jpg",
        url: "https://unlimited1-us.dps.live/perfiltv/perfiltv.smil/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Canal Provincial",
        logo: "https://i.imgur.com/bXHHtcb.png",
        url: "https://streaming.telered.com.ar/provincial/streaming/mystream.m3u8",
        type: "hls"
    },
    {
        name: "Canal Santa Maria",
        logo: "https://www.canalsantamaria.com.ar/images/santamaria_logo.jpg",
        url: "https://streaming.telered.com.ar/santa-maria/streaming/mystream.m3u8",
        type: "hls"
    },
    {
        name: "Catamarca TV",
        logo: "https://i.imgur.com/CEuPoqG.png",
        url: "https://stream.arcast.com.ar/canal7catamarca/ngrp:canal7catamarca_all/playlist.m3u8?DVR=",
        type: "hls"
    },
    {
        name: "Celta TV",
        logo: "https://i.imgur.com/rwoIF4w.png",
        url: "https://vivo.solumedia.com:19360/celta/celta.m3u8",
        type: "hls"
    },
    {
        name: "Chaco TV",
        logo: "https://i.imgur.com/b6RerDw.png",
        url: "https://wowzasrv.chaco.gov.ar/Streamtv/chacotv/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Chilecito TV",
        logo: "https://i.imgur.com/zGubmgZ.png",
        url: "https://vivo.solumedia.com:19360/grupoemail/grupoemail.m3u8",
        type: "hls"
    },
    {
        name: "Ciudad Magazine",
        logo: "https://i.imgur.com/V1xZV72.png",
        url: "https://live-01-07-ciudad.vodgc.net/live-01-07-ciudad.vodgc.net/index.m3u8",
        type: "hls"
    },
    {
        name: "Cosmos TV SD",
        logo: "https://i0.wp.com/fmcosmos.com/wp-content/uploads/2021/11/COSMOS-TV.png",
        url: "https://tv.mediacp.eu:19360/cosmos/cosmos.m3u8",
        type: "hls"
    },
    {
        name: "El Trece",
        logo: "https://i.imgur.com/TrgBAdA.png",
        url: "https://livetrx01.vodgc.net/eltrecetv/index.m3u8",
        type: "hls"
    },
    {
        name: "Garage TV Latin America",
        logo: "https://i.imgur.com/FqFxog1.png",
        url: "https://stream1.sersat.com/hls/garagetv.m3u8",
        type: "hls"
    },
    {
        name: "Lapacho TV Canal 11",
        logo: "https://i.imgur.com/PmFBL7x.png",
        url: "https://vivo.solumedia.com:19360/lapacho/lapacho.m3u8",
        type: "hls"
    },
    {
        name: "Litus TV",
        logo: "https://i.imgur.com/QIGSf4L.png",
        url: "https://stream.arcast.com.ar/litustv/ngrp:litustv_all/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Magic Kids",
        logo: "https://i.imgur.com/CMImqQY.png",
        url: "https://magicstream.ddns.net/magicstream/stream.m3u8",
        type: "hls"
    },
    {
        name: "Mas FM",
        logo: "https://i.imgur.com/TJ4gWQM.png",
        url: "https://vivo.solumedia.com:19360/masfm/masfm.m3u8",
        type: "hls"
    },
    {
        name: "Metro TV",
        logo: "https://i.imgur.com/7f7M7zl.png",
        url: "https://streamtv12.ddns.net:5443/LiveApp/streams/193945633734205616732920.m3u8",
        type: "hls"
    },
    {
        name: "Neox TV",
        logo: "https://i.imgur.com/eIX71c9.png",
        url: "https://tv.streamcasthd.com:3076/live/sonicaargentinalive.m3u8",
        type: "hls"
    },
    {
        name: "NET TV",
        logo: "https://i.imgur.com/IhJ0BjF.png",
        url: "https://unlimited1-us.dps.live/nettv/nettv.smil/playlist.m3u8",
        type: "hls"
    },
    {
        name: "NG Federal",
        logo: "https://i.imgur.com/lJCIqYn.png",
        url: "https://617c5175c970b.streamlock.net:4444/tvlink/live/playlist.m3u8",
        type: "hls"
    },
    {
        name: "Panc TV",
        logo: "https://i.imgur.com/u1dnEVv.png",
        url: "https://panel.host-live.com:19360/20004/20004.m3u8",
        type: "hls"
    },
    {
        name: "Play Television",
        logo: "https://i.ibb.co/nR85vvb/2021-01-03.jpg",
        url: "https://vivo.solumedia.com:19360/playtv/playtv.m3u8",
        type: "hls"
    },
    {
        name: "Power Max Radio TV",
        logo: "https://i.ibb.co/qgZLYDj/channels4-profile-6.jpg",
        url: "https://videostream.shockmedia.com.ar:19360/radio1045/radio1045.m3u8",
        type: "hls"
    },
    // 👉 aquí vas pegando bloques de canales
];

const carousel = document.getElementById("tv-carousel");
const playerVideo = document.getElementById("tv-player-video");
const playerIframe = document.getElementById("tv-player-iframe");
const infoBox = document.getElementById("channel-info");
const logo = document.getElementById("channel-logo");
const nameBox = document.getElementById("channel-name");
let currentChannel = 0;
let hls, dash;

// Renderizar carrusel
document.addEventListener("DOMContentLoaded", () => {
    channels.forEach((ch, idx) => {
        const div = document.createElement("div");
        div.className = "tv-channel";
        div.innerHTML = `<img src="${ch.logo}" alt="${ch.name}"><br>${ch.name}`;
        div.addEventListener("click", () => playChannel(idx));
        carousel.appendChild(div);
    });

    // Iniciar con el primer canal
    playChannel(0);

    // Controles
    document.getElementById("btn-play").onclick = ()=> {
        if (playerVideo.style.display === "block") playerVideo.play();
    };
    document.getElementById("btn-pause").onclick = ()=> {
        if (playerVideo.style.display === "block") playerVideo.pause();
    };
    document.getElementById("btn-fullscreen").onclick = ()=> {
        const container = document.getElementById("tv-player-container");
        if (container.requestFullscreen) container.requestFullscreen();
        else if (container.mozRequestFullScreen) container.mozRequestFullScreen();
        else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
        else if (container.msRequestFullscreen) container.msRequestFullscreen();
    };

    // Navegación con flechas carrusel
    const btnLeft = document.querySelector(".carousel-btn.left");
    const btnRight = document.querySelector(".carousel-btn.right");
    btnLeft.onclick = ()=> { carousel.scrollBy({left: -300, behavior: "smooth"}); };
    btnRight.onclick = ()=> { carousel.scrollBy({left: 300, behavior: "smooth"}); };

    // Teclado (izquierda/derecha cambia canal)
    document.addEventListener("keydown", e => {
        if (e.key === "ArrowRight") {
            currentChannel = (currentChannel + 1) % channels.length;
            playChannel(currentChannel);
        }
        if (e.key === "ArrowLeft") {
            currentChannel = (currentChannel - 1 + channels.length) % channels.length;
            playChannel(currentChannel);
        }
    });
});


// Reproducir canal
function playChannel(idx) {
    currentChannel = idx;
    const ch = channels[idx];

    // Limpiar reproductores anteriores
    if (hls) { hls.destroy(); hls = null; }
    if (dash) { dash.reset(); dash = null; }
    playerVideo.style.display = "none";
    playerIframe.style.display = "none";
    playerVideo.pause();
    playerVideo.src = ""; // Limpiar src de video

    // Mostrar información del canal
    logo.src = ch.logo;
    nameBox.textContent = ch.name;
    infoBox.classList.add("show");
    setTimeout(()=>infoBox.classList.remove("show"), 3000);
    
    // Quitar "active" de todos y ponerlo en el canal actual
    document.querySelectorAll(".tv-channel").forEach((el, i) => {
        if (i === idx) {
            el.style.border = "2px solid #E50914"; // Resaltar el canal activo
        } else {
            el.style.border = "none";
        }
    });

    // Lógica de Reproducción
    if (ch.type === "youtube") {
        playerIframe.style.display = "block";
        playerIframe.src = ch.url.includes("autoplay=1") ? ch.url : ch.url + "?autoplay=1";
    } else if (ch.type === "dash") {
        playerVideo.style.display = "block";
        // Asegúrate de que dashjs.MediaPlayer existe
        if (typeof dashjs !== 'undefined' && dashjs.MediaPlayer) {
            dash = dashjs.MediaPlayer().create();
            dash.initialize(playerVideo, ch.url, true);
        } else {
            // Fallback para DASH si la librería no está cargada
             playerVideo.src = ch.url;
             playerVideo.play().catch(()=>{ console.error("Error al iniciar DASH o librería faltante."); });
        }
    } else { // type: "hls" o nativo
        playerVideo.style.display = "block";
        if (typeof Hls !== 'undefined' && Hls.isSupported() && ch.url.toLowerCase().includes('.m3u8')) {
            hls = new Hls();
            hls.loadSource(ch.url);
            hls.attachMedia(playerVideo);
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                playerVideo.play().catch(e => {
                    console.warn("Auto-reproducción bloqueada (HLS):", e);
                });
            });
            // Añadir un listener de errores para diagnóstico
            hls.on(Hls.Events.ERROR, function(event, data) {
                if (data.fatal) {
                    console.error("HLS ERROR FATAL:", data.details, "URL:", ch.url);
                    infoBox.textContent = `❌ ERROR: El stream de ${ch.name} falló. Prueba otro canal.`;
                    cleanupPlayer();
                }
            });
        } else {
            // Fallback nativo
            playerVideo.src = ch.url;
            playerVideo.play().catch(e => {
                 console.warn("Auto-reproducción bloqueada (Nativo):", e);
            });
        }
    }
}
