## Enoncé

Création d'une liste de courses interactive en JavaScript

# Objectifs pédagogiques :
L'objectif de cet exercice est de vous familiariser avec les opérations de base sur les tableaux en JavaScript, la manipulation du DOM (Document Object Model), et la gestion des événements.

# Description :
Vous allez créer un script qui permet à l'utilisateur de gérer une liste de courses sur une page web. Vous devez écrire le JavaScript nécessaire pour permettre à l'utilisateur d'ajouter des produits à la liste, de supprimer un produit spécifique, ou de vider complètement la liste.

# Instructions :

* 1/ Initialisation de la liste :

Déclarez un tableau nommé shoppingList et initialisez-le avec quelques éléments comme 'fraises' et 'bananes'.

* 2/ Ajout d'un produit :

Écrivez une fonction addItem(item) qui prend en paramètre une chaîne de caractères, la convertit en minuscules, et l'ajoute au tableau shoppingList.

* 3/ Affichage de la liste :

Écrivez une fonction displayShoppingList(listElt, nbreElt) qui prend en paramètres l'élément DOM où afficher la liste des produits et l'élément DOM où afficher le nombre de produits. Cette fonction doit actualiser le contenu de ces éléments en fonction des éléments présents dans le tableau shoppingList.

* 4/ Suppression d'un produit :

Écrivez une fonction removeItem(item, listElt, messageElt) qui tente de retirer un élément du tableau shoppingList. Si l'élément n'existe pas, affichez un message d'erreur. Si la suppression est réussie, mettez à jour l'affichage de la liste.

* 5/ Suppression de tous les produits :

Écrivez une fonction removeAllItems(messageElt) qui vide le tableau shoppingList et affiche un message confirmant la suppression de tous les produits.

* 6/ Gestion des événements :

Ajoutez des écouteurs d'événements pour les boutons permettant d'ajouter un produit, de supprimer un produit spécifique, et de supprimer tous les produits. Ces écouteurs d'événements appelleront les fonctions appropriées en passant les valeurs saisies par l'utilisateur et mettront à jour l'affichage.

# Consignes supplémentaires :

* Le code ne doit pas se répéter, il faut donc organiser le programme en fonctions.
* Tenez compte de la casse des produits lors de l'ajout ou de la suppression.
* Assurez-vous que l'utilisateur ne puisse pas ajouter un produit vide à la liste.
* Affichez des messages d'erreur ou de confirmation appropriés en fonction des actions de l'utilisateur.
* Après chaque action, le champ de saisie doit être vidé et la liste des produits mise à jour.

# Résultat attendu :
À la fin de cet exercice, vous aurez une page web fonctionnelle où l'utilisateur pourra voir une liste de courses, ajouter de nouveaux produits à la liste, en supprimer un spécifique ou tous en une fois.

Bonne chance !
