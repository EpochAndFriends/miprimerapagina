var slides = document.querySelectorAll('.carousel-image');
var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');
var indicators = document.querySelectorAll('.carousel-indicator');
var transitionButtons = document.querySelectorAll('.transition-button');

var currentSlide = 0;
var transition = 'fade';

function showSlide(index) {
  // Ocultar todas las diapositivas
  slides.forEach(function(slide) {
    slide.style.display = 'none';
  });

  // Desactivar todas las indicadores
  indicators.forEach(function(indicator) {
    indicator.classList.remove('active');
  });

  // Mostrar la diapositiva actual
  slides[index].style.display = 'flex';
  indicators[index].classList.add('active');
}

function slideTo(index) {
  showSlide(index);
  currentSlide = index;
}

function slidePrev() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

function slideNext() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function changeTransition(newTransition) {
  // Eliminar la clase de transición actual
  slides[currentSlide].classList.remove(transition);

  // Asignar la nueva clase de transición
  transition = newTransition;
  slides[currentSlide].classList.add(transition);
}

// Mostrar la primera diapositiva y activar el primer indicador
showSlide(currentSlide);

// Eventos de botón
prevButton.addEventListener('click', slidePrev);
nextButton.addEventListener('click', slideNext);

// Eventos de indicador
indicators.forEach(function(indicator, index) {
  indicator.addEventListener('click', function() {
    slideTo(index);
  });
});

// Eventos de botón de transición
transitionButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (!button.classList.contains('active')) {
      transitionButtons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      button.classList.add('active');
      var newTransition = button.getAttribute('data-transition');
      changeTransition(newTransition);
    }
  });
});
