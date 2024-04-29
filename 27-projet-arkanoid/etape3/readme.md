# Projet - Arkanoid 3

## GameOver

### Quoi j'ai perdu ?

Bon avant toute chose il va nous falloir détecter la collision de notre balle avec le plateau. Et si la balle finie en bas du Canvas sans rebondir sur le plateau : Game Over !!

## A vous de jouer :

- notre fonction playGame() est appelée à chaque rafraichissement, c'est donc ici que nous allons détecter si la position de la balle est en collision avec la position du plateau,
- pour ça nous allons créer une fonction detectCollisions() qui sera appelée au début de la fonction playGame()
- dans cette fonction nous allons y déplacer la détection de collision avec le haut et le bas du Canvas,
- puis nous rajoutons dans cette fonction detectCollisions() la détection de collision avec le plateau : nous allons regarder si la position Y de la balle est la même que le haut du plateau et si la position X de la balle se trouve entre le point gauche et le point droit du plateau
- si c'est la cas nous inversons la direction de la balle ! Elle remonte !
- si la balle descend et n'est pas réceptionnée par le plateau, c'est à dire si la balle entre en collision avec le bas du Canvas, c'est GameOver !

## Astuce : 
Nous allons pouvoir rajouter une propriété gameOver à notre objet game. Elle sera à false et passera à true quand on a perdu Dans notre fonction displayGame(), si game.gameOver est true : nous affichons uniquement un texte Game Over et on s'en va de la fonction (return)