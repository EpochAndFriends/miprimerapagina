document.addEventListener("DOMContentLoaded", function() {
    var submenus = document.querySelectorAll(".submenu");
  
    submenus.forEach(function(submenu) {
      var parentItem = submenu.parentElement;
  
      parentItem.addEventListener("mouseenter", function() {
        submenu.style.display = "block";
        setTimeout(function() {
          submenu.style.opacity = "1";
          submenu.style.visibility = "visible";
        }, 10);
      });
  
      parentItem.addEventListener("mouseleave", function() {
        submenu.style.opacity = "0";
        submenu.style.visibility = "hidden";
        setTimeout(function() {
          submenu.style.display = "none";
        }, 300);
      });
    });
  });
  