// -------- Enoncé 

// Après avoir demandé un montant HT à l'utilisateur, calculez le montant TTC et affichez-le sous forme de phrase dans la page.

// ex : 
// Pour un montant HT de 200 € il y a 40 € de TVA.
// Le montant TTC est donc de  240 €.

// TVA = 20/100

// -------- Aide 
//  Faire les calculs -> Transformer un string en nombre à virgule : parseFloat() meme utilisation que parseInt()
// montant tva = montant ht * TAUX TVA;
// montant ttc = montant tva + montant ht;
// Afficher les resultats sous forme de phrase à inserer dans la div #data

const dataElt = document.getElementById('data');
const taxFreePrice = parseFloat(prompt("Saisissez le prix HT"));
const tva = taxFreePrice * (20 / 100);
const priceFullTax = tva + taxFreePrice;

dataElt.innerHTML += `
    <p>Pour un montant HT de ${taxFreePrice}€ il y a ${tva}€ de TVA.</p> 
    <p>Le montant TTC est dont de ${priceFullTax}</p>
    `;

//---- Correction
/*
const dataElt = document.getElementById('data');
const montant_ht = parseFloat(prompt("Quel est le montant HT ?"));

const taux_tva = 20 / 100;

// Calcul
const montant_tva = montant_ht * taux_tva;
const montant_ttc = montant_tva + montant_ht;

// Affichage
dataElt.innerHTML += `
    <p>Pour un montant HT de ${montant_ht}€, il y a ${montant_ht}€ de TVA.</p>
    <p>La montant TTC est dont de ${montant_ttc}€.</p>
    `;
*/
