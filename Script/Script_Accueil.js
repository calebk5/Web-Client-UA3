document.addEventListener('DOMContentLoaded', function() {
    // Effet de survol pour les images des produits les plus achetés (Code inchangé)
    document.querySelectorAll('.produit_accueil img').forEach(function(img) {
        img.addEventListener('mouseover', function() {
            img.style.transform = 'translateX(-10px) scale(1.1)';
            img.style.transition = 'transform 0.5s ease-in-out';
        });

        img.addEventListener('mouseout', function() {
            img.style.transform = 'translateX(0px) scale(1)';
            img.style.transition = 'transform 0.5s ease-in-out';
        });
    });

    window.onload = function() {
        alert("Bienvenue sur le site de Totoko's Temptations! Découvrez nos offres spéciales.");
      };
});
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger');
    var navUL = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        navUL.classList.toggle('nav-active');
    });
});


