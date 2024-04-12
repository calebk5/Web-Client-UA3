document.addEventListener('DOMContentLoaded', function() {
    var totalPanier = 0; // Initialise le total du panier

    // Fonction pour ajouter un prix au total du panier
    function ajouterAuPanier(prix) {
        totalPanier += prix; // Ajoute le prix au total
        alert("Ajouté au panier"); // Affiche une alerte
        document.getElementById('totalPanier').innerHTML = "Total du panier : $" + totalPanier.toFixed(2); // Met à jour le total sur la page
    }

    // Ajoute un gestionnaire d'événements à tous les boutons
    var boutons = document.querySelectorAll('button[type="button"]');
    boutons.forEach(function(bouton) {
        bouton.addEventListener('click', function(event) {
            var prix = parseFloat(event.target.parentElement.parentElement.querySelector('.prix').innerText.substring(1));
            ajouterAuPanier(prix);
        });
    });
});
