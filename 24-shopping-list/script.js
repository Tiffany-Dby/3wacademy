'use strict'; // Mode strict du JavaScript

/*******************************************************************/
/* ************************ DONNEES ************************* */
/*******************************************************************/
// Shopping list
const shoppingList = ['fraises', 'bananes'];

// Product list
const displayProductsElt = document.getElementById('displayProducts');

// Number of products
const numberPoductsElt = document.getElementById('numberPoducts');

// Message 
const msgElt = document.getElementById('message');

// Input 
const inputNewProductElt = document.getElementById('newProduct');
console.log(inputNewProductElt.value)
// --- Buttons
// Add 
const btnAddElt = document.getElementById('addProduct');

// Remove
const btnRemoveElt = document.getElementById('removeProduct');

// Remove all
const btnRemoveAllElt = document.getElementById('removeAllProducts');

/*******************************************************************/
/* ************************ FONCTIONS  ************************* */
/*******************************************************************/

// Add an item in the shopping list
function addItem(item, messageElt) {
    const newItem = item.toLowerCase();
    messageElt.style.color = '#333';

    // Verify if added item is empty and display an error
    if (item === '') {
        messageElt.style.color = 'red';
        messageElt.textContent = `Erreur : vous n'avez ajouté aucun nom de produit.`
    }
    else {
        // Add item
        shoppingList.push(newItem);
        console.log(shoppingList);

        // Display updated list and number of items within 
        displayShoppingList(displayProductsElt, numberPoductsElt);

        messageElt.textContent = `Vous avez ajouté : ${inputNewProductElt.value}.`;
    }

    // Empty input after it is added in the list
    inputNewProductElt.value = '';
}

console.log(shoppingList);

// Display the shopping list
function displayShoppingList(listElt, nbreElt) {
    let productLi = '';
    // Puts each product of the shopping list in a li
    shoppingList.forEach(function(value) {
        productLi += `<li>${value}</li>`;
    });

    // Gets the length of the shopping list to display the amount of products in it
    const productCount = `${shoppingList.length}`;

    // Displays the list and amount of products on the page
    nbreElt.textContent = productCount;
    listElt.innerHTML = `<ul>${productLi}</ul>`;
}

function removeItem(item, listElt, messageElt) {
    const removeItem = item.toLowerCase();
    // Gets index of item to remove
    const itemIndex = shoppingList.indexOf(removeItem);

    messageElt.style.color = '#333';

    // Verify if the item value is within the list
    if (shoppingList.indexOf(item) !== -1) {
        shoppingList.splice(itemIndex, 1);

        // Display updated list and number of items within 
        displayShoppingList(displayProductsElt, numberPoductsElt);
        messageElt.textContent = `Vous avez supprimé : ${inputNewProductElt.value}.`;
    }
    else {
        // Display message if no items matches the input value
        messageElt.style.color = 'red';
        messageElt.textContent = `Erreur : Il n'y aucun produit correspondant à "${inputNewProductElt.value}" dans la liste.`;
    }

    // Empty input after it is added in the list
    inputNewProductElt.value = '';
}

function removeAllItems(messageElt) {
    shoppingList.length = 0;

    // Display message when all items are removed
    messageElt.style.color = '#333';
    messageElt.textContent = `Vous avez supprimé tous les produits de la liste.`
    
    // Display message if no items matches the input value
    displayShoppingList(displayProductsElt, numberPoductsElt);
}

/*******************************************************************/
/* ********************** CODE PRINCIPAL  *********************** */
/*******************************************************************/

displayShoppingList(displayProductsElt, numberPoductsElt);

btnAddElt.addEventListener('click', () => {
    addItem(inputNewProductElt.value, msgElt);
});

btnRemoveElt.addEventListener('click', () => {
    removeItem(inputNewProductElt.value, displayProductsElt, msgElt);
});

btnRemoveAllElt.addEventListener('click', () => {
    removeAllItems(msgElt);
});
