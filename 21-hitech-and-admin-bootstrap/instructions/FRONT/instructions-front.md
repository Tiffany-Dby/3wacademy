# Instructions Front

## Charactères UNICODE spéciaux (à copier)
A utiliser dans le champ de recherche et dans le fil d'Ariane: ❯

## Responsive Web Design
La page est à intérer en mobile first.

Points de rupture
- entre mobile et tablette: 480px
- entre tablette et bureau: 960px

## Spécifications

Utiliser des variables CSS à minima pour les valeurs suivantes

### Généralités
- largeur max du container (zone de lecture): 1140px
- taille du texte par défaut: 15px
- taille du texte des titres 1: 36px
- taille du texte des titres 2: 24px
- taille du texte des titres 3: 18px
- hauteur de ligne: 1.5

### Fonts
- défaut: Open Sans
- titres: Raleway

### Couleurs
- fond de la page: #eee
- fond des éléments gris: #eee
- fond de l'entête (header) : #0c6588 (+ image de fond)
- fond du menu: #e2f7ff
- fond du contenu principal (main): #fff
- fond du pied de page (footer): #333
- titres: #333
- texte: #555
- texte de l'entête: #e2f7ff
- texte du pied de page: #ddd
- liens / boutons: #0c6588
- liens / boutons survolés: #000
- liens du pied de page: #eee

### Bordures
- sm: 1px solid #eee
- md: 1px solid #ddd
- lg: 2px solid #ccc

### Ombres
- sm: 0 0 1px rgba(0,0,0,0.2)
- md: 0 0 3px rgba(0,0,0,0.3)
- lg: 0 0 5px rgba(0,0,0,0.4)
- xl: 0 10px 20px rgba(0,0,0,0.5)


## Options d'affichage

La barre d'accessibilté a 4 boutons pouvant modifier le thème.

Thème sombre contrasté avec les valeurs suivantes:
- fond de la page: #222
- fond des éléments gris: #444
- fond du menu: #0c6588
- fond du contenu principal (main): #333
- fond du pied de page (footer): #333
- titres: #fff
- texte: #ddd
- liens / boutons: #e2f7ff
- liens / boutons survolés: #fff
- bordure sm: 1px solid #666;
- bordure md: 1px solid #555;
- bordure lg: 2px solid #444;

Interlignage plus grand:
- taille du texte par défaut: 1.6rem
- line-height: 2

## Module de recherche

Ajouter un SELECT avec comme options les différentes boutiques:
- Ordinateurs
- Péripheriques & composants
- Téléphones
- Objets connectés

## Slider
Le slider est à intégrer à l'aide du plugin jQuery Slippry : https://slippry.com/



## Spécial

### Icônes
La font-icon est à préparer et télécharger sur IcoMoon App. Ne prendre que les icones nécéssaires à la page.
1. Aller sur https://icomoon.io/app/
2. Cliquer le sur le bouton rouge en bas "Add Icons From Library…"
3. Identifier la librarie d'icônes "Linecons", cliquer sur "Add"
4. Sélectionner les icônes présents sur la maquette
5. Cliquer sur "Generate Font" (en bas à droite) puis sur "Download"
6. Intégrer la feuille de style téléchargée via une balise LINK et ajouter aussi le dossier fonts
7. Vérifier/corriger les chemins vers les fonts (dans la feuille de style)

### Images des options de paiement
Utiliser un sprite pour les images des options de paiement

### Décoration des titres
Ajouter des points gris à droite des titres de section sont à réalise entièrement en CSS en utilisant ::after et les dégradés (voir capture d'écran)

### Keywords
Ajouter des étiquettes sous le titre Présentation (voir capture d'écran)
à réaliser tout en CSS en utilisant :: before et ::after



## Accessibilité

### Images
Bien ajouter une description complête à cahcune des images

### Menu (focus)
Prévoir un menu d'accessibilité caché mais visible via la touche tab comprenant les liens suivants (ancres):
- Haut de page => cible le haut de la page
- Recherche => cible le champ de recherche
- Mon compte => cible le lien "Mon compte"
- Menu principal => cible le menu
- Sommaire => cible le sommaire (TOC: Table Of Contents) sous le nom du produit

### Outline
Prévoir un contour (outline) de 2px solide noir lors de l'utilisation de la touche tab

### Rôles des éléments principaux (accessibilité)
Ajouter si possible les rôles de chaque éléments importants (attribut role)

https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/ARIA/Techniques_ARIA

