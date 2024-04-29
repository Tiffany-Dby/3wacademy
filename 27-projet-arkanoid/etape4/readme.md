# Projet - Arkanoid 4

## Start Arkanoid Game

Nous allons maintenant rajouter un peu de jouabilité à notre jeu !

## 2 étapes pour ça :

- Recommencer et mettre le jeu en pause
    -> recommencer le jeu en appuyant sur la barre d'espace si on a fait un game Over
    -> mettre le jeu en pause pendant le jeu en appuyant sur Espace
- Donner de l'angle à la balle selon si elle rebondit à droite, à gauche ou au centre du plateau

## A vous de jouer :

- Dans notre gestionnaire d'évènement keydown on va rajouter une gestion de la barre d'espace,
- On va créer une fonction initPositions() qui va initiliser la position de la balle au centre du plateau, et la position initiale du plateau,
- Cette fonction va aussi initialiser les directions de la balle
- Si on déplace le plateau la position de la balle est recalculée, elle reste au centre du plateau tant que l'on a pas appuyé sur Espace,
- Si on appuie sur la touche Espace, une propriété du jeu (game.start) passe à vrai, alors notre animation de la balle commence,
- Si le jeu est commencé et que l'on appuie sur Espace, le jeu s'arrête, game.pause passe à vrai
- Si on appuie de nouveau le jeu reprend, game.pause passe à faux
- Si on a fait game.gameOver, alors si on appuie sur Espace, la position du plateau, de la balle et la direction de la balle sont réinitialisées (initPositions()) et on peut recommencer le jeu.

## Astuce : 
On va rajouter des propriété à notre objet jeu :

- start
- pause

Pour l'angle de la balle on peut diviser le plateau en 3.

- 1er tiers : la balle part vers le haut à gauche,
- 2eme tiers : la balle part vers le haut,
- 3eme tiers : la balle part vers le haut à droite.

Nous allons modifier la propriété direction de notre balle, elle contiendra 2 propriétés X et Y :

- ball.direction = {x:0,y:-1}
