// Inicializar carrusel
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
});

// Player modal
var player;
function openPlayer(src) {
  document.getElementById('videoModal').style.display = 'flex';
  player = videojs('videoPlayer');
  player.src({ type: "application/x-mpegURL", src: src });
  player.play();
}
function closePlayer() {
  if (player) { player.dispose(); }
  document.getElementById('videoModal').style.display = 'none';
  document.getElementById('videoPlayer').innerHTML = '';
}
