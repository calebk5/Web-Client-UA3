function validerIdentite() {
    let prenom = document.getElementById('prenom');
    let nom = document.getElementById('nom');
    let telephone = document.getElementById('numero_de_telephone');
    let courriel = document.getElementById('adresse_courriel');
    let message = document.getElementById('message');
    let mineur = document.querySelector('input[name="mineur"]:checked');
    let valid = true;

    // Validation of first name
    if (prenom.value.trim() === '') {
        prenom.classList.add('invalid-field');
        alert('Veuillez entrer votre prénom.');
        valid = false;
    } else {
        prenom.classList.remove('invalid-field');
    }

    // Validation of last name
    if (nom.value.trim() === '') {
        nom.classList.add('invalid-field');
        alert('Veuillez entrer votre nom.');
        valid = false;
    } else {
        nom.classList.remove('invalid-field');
    }

    // Validation of phone number
    let regexTelephone = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
    if (!regexTelephone.test(telephone.value)) {
        telephone.classList.add('invalid-field');
        alert('Veuillez entrer un numéro de téléphone valide (format #123-456-7890).');
        valid = false;
    } else {
        telephone.classList.remove('invalid-field');
    }

    // Validation of email
    let regexCourriel = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexCourriel.test(courriel.value)) {
        courriel.classList.add('invalid-field');
        alert('Veuillez entrer une adresse courriel valide.');
        valid = false;
    } else {
        courriel.classList.remove('invalid-field');
    }

    // Validation for age
    if (!mineur) {
        alert('Veuillez sélectionner si vous avez plus de 18 ans.');
        valid = false;
    }

    // Validation of message
    if (message.value.trim() === '') {
        message.classList.add('invalid-field');
        alert('Veuillez entrer votre message.');
        valid = false;
    } else {
        message.classList.remove('invalid-field');
    }

    return valid;
}

function validerFormulaire(event) {
    if (!validerIdentite()) {
        event.preventDefault();
        return false;
    }
    var prenom = document.getElementById('prenom').value;
    var nom = document.getElementById('nom').value;

    // Affiche l'alerte avec le prénom, le nom et la confirmation d'envoi
    alert("Vous etes maintenant inscrit, " + prenom + " " + nom );
    return true;
}

