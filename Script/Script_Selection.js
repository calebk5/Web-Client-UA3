// Script pour le panier
document.addEventListener('DOMContentLoaded', function() {
    var totalPanier = 0;

    // Fonction pour ajouter un prix au total du panier
    function ajouterAuPanier(prix) {
        totalPanier += prix;
        alert("Ajouté au panier");
        document.getElementById('totalPanier').innerHTML = "Total du panier : $" + totalPanier.toFixed(2);
    }

    var boutons = document.querySelectorAll('button[type="button"]');
    boutons.forEach(function(bouton) {
        bouton.addEventListener('click', function(event) {
            var prix = parseFloat(event.target.parentElement.parentElement.querySelector('.prix').innerText.substring(1));
            ajouterAuPanier(prix);
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
