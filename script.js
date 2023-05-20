document.addEventListener("DOMContentLoaded", function() {
  // Resto del código

  // Cargar el archivo de audio
  let audio = new Audio("ruta/al/archivo.mp3");
  audio.load();

  // Resto del código
});
  
  let gifs = [
    "tumblr_895a918373adcb324eed736156585391_c4b2730c_400.gif",
    "tumblr_29e8b358b23e3f5acca3efe237cd082b_ec564d54_400.gif",
    "Spr_tv_tumble_0.gif",
    "Spr_tv_ghost_0.gif",
    "Spr_tv_firemouth_0.gif",
    "Spr_tv_cheeseball_0.gif",
    "Spr_tv_barrel_0.gif",
    "pizza-tower-peppino-spaghetti.gif",
    "mr-peppino-tv-hud-knight-pizza-tower-gif.gif",
    "edvsn0j4sdqa1.gif",
    "Peppinofireassnewhud.gif",
  ];
  
  let gifIndex = 0;
  
  function changeGif() {
    let gif = document.getElementById("gif");
    gifIndex = (gifIndex + 1) % gifs.length;
    gif.src = gifs[gifIndex];
  
    audio.play(); // Reproducir el audio previamente cargado
  }
  
  const gif = document.getElementById("gif");
