document.addEventListener('DOMContentLoaded', function() {
  // Effet de survol pour les images
  document.querySelectorAll('.wrapper img').forEach(function(img) {
      img.addEventListener('mouseover', function() {
          img.style.transform = 'translateX(-10px) scale(1.1)';
          img.style.transition = 'transform 0.5s ease-in-out';
      });

      img.addEventListener('mouseout', function() {
          img.style.transform = 'translateX(0px) scale(1)';
          img.style.transition = 'transform 0.5s ease-in-out';
      });
  });
});
  
// Script pour le menu hamburger
document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.querySelector('.hamburger');
  var navUL = document.querySelector('nav ul');

  hamburger.addEventListener('click', function() {
      navUL.classList.toggle('nav-active');
  });
});