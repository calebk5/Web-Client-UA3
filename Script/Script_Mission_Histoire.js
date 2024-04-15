document.querySelectorAll('img').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.transform = "scale(1.1)";
    });
    item.addEventListener('mouseout', () => {
      item.style.transform = "scale(1)";
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger');
    var navUL = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        navUL.classList.toggle('nav-active');
    });
});
