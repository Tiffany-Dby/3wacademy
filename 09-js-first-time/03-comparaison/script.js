// Enoncé
/**
 * Demandez l'age à l'utilisateur
 * S'il a moins de 18 ans -> lui écrire dans le navigateur : Vous êtes mineur
 * S'il a 18 ans ou plus -> lui écrire : Vous êtes majeur
 * S'il a 100 ans ou plus de 100 ans -> lui écrire : Vous etes centenaire
 */

const dataElt = document.getElementById('data');
const userAge = parseInt(prompt('Quel est votre âge ?')); // Pas besoin de parseInt dans ce cas car pas de calcul


if (userAge >= 100) {
    dataElt.innerHTML += `<p>Vous êtes centenaire.</p>`;
}
else if (userAge >= 18) {
    dataElt.innerHTML += `<p>Vous êtes majeur.</p>`;
}
else {
    dataElt.innerHTML += `<p>Vous êtes mineur.</p>`;
}

dataElt.innerHTML += `<hr>`;

// Meme énoncé mais sans utiliser de condition ni condition ternaire
/*
Faire afficher ces 3 phrases :
Vous êtes mineur : true ou false
Vous êtes majeur : true ou false
Vous êtes centenaire : true ou false
*/

const isMajor = userAge >= 18;
const isMinor = userAge < 18;
const isCentenary = userAge >= 100;

dataElt.innerHTML += `
    <p>Vous êtes mineur: ${isMinor}</p>
    <p>Vous êtes majeur: ${isMajor}</p>
    <p>Vous êtes centenaire: ${isCentenary}</p>
`;
