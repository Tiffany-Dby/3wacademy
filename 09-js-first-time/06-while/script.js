// exercice-saisie-obligatoire
//
//## Enoncé
//
// Demander à l'utilisateur de saisir obligatoirement un nombre quoiqu'il arrive, afficher ce nombre ensuite en HTML.

const dataElt = document.getElementById('data');

let answer;

while (isNaN(answer)) {
    answer = prompt('Ecrivez un nombre :');
}

dataElt.innerHTML = `<p>Merci, le nombre que vous avez saisi est : ${answer}.</p>`
