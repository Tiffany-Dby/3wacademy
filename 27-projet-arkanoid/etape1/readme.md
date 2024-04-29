# Projet - Arkanoid 1

## Animer notre Balle
Dans le dernier exemple du cours nous avons créé une balle que nous pouvons déplacer avec les touches du clavier. A la place de cette fonctionnalité et à l'aide de requestAnimationFrame() nous allons automatiser le rebond de la balle du haut vers le bas !

## A vous de jouer :

- on va mettre de côté le gestionnaire d'évènements keydown pour déplacer la balle avec le clavier.
- on va programmer une fonction qui va lancer un requestAnimationFrame(). Cette fonction va s'appeler playGame()
- cette fonction va commencer par décrémenter la position y de notre balle, la position de la balle va monter,
- elle va ensuite appeler une fonction displayGame() qui va réinitialiser le Canvas et afficher tout ce qui doit être afficher dans le Canvas, ici la balle à la bonne position,
- puis elle va lancer un appel à requestAnimationFrame() pour se rappeler elle même au prochain rafraichissement,
- quand notre balle arrive à 0 sur y elle rebondit et donc sa direction change, la fonction va donc incrémenter la position y de notre balle,
- quand notre balle arrive à la hauteur du Canvas elle revondit et donc sa direction change, la fonction va donc décrémenter la position y de notre balle,
etc...

## Astuce : On peut créer un objet ball représentant la balle avec comme propriétés :

- sa position X,
- sa position Y,
- sa couleur,
- son rayon
- sa direction sur Y

On peut créer un objet game représentant le jeu avec comme propriétés :

- la largeur du plateau de jeu,
- la hauteur du plateau de jeu,
- sa couleur

On peut gérer la direction de la balle avec une variable (ci dessus dans l'objet game) Si cette direction est égale à 1 la position de la balle sera incrémentée, si elle est égale à -1 elle sera décrémentée.

```javascript

let direction = 1;
let position = 0;

// on fait évoluer la position
position += 1 *  direction; //ici position est incrémentée de 1

direction = -1;
position += 1 *  direction; //ici position est décrémentée de 1

```