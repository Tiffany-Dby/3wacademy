// Enoncé
// Demander à l'utilisateur son prénom via un prompt
// Afficher dans la page : Bonjour "prénom de l'utilisateur"
// Demander à l'utilisateur de saisir 2 nombres entiers (Attention prompt() renvoie une chaine de caractère, voir parseInt() pour convertir en nombre entier)
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/parseInt
// Afficher le résultat de l'addition de ces chiffres dans une phrase de type : Le resultat est de xx. Merci d'avoir participé prénom.

const dataElt = document.getElementById('data');
const userName = window.prompt('Quel est votre prénom ?');
let firstNumber = window.prompt('Veuillez saisir un nombre entier');
let secondNumber = window.prompt('Veuillez saisir un nombre entier, encore une fois');
firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

dataElt.innerHTML += `<p>Bonjour ${userName}.</p>`;
dataElt.innerHTML += `<p>Le résultat est de ${firstNumber + secondNumber}. Merci d'avoir participé ${userName}.</p>`;

//---- Correction
/*
const dataElt = document.getElementById('data');
const firstname = window.prompt('Quel est votre prénom ?');
dataElt.innerHTML += `<p>Bonjour ${firstname}.</p>`;
*/

//-- Version longue

// Demande des nombres à l'utilisateur
/*
let number1 = window.prompt('Veuillez saisir un nombre entier');
let number2 = window.prompt('Veuillez saisir un nombre entier, encore une fois');
*/

// On transforme les string renvoyés par les prompt en number entier avec parseInt()
/*
number1 = parseInt(number1);
number2 = parseInt(number2);
*/

// On calcul le résultat
/*
const result = number1 + number2;
*/

// On affiche le résultat
/*
dataElt.innerHTML += `<p>Le résultat est de ${result}. Merci d'avoir participé ${firstname}.</p>`;
*/


//-- Version courte

// Je parse directement ce que je reçois du prompt et je l'enregistre dans une variable
/*
const number1 = parseInt(window.prompt(Saisissez un nombre));
const number2 = parseInt(window.prompt(Saisissez un deuxième nombre));
*/

// J'affiche le résultat en faisant le calcul directement
/*
dataElt.innerHTML += `<p>Le résultat est de ${number1 + number2}. Merci d'avoir participé ${firstname}.</p>`;
*/


//-- Version très courte
/*
const result = parseInt(window.prompt(Saisissez un nombre)) + parseInt(window.prompt(Saisissez un deuxième nombre));

dataElt.innerHTML += `<p>Le résultat est de ${result}. Merci d'avoir participé ${firstname}.</p>`;
*/