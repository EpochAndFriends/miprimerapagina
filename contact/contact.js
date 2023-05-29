document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    if (!validateEmail(email)) {
      alert("Por favor ingrese un correo electrónico válido.");
    } else {
      alert("Correo electrónico enviado correctamente.");
    }
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
    return regex.test(email);
  }

  document.querySelector(".navbar .nav-links").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
  });

  const gifContainer = document.getElementById("isaac");
  const gif = document.getElementById("gif");
  const audio = document.getElementById("audio");
  let isGifHovered = false;

  gifContainer.addEventListener("mouseenter", function() {
    isGifHovered = true;
    if (audio.paused) {
      audio.currentTime = 0;
      audio.play();
    }
    animateGif();
  });

  gifContainer.addEventListener("mouseleave", function() {
    isGifHovered = false;
    gif.classList.remove("gif-hover");
  });

  gifContainer.addEventListener("mousemove", function(event) {
    if (isGifHovered) {
      gif.style.display = "block";
      gif.classList.add("gif-hover");

      // Ajustar la posición del gif para que se encuentre directamente sobre el cursor
      gif.style.left = `${event.clientX}px`;
      gif.style.top = `${event.clientY - gif.offsetHeight}px`; // Restar la altura del gif para compensar
    }
  });

  function animateGif() {
    if (isGifHovered) {
      gif.style.display = "block";
      gif.classList.add("gif-hover");
      audio.volume = 1;
      requestAnimationFrame(animateGif);
    } else {
      gif.style.display = "none";
      gif.classList.remove("gif-hover");
      audio.volume = 0;
    }
  }
});
