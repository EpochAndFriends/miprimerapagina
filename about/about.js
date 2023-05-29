document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
  
    let currentImage = null;
  
    // Función para mostrar la imagen ampliada
    function showImage(imageSrc) {
      // Crear y mostrar la imagen ampliada
      const zoomedImage = document.createElement('img');
      zoomedImage.src = imageSrc;
      overlay.appendChild(zoomedImage);
      document.body.appendChild(overlay);
  
      // Oscurecer el resto de la página
      document.body.style.overflow = 'hidden';
      gallery.style.filter = 'brightness(30%)';
  
      // Evento para cerrar la imagen ampliada al hacer clic fuera de ella
      overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
          hideImage();
        }
      });
  
      currentImage = zoomedImage;
    }
  
    // Función para ocultar la imagen ampliada
    function hideImage() {
      overlay.removeChild(currentImage);
      document.body.removeChild(overlay);
  
      // Restaurar la página
      document.body.style.overflow = '';
      gallery.style.filter = '';
    }
  
    // Evento para mostrar la imagen ampliada al hacer clic en una imagen de la galería
    gallery.addEventListener('click', function(event) {
      if (event.target.tagName === 'IMG') {
        const imageSrc = event.target.src;
        showImage(imageSrc);
      }
    });
  });
  