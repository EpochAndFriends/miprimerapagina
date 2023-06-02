// Opcional: Para cerrar el menú desplegable al hacer clic fuera del mismo
document.addEventListener("click", function (e) {
    var menu = document.querySelector(".menu");
    if (!menu.contains(e.target)) {
      var submenus = document.querySelectorAll(".submenu");
      for (var i = 0; i < submenus.length; i++) {
        submenus[i].style.display = "none";
      }
    }
  });
  