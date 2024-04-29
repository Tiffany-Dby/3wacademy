// Enoncé
/**
 * Demander à l'utilisateur de saisir un montant HT
 * Demander à l'utilisateur s'il veut une remise 
 * 
 * Si l'utilisateur saisit 'oui' ou 'yes' :
 * -> Demander le taux de remise désiré en pourcentage
 * -> Calculer et Afficher :
 *      Pour un montant HT de XX.XX € (après remise), il y a XX.XX € de TVA.
 *      Le montant TTC est donc de XX.XX €
 *      Une remise de XX.XX% a été appliquée sur le montant HT.
 * 
 * Si l'utilisateur saisit autre chose (que oui ou yes) :
 * -> Calculer et Afficher :
 *      Pour un montant HT de XX.XX €, il y a XX € de TVA.
 *      Le montant TTC est donc de XX.XX €.
 *      Aucune remise n'a été appliquée.
 * 
 * Aide
 * Attention prompt() renvoie un string, pour le changer en nombre à virgule voir parseFloat()
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/parseFloat
 * 
 * Bonus
 * -> Afficher 2 chiffres après la virgule ( toFixed() )
 */

const dataElt = document.getElementById('data');
const tax_free_price = parseFloat(prompt('Saisissez le prix HT.'));
const isDiscount = prompt('Souhaitez-vous appliquer une remise ?');
const tax_rate = 20 / 100;

if (isDiscount === 'oui' || isDiscount === 'yes') {
    const userDiscount = parseFloat(prompt("Saisissez le taux de la remise en pourcentage."));
    const tax_free_discount = tax_free_price * (userDiscount / 100);
    const tax_rate_discount = tax_free_discount * (tax_rate);
    const total_price = tax_free_discount + tax_rate_discount;

    dataElt.innerHTML += `
        <p>Pour un montant HT de ${tax_free_discount.toFixed(2)}€ (après remise), il y a ${tax_rate_discount.toFixed(2)}€ de TVA.</p>
        <p>Le montant TTC est donc de ${total_price.toFixed(2)}€.</p>
        <p>Une remise de ${userDiscount.toFixed(2)}% a été appliquée sur le montant HT.</p>
`;
}
else {
    const tax_rate_no_discount = tax_free_price * tax_rate;
    const price_no_discount = tax_free_price + tax_rate_no_discount;

    dataElt.innerHTML += `
        <p>Pour un montant HT de ${tax_free_price.toFixed(2)}€, il y a ${tax_rate_no_discount.toFixed(2)}€ de TVA.</p>
        <p>Le montant TTC est donc de ${price_no_discount.toFixed(2)}€.</p>
`;
}
