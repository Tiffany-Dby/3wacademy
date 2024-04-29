'use strict';

// On défini les propriétés de notre balle dans un objet
const ball = {
    color: "#FF0000",
    radius: 10,
    x: 100,
    y: 100,
    direction: -1
};

// On défini les propriétés de notre jeu
const game = {
    background: '#DDDDDD',
    width: 800,
    height: 600,
    speed: 5,
    gameOver: false,
    animationId: null,
    canvasDom: null,
    ctx: null
};

// On défini les propriétés de notre plateau dans un objet
const paddle = {
    color: "#000000",
    width: 100,
    height: 20,
    x: game.width / 2 - 50,
    y: 500,
    direction: 0,
    speed: 6
};

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
    detectCollisions();

    // Move ball
    ball.y += game.speed * ball.direction;

    // Ball reaches bottom -> change direction
    if (ball.y + ball.radius >= game.height) {
        ball.direction = -1;
    }

    // Ball reaches top -> change direction
    if (ball.y - ball.radius <= 0) {
        ball.direction = 1;
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

    // Display Game Over
    if (game.gameOver === true) {
        // Draw canvas
        game.ctx.fillStyle = game.background;
        game.ctx.fillRect(0, 0, game.width, game.height);

        // Write text
        game.ctx.font = 'bold 25px Verdana';
        game.ctx.fillStyle = '#333';
        // Center text
        const textMetrics = game.ctx.measureText('Game Over');
        game.ctx.fillText('Game Over', 400 - textMetrics.width / 2, game.height / 2);
        return;
    }
}

function keyboardEvent(e) {
    // Prevent default behavior from keyboard on the page
    e.preventDefault();

    // Move paddle
    paddle.x += paddle.speed * paddle.direction;

    switch (e.key) {
        case 'ArrowRight':
            // Allows movement right until paddle reaches right edge
            if (paddle.x + paddle.width < game.width) {
                paddle.direction = 10;
            }
            else {
                paddle.direction = 0;
            }
            break;
        case 'ArrowLeft':
            // Allows movement left until paddle reaches left edge
            if (paddle.x > 0) {
                paddle.direction = -10;
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

function detectCollisions() {
    if (ball.y + ball.radius >= game.height) {
        game.gameOver = true;
        console.log(game.gameOver)
    }

    if (ball.y + ball.radius === paddle.y && (ball.x + ball.radius >= paddle.x && ball.x + ball.radius <= paddle.x + paddle.width)) {
        ball.direction = -1;
    }
}
