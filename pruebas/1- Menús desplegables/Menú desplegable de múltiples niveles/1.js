// JavaScript para cerrar los submenús al hacer clic fuera de ellos
document.addEventListener("click", function(e) {
    var menus = document.querySelectorAll(".menu");
    menus.forEach(function(menu) {
      if (!menu.contains(e.target)) {
        var submenus = menu.querySelectorAll(".submenu");
        submenus.forEach(function(submenu) {
          submenu.style.display = "none";
        });
      }
    });
  });
  