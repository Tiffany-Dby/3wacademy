/*
Créer un programme qui fait 10 tours de manège en affichant le numéro du tour à chaque tour dans le navigateur :

Le manège démarre
C'est le tour numéro 1
C'est le tour numéro 2
...
C'est le tour numéro 10
Le manège s'arrête
*/

const dataElt = document.getElementById('data');

for (let tourNbr = 0; tourNbr <= 10; tourNbr++) {
    if (tourNbr === 0) {
        dataElt.innerHTML += `<p>Le manège démarre !</p>`;
    }
    else {
        dataElt.innerHTML += `<p>C'est le tour numéro ${tourNbr}.</p>`;
        if (tourNbr === 10) {
            dataElt.innerHTML += `<p>Le manège s'arrête. :(</p>`;
        }
    }
}

// 2ème méthode :
/*
for (let tour = 0; tour <= 11; tour++) {
    if (tour === 0) {
        dataElt.innerHTML += `<p>Le manège démarre</p>`;
    }
    else if (tour === 11) {
        dataElt.innerHTML += `<p>Le manège s'arrête</p>`;
    }
    else {
        dataElt.innerHTML += `<p>C'est le tour numero ${tour}</p>`;
    }

}
*/