//## Enoncé
//
//  L'utilisateur choisit dans un prompt du navigateur pierre, feuille ou ciseau, l'ordinateur choisit aléatoirement l'une des trois possibilités, et la partie commence !
//
//## Remarques
//
//  * Le ciseau est écrasé par la pierre.
//  * La feuille est découpée par le ciseau.
//  * La pierre est enveloppée par la feuille.
//  * Si le joueur et l'ordinateur font le même choix on obtient une égalité.
//
//  * Faire afficher le resultat dans le navigateur sous la forme suivante :
// Votre choix est : feuille.
// Le choix de l'ordinateur est : pierre.
// La pierre est enveloppée par la feuille.. 
// Vous avez gagné !
//
//
//## BONUS 1 
//  On doit pouvoir saisir indifférement le choix en minuscule ou en majuscule
//
//## AIDES
// -> Pour rendre le jeux aléatoire, vous devrez utiliser Math.random
//  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
// -> Voir toLowerCase pour pouvoir saisir indifférement le choix en minuscule ou majuscule
//  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/toLowerCase
//

// Random
// console.log(Math.random());


const dataElt = document.getElementById('data');

let userChoice = prompt("C'est l'heure pour un petit chiffoumi ! Choisissez en saisissant entre pierre, feuille ou ciseau :").toLowerCase();

while (userChoice !== 'feuille' && userChoice !== 'pierre' && userChoice !== 'ciseau') {
    userChoice = prompt("Je n'ai pas compris votre choix. Veuillez choisir en saisissant entre pierre, feuille ou ciseau :");
}

dataElt.innerHTML += `<p>Votre choix est : ${userChoice}.</p>`;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let iaChoice = getRandomInt(3);
console.log(iaChoice);

if (iaChoice === 2) {
    iaChoice = 'pierre';
}
else if (iaChoice === 1) {
    iaChoice = 'feuille';
}
else {
    iaChoice = 'ciseau';
}

dataElt.innerHTML += `<p>Le choix de l'ordinateur est : ${iaChoice}</p>`;

/*
if (userChoice === iaChoice) {
    dataElt.innerHTML += `<p>Egalité !</p>`;
}
else if (userChoice === 'pierre' && iaChoice === 'feuille') {
    dataElt.innerHTML += `
        <p>La pierre est enveloppée par la feuille.</p>
        <p>Vous avez gagné !</p>
    `;
}
else if (userChoice === 'feuille' && iaChoice === 'pierre') {
    dataElt.innerHTML += `
        <p>La pierre est enveloppée par la feuille.</p>
        <p>Vous avez perdu.</p>
    `;
}
else if (userChoice === 'pierre' && iaChoice === 'ciseau') {
    dataElt.innerHTML += `
        <p>Le ciseau est écrasé par la pierre.</p>
        <p>Vous avez gagné !</p>
    `;
}
else if (userChoice === 'ciseau' && iaChoice === 'pierre') {
    dataElt.innerHTML += `
        <p>Le ciseau est écrasé par la pierre.</p>
        <p>Vous avez perdu.</p>
    `;
}
else if (userChoice === 'ciseau' && iaChoice === 'feuille') {
    dataElt.innerHTML += `
        <p>La feuille est découpée par le ciseau.</p>
        <p>Vous avez gagné !</p>
    `;
}
else if (userChoice === 'feuille' && iaChoice === 'ciseau') {
    dataElt.innerHTML += `
        <p>La feuille est découpée par le ciseau.</p>
        <p>Vous avez perdu.</p>
    `;
}
*/

if (userChoice === 'feuille') {
    if (iaChoice === 'pierre') {
        dataElt.innerHTML += `
            <p>La pierre est enveloppée par la feuille.</p>
            <p>Vous avez gagné !</p>
        `;
    }
    else if (iaChoice === 'ciseau') {
        dataElt.innerHTML += `
            <p>La feuille est découpée par le ciseau.</p>
            <p>Vous avez perdu.</p>
        `;
    }
}
else if (userChoice === 'pierre') {
    if (iaChoice === 'feuille') {
        dataElt.innerHTML += `
            <p>La pierre est enveloppée par la feuille.</p>
            <p>Vous avez gagné !</p>
        `;
    }
    else if (iaChoice === 'ciseau') {
        dataElt.innerHTML += `
            <p>Le ciseau est écrasé par la pierre.</p>
            <p>Vous avez gagné !</p>
        `;
    }
}
else if (userChoice === 'ciseau') {
    if (iaChoice === 'feuille') {
        dataElt.innerHTML += `
            <p>La feuille est découpée par le ciseau.</p>
            <p>Vous avez gagné !</p>
        `;
    }
    else if (iaChoice === 'pierre') {
        dataElt.innerHTML += `
            <p>Le ciseau est écrasé par la pierre.</p>
            <p>Vous avez perdu</p>
        `;
    }
}





/*
pierre feuille
ciseau pierre
feuille ciseau
identique
*/


// <p>Le choix de l'ordinateur est : ${aiChoice}</p>
// <p>Le ciseau est écrasé par la pierre.</p>
// <p>La feuille est découpée par le ciseau.</p>
// <p>La pierre est enveloppée par la feuille.</p>
// <p>Vous avez gagné !</p>
// <p>Vous avez perdu.</p>
