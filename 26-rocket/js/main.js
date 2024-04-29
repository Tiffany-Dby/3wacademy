'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

// -- Billboard -- //
const billboardSpanElt = document.querySelector('#billboard span');

// -- Buttons -- //
// Firing Button
const firingBtnElt = document.getElementById('firing-button');

// -- Rocket -- //
const rocketElt = document.getElementById('rocket');

// -- Stars Container -- //
const starsContainerElt = document.querySelector('.starsContainer');


/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

function countdown() {
    // Countdown start at 10
    let counter = 10;
    billboardSpanElt.textContent = `${counter}`;

    // Countdown display -1s every second
    let countdownID = setInterval(() => {
        counter--;

        // Clear interval when countdown reaches 0
        if (counter <= 0) {
            clearInterval(countdownID);
        }

        billboardSpanElt.textContent = `${counter}`;
    }, 1000);

    // Changes the image src of the button at the start of the countdown
    firingBtnElt.setAttribute('src', 'images/cancel-button.png');

    // Changes the image src of the rocket at the start of the countdown
    rocketElt.setAttribute('src', 'images/rocket2.gif');

    // Changes the image src at the end of the countdown
    setTimeout(() => {
        rocketElt.setAttribute('src', 'images/rocket3.gif');
        rocketElt.classList.add('tookOff');

        // Add class disabled on click of the firing button
        firingBtnElt.classList.add('disabled');

        // Disable button when countdown reaches 0
        firingBtnElt.removeEventListener('click', countdown);
    }, 10000);
}


function createStar() {
    // Create 150 div.star
    let stars = '';
    for (let i = 0; i < 150; i++) {
        stars += `<div class="star"></div>`
    }
    starsContainerElt.innerHTML += stars;

    // Select Nodelist of star elements
    const starElts = document.querySelectorAll('.star')

    // Gives random position x, y on creation
    starElts.forEach(function(value) {
        value.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
        value.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
    });
}


function starSize() {
    const starElts = document.querySelectorAll('.star');

    // Loop to remove .tiny, .normal or .small then adds a random one between the 3 to set size randomly (blink effect)
    starElts.forEach(function(value) {
        // Remove
        if (value.classList.contains('tiny')) {
            value.classList.remove('tiny');
        }
        // Remove
        if (value.classList.contains('normal')) {
            value.classList.remove('normal');
        }
        // Remove
        if (value.classList.contains('big')) {
            value.classList.remove('big');
        }
        // Set
        if (!value.classList.contains('tiny') || !value.classList.contains('normal') || value.classList.contains('big')) {
            const classes = ['tiny', 'normal', 'big'];
            const random = Math.floor(Math.random() * classes.length);
            value.classList.add(classes[random]);
        }
    });
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/


// ---- Events ---- //
document.addEventListener('DOMContentLoaded', function() {
    // -- Firing button -- //
    firingBtnElt.addEventListener('click', countdown);

    // -- Stars -- //
    // Create
    createStar();
    // Blink effect
    setInterval(starSize, 250);
});


// Other method
/* 
function createStar(className, top, left) {
    const star = `<div class="star ${className}" style="${top} ${left}"></div>`;
    return star;
}
for (let i = 0; i < 150; i++) {
    createStar(className, top, left)
}
*/
//createStar();
// setInterval(starSize, 500);
