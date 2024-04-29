'use strict';

// On défini les propriétés de notre balle dans un objet
const ball = {
    color: "#FF0000",
    radius: 10,
    x: 100,
    y: 100
};

// On défini les propriétés de notre jeu
const game = {
    background: '#DDDDDD',
    width: 800,
    height: 600,
    direction: -1,
    speed: 2,
    animationID: null,
    domObject: document.getElementById('canvas')
}

const ctx = game.domObject.getContext('2d')

// Function
function playGame() {
    ball.y += 1 * game.direction;
    if (ball.y + ball.radius >= game.height) {
        game.direction = -1;
    }
    if (ball.y - ball.radius <= 0) {
        game.direction = 1;
    }

    game.animationID = requestAnimationFrame(playGame);
    displayGame();
}

function displayGame() {
    // Empty canvas before drawing it
    ctx.clearRect(0, 0, game.width, game.height);

    // Draw canvas
    ctx.fillStyle = game.background;
    ctx.fillRect(0, 0, game.width, game.height);

    // Draw ball
    ctx.beginPath();
    ctx.fillStyle = ball.color;
    ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    ctx.fill();
}

// Animation
playGame();
