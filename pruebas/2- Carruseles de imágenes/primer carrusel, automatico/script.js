var slides = document.querySelectorAll(".carousel-slides img");
var controls = document.querySelectorAll(".carousel-controls button");

var currentSlide = 0;

function showSlide(n) {
  slides.forEach(function (slide) {
    slide.style.display = "none";
  });

  controls.forEach(function (control) {
    control.classList.remove("active");
  });

  slides[n].style.display = "block";
  controls[n].classList.add("active");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

controls.forEach(function (control, index) {
  control.addEventListener("click", function () {
    if (index === 0) {
      previousSlide();
    } else {
      nextSlide();
    }
  });
});

showSlide(currentSlide); // Agregar esta línea para mostrar la imagen inicial

setInterval(nextSlide, 3000);
