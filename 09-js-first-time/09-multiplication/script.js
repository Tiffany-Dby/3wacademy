// Exo Table de multiplication

// Enoncé
/**
 * Demander à l'utilisateur un chiffre entre 1 et 10
 * Afficher la table de multiplication complete de ce chiffre dans le navigateur
 * 
 * Ex
 * Voici la table de multiplication de 1
 * 0 X 1 = 0
 * 1 X 1 = 1
 * 2 X 1 = 2
 * Etc...
 * 
 * 
 * Bonus : prévoir d'afficher dans le navigateur un message d'erreur si l'utilisateur entre autre chose qu'un nombre
 */

const dataElt = document.getElementById('data');

let userNbr = parseInt(prompt('Saisissez un chiffre entre 1 et 10 :'));


while (isNaN(userNbr)) {
    userNbr = parseInt(prompt("Ceci n'est pas un chiffre. Saisissez un chiffre entre 1 et 10 :"));
}

dataElt.innerHTML += `<p>Voici la table de multiplication de ${userNbr}.</p>`

for (let multiplicative = 0; multiplicative <= 10; multiplicative++) {
    const result = multiplicative * userNbr;

    dataElt.innerHTML += `<p>${multiplicative} x ${userNbr} = ${result}</p>`;
}



// Plus de sécurité (mais pas utile ici)
/*
if (isNaN(userNbr)) {
    while (isNaN(userNbr)) {
        userNbr = parseInt(prompt("Ceci n'est pas un chiffre. Saisissez un chiffre entre 1 et 10 :"));
    }
}
else if (typeof(userNbr) === 'number') {
    dataElt.innerHTML += `<p>Voici la table de multiplication de ${userNbr}.</p>`
    for (let multiplicative = 0; multiplicative <= 10; multiplicative++) {
        const result = multiplicative * userNbr;

        dataElt.innerHTML += `<p>${multiplicative} x ${userNbr} = ${result}</p>`
    }
}
*/