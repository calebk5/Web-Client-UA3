// Script pour la vérification de la validation et un message lorsque le formulaire est soumis
function validerFormulaire(event) {
    if (!validerIdentite() || !validerCompetences()){
        event.preventDefault();
        return false;
    }
    var prenom = document.getElementById('prenom').value;
    var nom = document.getElementById('nom').value;

    // Affiche l'alerte avec le prénom, le nom et la confirmation d'envoi
    alert("Vous etes maintenant inscrit, " + prenom + " " + nom );
    return true;
}

// Script pour la validation de la section identité
function validerIdentite() {
    let prenom = document.getElementById('prenom');
    let nom = document.getElementById('nom');
    let mineur = document.querySelector('input[name="mineur"]:checked');
    let valid = true;

    if (prenom.value.trim() === '') {
        prenom.classList.add('invalid-field');
        alert('Veuillez entrer votre prénom.');
        valid = false;
    } else {
        prenom.classList.remove('invalid-field');
    }

    if (nom.value.trim() === '') {
        nom.classList.add('invalid-field');
        alert('Veuillez entrer votre nom.');
        valid = false;
    } else {
        nom.classList.remove('invalid-field');
    }

    if (!mineur) {
        alert('Veuillez sélectionner si vous avez plus de 18 ans.');
        valid = false;
    }

    return valid;
}

// Script pour la validation de la section compétences
function validerCompetences() {
    let education = document.querySelector('input[name="education"]:checked');
    let typeofexp = document.getElementById('typeofexp');
    let ville = document.getElementById('ville');
    let startofexp = document.getElementById('start_exp');
    let endofexp = document.getElementById('end_exp');
    let reference = document.querySelector('input[name="reference"]:checked');
    let valid = true;

    if (!education) {
        alert('Veuillez sélectionner votre niveau d\'éducation.');
        valid = false;
    }

    if (typeofexp.value.trim() === '') {
        typeofexp.classList.add('invalid-field');
        alert('Veuillez entrer le titre de votre expérience.');
        valid = false;
    } else {
        typeofexp.classList.remove('invalid-field');
    }

    if (ville.value.trim() === '') {
        ville.classList.add('invalid-field');
        alert('Veuillez entrer votre ville.');
        valid = false;
    } else {
        ville.classList.remove('invalid-field');
    }

    if (startofexp.value.trim() === '') {
        startofexp.classList.add('invalid-field');
        alert('Veuillez sélectionner la date de début de votre expérience.');
        valid = false;
    } else {
        startofexp.classList.remove('invalid-field');
    }

    if (endofexp.value.trim() === '') {
        endofexp.classList.add('invalid-field');
        alert('Veuillez sélectionner la date de fin de votre expérience.');
        valid = false;
    } else {
        endofexp.classList.remove('invalid-field');
    }

    if (!reference) {
        alert("Veuillez indiquer si nous avons l'autorisation de contacter vos références.");
        valid = false;
    }

    return valid;
}

// Script pour le menu hamburger
document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger');
    var navUL = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        navUL.classList.toggle('nav-active');
    });
});