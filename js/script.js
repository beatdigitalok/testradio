const RADIO_NAME = 'Tu Radio Online'; // Cambia el nombre de tu radio
const URL_STREAMING = 'https://stream-57.zeno.fm/9s7nnwmknkhvv';
const url = 'https://api.zeno.fm/mounts/metadata/subscribe/9s7nnwmknkhvv';
const API_KEY = "TU_API_KEY_VAGALUME"; // Reemplaza con tu API key de Vagalume (opcional)
let showHistory = true;

window.onload = function () {
    var page = new Page;
    page.changeTitlePage();
    page.setVolume();

    var player = new Player();
    player.play();

    getStreamingData();
    setInterval(function () {
        getStreamingData();
    }, 10000);

    var coverArt = document.getElementsByClassName('cover-album')[0];
    if (coverArt) {
        coverArt.style.height = coverArt.offsetWidth + 'px';
    }

    localStorage.removeItem('musicHistory');
}

class Page {
    constructor() {
        this.changeTitlePage = function (title = RADIO_NAME) {
            document.title = title;
        };

        this.refreshCurrentSong = function (song, artist) {
            var currentSong = document.getElementById('currentSong');
            var currentArtist = document.getElementById('currentArtist');

            if (currentSong && currentArtist && (song !== currentSong.innerHTML)) {
                currentSong.className = 'animated flipInY text-uppercase';
                currentSong.innerHTML = song;
                currentArtist.className = 'animated flipInY text-capitalize';
                currentArtist.innerHTML = artist;

                var lyricsSongTitle = document.getElementById('lyricsSong');
                if (lyricsSongTitle) {
                    lyricsSongTitle.innerHTML = song + ' - ' + artist;
                }

                setTimeout(function () {
                    if (currentSong) currentSong.className = 'text-uppercase';
                    if (currentArtist) currentArtist.className = 'text-capitalize';
                }, 2000);
            }
        };

        this.refreshCover = function (song = '', artist) {
            const script = document.createElement('script');
            script.src = `https://api.deezer.com/search?q=${encodeURIComponent(artist)} ${encodeURIComponent(song)}&output=jsonp&callback=handleDeezerResponse`;
            document.body.appendChild(script);
        };

        this.changeVolumeIndicator = function (volume) {
            var volIndicator = document.getElementById('volIndicator');
            if (volIndicator) {
                volIndicator.innerHTML = volume;
            }
            if (typeof (Storage) !== 'undefined') {
                localStorage.setItem('volume', volume);
            }
        };

        this.setVolume = function () {
            if (typeof (Storage) !== 'undefined') {
                var volumeLocalStorage = (!localStorage.getItem('volume')) ? 80 : localStorage.getItem('volume');
                var volumeControl = document.getElementById('volume');
                var volIndicator = document.getElementById('volIndicator');
                if (volumeControl) volumeControl.value = volumeLocalStorage;
                if (volIndicator) volIndicator.innerHTML = volumeLocalStorage;
            }
        };

        this.refreshLyric = function (currentSong, currentArtist) {
            if (!API_KEY) return; // Skip if API key is not provided
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    try {
                        var data = JSON.parse(this.responseText);
                        var lyricContainer = document.getElementById('lyric');
                        var lyricsButton = document.getElementsByClassName('lyrics')[0];
                        var modalLyrics = document.getElementById('modalLyrics');

                        if (data && (data.type === 'exact' || data.type === 'aprox') && data.mus && data.mus.length > 0) {
                            var lyric = data.mus[0].text;
                            if (lyricContainer) lyricContainer.innerHTML = lyric.replace(/\n/g, '<br />');
                            if (lyricsButton) {
                                lyricsButton.style.opacity = "1";
                                lyricsButton.setAttribute('data-toggle', 'modal');
                            }
                        } else {
                            if (lyricsButton) lyricsButton.style.opacity = "0.3";
                            if (lyricsButton) lyricsButton.removeAttribute('data-toggle');
                            if (modalLyrics && modalLyrics.style.display !== "none") {
                                modalLyrics.style.display = "none";
                                modalLyrics.setAttribute('aria-hidden', 'true');
                                var backdrop = document.getElementsByClassName('modal-backdrop')[0];
                                if (backdrop) backdrop.remove();
                            }
                        }
                    } catch (e) {
                        console.error("Error parsing Vagalume API response:", e);
                        if (document.getElementsByClassName('lyrics')[0]) document.getElementsByClassName('lyrics')[0].style.opacity = "0.3";
                        if (document.getElementsByClassName('lyrics')[0]) document.getElementsByClassName('lyrics')[0].removeAttribute('data-toggle');
                    }
                } else {
                    if (document.getElementsByClassName('lyrics')[0]) document.getElementsByClassName('lyrics')[0].style.opacity = "0.3";
                    if (document.getElementsByClassName('lyrics')[0]) document.getElementsByClassName('lyrics')[0].removeAttribute('data-toggle');
                }
            };
            xhttp.open('GET', 'https://api.vagalume.com.br/search.php?apikey=' + API_KEY + '&art=' + encodeURIComponent(currentArtist) + '&mus=' + encodeURIComponent(currentSong.toLowerCase()), true);
            xhttp.send();
        };
    }
}

var audio = new Audio(URL_STREAMING);

class Player {
    constructor() {
        this.play = function () {
            audio.play();
            var defaultVolume = document.getElementById('volume').value;
            if (typeof (Storage) !== 'undefined') {
                audio.volume = intToDecimal(localStorage.getItem('volume') || defaultVolume);
            } else {
                audio.volume = intToDecimal(defaultVolume);
            }
            var volIndicator = document.getElementById('volIndicator');
            if (volIndicator) volIndicator.innerHTML = defaultVolume;
        };

        this.pause = function () {
            audio.pause();
        };
    }
}

audio.onplay = function () {
    var botao = document.getElementById('playerButton');
    var bplay = document.getElementById('buttonPlay');
    if (botao && bplay) {
        botao.className = 'fas fa-pause';
        bplay.firstChild.data = 'PAUSAR';
    }
}

audio.onpause = function () {
    var botao = document.getElementById('playerButton');
    var bplay = document.getElementById('buttonPlay');
    if (botao && bplay) {
        botao.className = 'fas fa-play';
        bplay.firstChild.data = 'PLAY';
    }
}

audio.onvolumechange = function () {
    if (audio.volume > 0) {
        audio.muted = false;
    }
}

audio.onerror = function () {
    var confirmacao = confirm('Stream Down / Network Error. \nClick OK to try again.');
    if (confirmacao) {
        window.location.reload();
    }
}

var volumeControl = document.getElementById('volume');
if (volumeControl) {
    volumeControl.oninput = function () {
        audio.volume = intToDecimal(this.value);
        var page = new Page();
        page.changeVolumeIndicator(this.value);
    }
}

function togglePlay() {
    if (!audio.paused) {
        audio.pause();
    } else {
        audio.load();
        audio.play();
    }
}

function volumeUp() {
    var vol = audio.volume;
    if (audio && vol < 1) {
        audio.volume = Math.min(1, (vol + 0.01).toFixed(2));
        var volumeControl = document.getElementById('volume');
        var page = new Page();
        if (volumeControl) page.changeVolumeIndicator(decimalToInt(audio.volume));
        if (volumeControl) volumeControl.value = decimalToInt(audio.volume);
    }
}

function volumeDown() {
    var vol = audio.volume;
    if (audio && vol > 0) {
        audio.volume = Math.max(0, (vol - 0.01).toFixed(2));
        var volumeControl = document.getElementById('volume');
        var page = new Page();
        if (volumeControl) page.changeVolumeIndicator(decimalToInt(audio.volume));
        if (volumeControl) volumeControl.value = decimalToInt(audio.volume);
    }
}

function mute() {
    var volumeControl = document.getElementById('volume');
    var volIndicator = document.getElementById('volIndicator');
    if (audio) {
        if (!audio.muted) {
            if (volIndicator) volIndicator.innerHTML = 0;
            if (volumeControl) volumeControl.value = 0;
            audio.muted = true;
        } else {
            var localVolume = localStorage.getItem('volume') || 80;
            if (volIndicator) volIndicator.innerHTML = localVolume;
            if (volumeControl) volumeControl.value = localVolume;
            audio.volume = intToDecimal(localVolume);
            audio.muted = false;
        }
    }
}

function connectToEventSource(url) {
    const eventSource = new EventSource(url);

    eventSource.addEventListener('message', function(event) {
        processData(event.data);
    });

    eventSource.addEventListener('error', function(event) {
        console.error('Erro na conexão de eventos:', event);
        setTimeout(function() {
            connectToEventSource(url);
        }, 5000); // Increased delay for reconnection
    });
}

function processData(data) {
    try {
        const parsedData = JSON.parse(data);
        if (parsedData && parsedData.streamTitle) {
            let artist = '';
            let song = parsedData.streamTitle;
            if (streamTitle.includes('-')) {
                [artist, song] = parsedData.streamTitle.split(' - ').map(item => item.trim());
            }
            const formattedData = {
                currentSong: song,
                currentArtist: artist
            };
            getStreamingData(JSON.stringify(formattedData));
        } else {
            console.log('Mensagem recebida (sin streamTitle):', parsedData);
        }
    } catch (e) {
        console.error("Erro ao processar dados da API:", e, data);
    }
}

connectToEventSource(url);

function handleDeezerResponse(data) {
    var coverArt = document.getElementById('currentCoverArt');
    var coverBackground = document.getElementById('bgCover');
    var defaultArtworkUrl = '/img/cover.png';

    if (data && data.data && data.data.length > 0 && data.data[0].album && data.data[0].album.cover_big) {
        var artworkUrl = data.data[0].album.cover_big;
        if (coverArt) coverArt.style.backgroundImage = 'url(' + artworkUrl + ')';
        if (coverArt) coverArt.className = 'animated bounceInLeft';
        if (coverBackground) coverBackground.style.backgroundImage = 'url(' + artworkUrl + ')';
        updateMediaSessionMetadata(data.data[0].title, data.data[0].artist.name, artworkUrl);
    } else {
        if (coverArt) coverArt.style.backgroundImage = 'url(' + defaultArtworkUrl + ')';
        if (coverBackground) coverBackground.style.backgroundImage = 'url(' + defaultArtworkUrl + ')';
        updateMediaSessionMetadata(null, null, defaultArtworkUrl);
    }

    setTimeout(function () {
        if (coverArt) coverArt.className = '';
    }, 20