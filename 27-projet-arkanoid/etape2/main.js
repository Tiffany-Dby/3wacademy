'use strict';

// On défini les propriétés de notre balle dans un objet
const ball = {
    color: "#FF0000",
    radius: 10,
    x: 100,
    y: 100
};

// On défini le propriétés de notre plateau dans un objet
const paddle = {
    color: "#000000",
    width: 100,
    height: 20,
    x: 350,
    y: 500,
    direction: 0,
    speed: 10
};

// On défini les propriétés de notre jeu
const game = {
    background: '#DDDDDD',
    width: 800,
    height: 600,
    direction: -1,
    speed: 5,
    animationID: null,
    canvasDom: null,
    ctx: null
}

document.addEventListener("DOMContentLoaded", () => {
    // Initiate game and eventListener
    initGame();

    // Display canvas (canvas, ball and paddle)
    displayGame();

    // Moves ball
    playGame();
});


// Function
function playGame() {
    // Move ball
    ball.y += 1 * game.direction;

    // Ball reaches bottom -> change direction
    if (ball.y + ball.radius >= game.height) {
        game.direction = -1;
    }

    // Ball reaches top -> change direction
    if (ball.y - ball.radius <= 0) {
        game.direction = 1;
    }

    // Callback animation
    game.animationID = requestAnimationFrame(playGame);

    // Update display
    displayGame();
}

function displayGame() {
    // Empty canvas before drawing it
    game.ctx.clearRect(0, 0, game.width, game.height);

    // Draw canvas
    game.ctx.fillStyle = game.background;
    game.ctx.fillRect(0, 0, game.width, game.height);

    // Draw ball
    game.ctx.beginPath();
    game.ctx.fillStyle = ball.color;
    game.ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    game.ctx.fill();

    // Draw paddle
    game.ctx.fillStyle = paddle.color;
    game.ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

function keyboardEvent(e) {
    // Prevent default behavior from keyboard on the page
    e.preventDefault();

    // Move paddle
    paddle.x += 1 * paddle.direction;

    switch (e.key) {
        case 'ArrowRight':
            // Allows movement right until paddle reaches right edge
            if (paddle.x + paddle.width < game.width) {
                paddle.direction = 1;
            }
            else {
                paddle.direction = 0;
            }
            break;
        case 'ArrowLeft':
            // Allows movement left until paddle reaches left edge
            if (paddle.x > 0) {
                paddle.direction = -1;
            }
            else {
                paddle.direction = 0;
            }
            break;
    }
}

function initGame() {
    game.canvasDom = document.getElementById('canvas');
    game.ctx = game.canvasDom.getContext('2d');

    document.addEventListener('keydown', keyboardEvent);
}
