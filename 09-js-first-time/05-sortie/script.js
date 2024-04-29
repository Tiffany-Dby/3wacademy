/*
Exercice : Planification d'une sortie

Imaginez que vous créez une application pour aider les utilisateurs à planifier une sortie en fonction de la météo et du jour de la semaine.

Créez des constantes pour représenter les jours de la semaine: LUNDI, MARDI, MERCREDI, JEUDI, VENDREDI, SAMEDI et DIMANCHE.

Créez des constantes pour représenter différents types de temps: PLUIE, SOLEIL, NUAGEUX et VENT.

Demandez à l'utilisateur le jour de la semaine prévu pour sa sortie.

Ensuite, demandez-lui la météo prévue pour ce jour.

En fonction des réponses :

Si c'est le weekend (SAMEDI ou DIMANCHE) et qu'il fait SOLEIL, recommandez un pique-nique.
Si c'est en semaine et qu'il fait SOLEIL, recommandez une promenade après le travail.
Si c'est NUAGEUX quel que soit le jour, recommandez une sortie cinéma.
Si c'est VENT, recommandez de rester chez soi et lire un bon livre.
Si c'est PLUIE, recommandez de visiter un musée.

Affichez le résultat dans la page en utilisant le div #data. Un seul innerHTML doit être utilisé ! 
*/

const dataElt = document.getElementById('data');

// 1. Constantes pour les jours de la semaine
const monday = 'lundi';
const tuesday = 'mardi';
const wednesday = 'mercredi';
const thursday = 'jeudi';
const friday = 'vendredi';
const saturday = 'samedi';
const sunday = 'dimanche';

// 2. Constantes pour les types de temps

const rain = 'pluie';
const sun = 'soleil';
const cloudy = 'nuageux';
const wind = 'vent';

// 3. Demande du jour de la semaine
const day = prompt('Quel jour de la semaine est prévue votre sortie (lundi, mardi, mercredi, jeudi, vendredi, samedi, ou dimanche) ?');

// 4. Demande de la météo
const weather = prompt('Quelle est la météo prévue pour ce jour ?');

// 5. Recommandation en fonction des réponses
let advice;
if ((day === saturday || day === sunday) && (weather === sun)) {
    advice = 'Temps parfait pour un pique-nique !';
}
else if (weather === sun) {
    advice = 'Parfait pour une promenade après le travail !';
}
else if (weather === cloudy) {
    advice = "C'est un bon jour pour aller au cinéma.";
}
else if (weather === wind) {
    advice = 'Restez au chaud et lisez un bon livre !';
}
else if (weather === rain) {
    advice = 'Pourquoi ne pas visiter un musée ?';
}
else {
    advice = "Je n'ai pas compris une information.";
}

// 6. Affichage du résultat
dataElt.innerHTML = `<p>Pour votre sortie de ${day} avec une météo : ${weather} : ${advice}</p>`
