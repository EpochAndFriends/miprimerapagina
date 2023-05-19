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
  const image = document.getElementById("image");
  const audio = document.getElementById("audio");
  let isGifHovered = false;

  gifContainer.addEventListener("mouseenter", function() {
    isGifHovered = true;
    audio.play();
    animateGif();
  });

  gifContainer.addEventListener("mouseleave", function() {
    isGifHovered = false;
    gif.classList.remove("gif-hover");
    audio.pause();
    audio.currentTime = 0;
  });

  image.addEventListener("mouseenter", function() {
    isGifHovered = true;
    gif.style.display = "block";
    image.style.display = "none";
    audio.play();
    animateGif();
  });

  gifContainer.addEventListener("mouseleave", function() {
    isGifHovered = false;
    gif.classList.remove("gif-hover");
    gif.style.display = "none";
    image.style.display = "block";
    audio.pause();
    audio.currentTime = 0;
  });

  gifContainer.addEventListener("mousemove", function(event) {
    if (isGifHovered) {
      const rect = gifContainer.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      gif.style.left = `${x}px`;
      gif.style.top = `${y}px`;
    }
  });

  function animateGif() {
    if (isGifHovered) {
      gif.style.display = "block";
      gif.classList.add("gif-hover");
      requestAnimationFrame(animateGif);
    } else {
      gif.style.display = "none";
      gif.classList.remove("gif-hover");
    }
  }
  
});