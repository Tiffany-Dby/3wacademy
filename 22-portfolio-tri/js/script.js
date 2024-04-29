// Créer un trieur
// Au clic sur l'un des boutons, seulement les projets de la catégorie cliquée s'affiche. Au clique sur le bouton "tout", tous les projets sont à nouveau visible

// Bonus
// Au clic sur l'un des projets, une modale apparait avec l'image en plus grand format. Pour sortir de la modale, nous pouvons cliquer sur la croix en haut à droite de l'image, où sur l'overlay gris.

// Nav NodeList
const linksElts = document.querySelectorAll('#filters li a')

// Articles NodeList
const articlesElts = document.querySelectorAll('.gallery .imageGallery');

// div#modal > items
const modalElt = document.querySelector('#modal');
const spanElt = document.querySelector('#modal .imageModal span');
const imgModalElt = document.querySelector('#modal .imageModal img');

// Setting up filters on links
linksElts.forEach((value) => {
    value.addEventListener('click', (e) => {
        // Prevents links from going back to the top of the page
        e.preventDefault();

        // Removes .active on all links
        linksElts.forEach((value) => {
            value.classList.remove('active');
        });

        // Adds .active on clicked link
        e.target.classList.add('active');

        // Gets the value from custom attribute
        const filter = value.getAttribute('data-filter');

        // Removes .hide on articles
        articlesElts.forEach((value) => {
            value.classList.remove('hide');

            // Adds .hide on articles not matching clicked filter
            if (filter !== '*' && !value.classList.contains(filter)) {
                value.classList.add('hide');
            }
        });
    });
});

// Setting up modal on clicked articles
articlesElts.forEach((value) => {
    value.addEventListener('click', (e) => {
        // Removes .hide on the div#modal
        modalElt.classList.remove('hide');

        // Gets src attribute from img of the clicked article and set it on imgModalElt
        imgModalElt.src = e.target.getAttribute('src');
    });
});

// Adds .hide on span and modal when clicked to close div#modal
spanElt.addEventListener('click', () => modalElt.classList.add('hide'));

modalElt.addEventListener('click', () => modalElt.classList.add('hide'));

// Prevents div#modal to close when clicking on the image
imgModalElt.addEventListener('click', (e) => e.stopPropagation());





//  --------------------------------------------------------------




/*
const navLinkAllElt = document.querySelector('a[data-filter="*"]');
const navLinkLogoElt = document.querySelector('a[data-filter="logo"]');
const navLinkWebElt = document.querySelector('a[data-filter="web"]');
const navLinkPrintElt = document.querySelector('a[data-filter="print"]');

function showAll() {
    linksElts.forEach(function(value) {
        if (value.getAttribute('data-filter') === '*') {
            value.classList.add('active')
        }
        else {
            value.classList.remove('active')
        }
    });
    articlesElts.forEach(function(value) {
        value.classList.remove('hide');
    });
}

function showOne(dataValue, className) {
    linksElts.forEach(function(value) {
        if (value.getAttribute('data-filter') === dataValue) {
            value.classList.add('active')
        }
        else {
            value.classList.remove('active')
        }
    });
    articlesElts.forEach(function(value) {
        if (value.classList.contains(className)) {
            value.classList.remove('hide');
        }
        else {
            value.classList.add('hide');
        }
    });
}

navLinkAllElt.addEventListener('click', showAll);

navLinkLogoElt.addEventListener('click', function(e) {
    e.preventDefault()
    showOne('logo', 'logo');
});
navLinkWebElt.addEventListener('click', function(e) {
    e.preventDefault()
    showOne('web', 'web');
});
navLinkPrintElt.addEventListener('click', function(e) {
    e.preventDefault()
    showOne('print', 'print');
});
*/
