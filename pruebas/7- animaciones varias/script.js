// Animación de desplazamiento del encabezado al cargar la página
window.addEventListener("load", function() {
    var header = document.querySelector(".scroll-animation");
    header.classList.add("active");
  });
  
  // Animación de carga
  window.addEventListener("DOMContentLoaded", function() {
    var loader = document.querySelector(".loading-animation");
    loader.classList.add("active");
  });
  
  // Transición de página al hacer clic en un enlace
  var links = document.querySelectorAll("a");
  links.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      var section = this.getAttribute("href");
      var target = document.querySelector(section);
      target.classList.add("active");
      setTimeout(function() {
        window.location.href = section;
      }, 500);
    });
  });
  
  // Animación del carrusel
  var carouselImages = document.querySelectorAll(".carousel img");
  carouselImages.forEach(function(image) {
    image.addEventListener("mouseover", function() {
      this.style.transform = "scale(1.2)";
    });
  
    image.addEventListener("mouseout", function() {
      this.style.transform = "scale(1)";
    });
  });
  
  // Animación de interacción de usuario al hacer clic en el botón
  var button = document.querySelector(".interaction-button");
  var form = document.querySelector(".interaction-form");
  button.addEventListener("click", function() {
    form.classList.add("active");
  });
  