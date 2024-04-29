// Exo Ni Oui Ni Non

// Enoncé
/**
 * Créer un programme qui demande à l'utilisateur s'il veut jouer à ni oui ni non
 * Si l'utilisateur répond oui ou non, il a perdu. On lui affiche un message dans la page
 * S'il répond autre chose, on lui repose la question
 */

const dataElt = document.getElementById('data');

let answer;


while (answer !== 'oui' && answer !== 'non') {
    answer = prompt('Comment allez-vous ?')
}

dataElt.innerHTML = `<p>Vous avez perdu !</p>`;

// true && false - false
// true || false - true