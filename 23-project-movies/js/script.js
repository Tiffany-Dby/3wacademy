/*
Projet Movies

Enoncé
Au chargement de la page, faire afficher dynamiquement chacun des films du tableau movies en utilisant le template (article.card) créé par l'integrateur et qui se trouve dans le html.

Le tableau de films se trouve dans le fichier data.js

Aide :
- mettre en commentaire le template dans le html
- En js : pour chacun des elements du tableau movies, faire afficher dans la section d'ID displayMovies, chacun des films avec la photo, le titre et le realisateur respectif
- créer une fonction showMovies() pour générer l'affichage
- vous executerez cette fonction sur chacun des films
 */

// Bonus 1
// Insérer dynamiquement le nombre de films à l'affiche dans la span d'ID nbreFilms


// Bonus 2
// Insérer dynamiquement l'index du film dans l'attribut personnalisé data-index


// Selection
const displayMoviesElt = document.getElementById('displayMovies');
const nbreFilmsElt = document.getElementById('nbreFilms');


// Fonction
function showMovies(value, index) {
    displayMoviesElt.innerHTML += `
        <article class="card" data-index="${index}">
            <div class="card-img">
                <img src="${value.image}" alt="${value.title} ${value.director}">
            </div>
            <div class="card-content">
                <h3>${value.title}</h3>
                <h4>${value.director}</h4>
            </div>
        </article>
    `;
}

// Affichage dynamique des movies
movies.forEach(function(value, index) {
    showMovies(value, index);
});



/*for (let i = 0; i < movies.length; i++) {
    displayMoviesElt.innerHTML += `
        <article class="card" data-index="${i}">
            <div class="card-img">
                <img src="${movies[i].image}" alt="">
            </div>
            <div class="card-content">
                <h3>${movies[i].title}</h3>
                <h4>${movies[i].director}</h4>
            </div>
        </article>
    `;
}*/


// Affiche le nombre de films du tableau movies
nbreFilmsElt.innerHTML = movies.length;


/////////////////////////////////


// Au clic sur chaque film, faire afficher les détails du film dans la section detailsMovies. Une classe hidden cache cette section au chargement de la page.
// Au clic sur la flèche, la section detailsMovies se cache à nouveau
const modalElt = document.getElementById('modal');
const detailsMoviesElt = document.querySelector('.detailsMovies');
const backBtnElt = document.querySelector('.back button');
const movieElts = document.querySelectorAll('.card');

// Details
const detailsContentElt = document.querySelector('.detailsContent');
const btnTrailerElt = detailsContentElt.querySelector('.btn');

function showDetails(e) {
    // Cache la liste des movies
    displayMoviesElt.classList.add('hidden');

    // Affiche la section detailsMovies
    detailsMoviesElt.classList.remove('hidden');

    // Récupère l'index du film cliqué
    const movieIndex = e.currentTarget.getAttribute('data-index');

    // On affiche les données du film cliqué
    const detailsObjDom = {
        titleElt: document.querySelector('.title'),
        imageElt: document.querySelector('.detailsImg img'),
        directorElt: document.querySelector('.director'),
        actorsElt: document.querySelector('.actors'),
        genreElt: document.querySelector('.genre'),
        durationElt: document.querySelector('.duration'),
        dateElt: document.querySelector('.date'),
        resumeElt: document.querySelector('.resume'),
        iFrameElt: modalElt.querySelector('iframe')
    }

    detailsObjDom.titleElt.textContent = movies[movieIndex].title;
    detailsObjDom.imageElt.src = movies[movieIndex].image;
    detailsObjDom.imageElt.alt = movies[movieIndex].title;
    detailsObjDom.directorElt.textContent = movies[movieIndex].director;
    detailsObjDom.actorsElt.textContent = movies[movieIndex].actors.join(', ');
    detailsObjDom.genreElt.textContent = movies[movieIndex].genre.join(' - ');
    detailsObjDom.durationElt.textContent = movies[movieIndex].duration;
    detailsObjDom.dateElt.textContent = movies[movieIndex].date;
    detailsObjDom.resumeElt.textContent = movies[movieIndex].resume;

    // Affiche la modale avec le trailer youtube
    btnTrailerElt.addEventListener('click', () => {
        modalElt.classList.remove('hidden');
        detailsObjDom.iFrameElt.src = `https://www.youtube.com/embed/${movies[movieIndex].traileryt}?enablejsapi=1&version=3&playerapiid=ytplayer`;
    });

    // Cacher la modale
    modalElt.addEventListener('click', () => {
        detailsObjDom.iFrameElt.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        modalElt.classList.add('hidden');
    })
}

// Afficher les détails détails du film cliqué
movieElts.forEach(function(value) {
    value.addEventListener('click', showDetails)
})

// Revenir sur la liste des films
backBtnElt.addEventListener('click', () => {
    detailsMoviesElt.classList.add('hidden');
    displayMoviesElt.classList.remove('hidden');
})
