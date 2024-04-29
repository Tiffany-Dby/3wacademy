'use strict';

// On défini le propriété de notre balle dans un objet
const ball = {
    color: "#FF0000",
    radius: 10,
    x: 100,
    y: 100,
    direction: { y: -1, x: 0 },
};

// On défini les propriété de notre jeu
const game = {
    start: false,
    pause: false,
    background: '#DDDDDD',
    width: 800,
    height: 600,
    speed: 5,
    gameOver: false,
    animationId: null,
    canvasDom: null,
    ctx: null
}

// On défini le propriété de notre plateau dans un objet
const paddle = {
    color: "#000000",
    width: 100,
    height: 20,
    x: 0,
    y: 500,
    direction: 0,
    speed: 6
};

// On défini nos briques
const bricks = [{ color: '#333333', numberCollisions: 1 }, { color: '#00FF00', numberCollisions: 2 }, { color: '#333333', numberCollisions: 1 }, { color: '#00FF00', numberCollisions: 2 }, { color: '#333333', numberCollisions: 1 }, { color: '#00FF00', numberCollisions: 2 }, { color: '#333333', numberCollisions: 1 }, { color: '#00FF00', numberCollisions: 2 }, { color: '#333333', numberCollisions: 1 }, { color: '#00FF00', numberCollisions: 2 }, { color: '#333333', numberCollisions: 1 }];