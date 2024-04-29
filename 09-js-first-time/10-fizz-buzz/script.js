// Enoncé
/*
FizzBuzz

Ecrivez un programme qui affiche dans le navigateur tous les nombres entre 1 et 100 avec les exceptions suivantes :

Il affiche "Fizz" à la place du nombre si celui-ci est divisible par 3.
Il affiche "Buzz" à la place du nombre si celui-ci est divisible par 5 et non par 3.
Il affiche "FizzBuzz" à la place du nombre si celui-ci est divisible à la fois par 3 et par 5.
Utiliser l'opérateur modulo % qui renvoie le reste de la division d'un entier par un autre.
*/

const dataElt = document.getElementById('data');

for (let nbr = 1; nbr <= 100; nbr++) {
    if (((nbr % 3) == 0) && ((nbr % 5) == 0)) {
        dataElt.innerHTML += `<p>FizzBuzz</p>`
    }
    else if ((nbr % 3) == 0) {
        dataElt.innerHTML += `<p>Fizz</p>`
    }
    else if ((nbr % 5) == 0) {
        dataElt.innerHTML += `<p>Buzz</p>`
    }
    else {
        dataElt.innerHTML += `<p>${nbr}</p>`
    }
}
