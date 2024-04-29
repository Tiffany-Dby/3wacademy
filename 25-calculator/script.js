// ---------- Select

// Display btn
const displayCalcBtnElt = document.getElementById('displayCalculator');

// Hide btn
const hideCalcBtnElt = document.getElementById('hideCalculator');

// ---- Form
const calculatorElt = document.querySelector('.calculator');
// -- Number 1
const number1Elt = calculatorElt.querySelector('#number1');
const helpNbr1Elt = calculatorElt.querySelector('#helpNumber1');
let number1;


// -- Operator
const operatorElt = calculatorElt.querySelector('#operator');

// -- Number 2
const number2Elt = calculatorElt.querySelector('#number2');
const helpNbr2Elt = calculatorElt.querySelector('#helpNumber2');
let number2;
// ----

// ---- Result
const displayResultElt = document.querySelector('#displayResult');
const calculationElt = document.querySelector('#displayResult p')
// ----

// User help
const helpUserElt = document.querySelector('.helpUser');
const helpUserMsg = document.querySelector('.helpUser p');
// ----------



// ---------- Events

// ---- Display Calculator
displayCalcBtnElt.addEventListener('click', () => {
    calculatorElt.classList.remove('hide');
});

// ---- Hide Calculator
hideCalcBtnElt.addEventListener('click', () => {
    calculatorElt.classList.add('hide');
    helpUserElt.classList.add('hide');
    displayResultElt.classList.add('hide');
});

// ---- Calculator

// -- Help on hover
// Number 1
number1Elt.addEventListener('mouseover', () => {
    helpUserElt.classList.remove('hide');
    helpUserMsg.textContent = `Saisir un chiffre.`
});
number1Elt.addEventListener('mouseleave', () => {
    helpUserElt.classList.add('hide');
});

// Operator
operatorElt.addEventListener('mouseover', () => {
    helpUserElt.classList.remove('hide');
    helpUserMsg.textContent = `Choisissez un opérateur.`
});
operatorElt.addEventListener('mouseleave', () => {
    helpUserElt.classList.add('hide');
});

// Number 2
number2Elt.addEventListener('mouseover', () => {
    helpUserElt.classList.remove('hide');
    helpUserMsg.textContent = `Saisir un chiffre.`
});
number2Elt.addEventListener('mouseleave', () => {
    helpUserElt.classList.add('hide');
});


// -- Help user if not typing a number
// Number 1
number1Elt.addEventListener('keyup', () => {
    number1 = number1Elt.value;
    if (isNaN(number1)) {
        helpNbr1Elt.style.color = 'red';
        helpNbr1Elt.textContent = `Erreur : Vérifiez que vous avez correctement entré un nombre.`;
    }
    else {
        helpNbr1Elt.style.color = 'transparent';
        helpNbr1Elt.textContent = ``;
    }
});

// Number 2
number2Elt.addEventListener('keyup', () => {
    number2 = number2Elt.value;
    if (isNaN(number2)) {
        helpNbr2Elt.style.color = 'red';
        helpNbr2Elt.textContent = `Erreur : vérifiez que vous avez correctement entré un nombre.`;
    }
    else {
        helpNbr2Elt.style.color = 'transparent';
        helpNbr2Elt.textContent = ``;
    }
});

// Submit
calculatorElt.addEventListener('submit', (e) => {
    // Prevents page from reloading when clicking submit (OK) button
    e.preventDefault();

    // number1 and number2
    number1 = parseFloat(number1Elt.value.trim());
    number2 = parseFloat(number2Elt.value.trim());

    // User operator value
    const operator = operatorElt.value;

    let result;

    // Hide result by default
    displayResultElt.classList.add('hide');

    // ---- Verifications
    // Number 1
    if (isNaN(number1) || number1 == null || number1 == '') {
        helpNbr1Elt.style.color = 'red';
        helpNbr1Elt.textContent = `Erreur : vous devez entrer un nombre.`;
        if (number1.includes(' ')) {
            helpNbr1Elt.textContent += ` Retirez les espaces.`;
        }
    }

    // Number 2
    if (isNaN(number2) || number2 == null || number2 == '') {
        helpNbr2Elt.style.color = 'red';
        helpNbr2Elt.textContent = `Erreur : vous devez entrer un nombre.`;
        if (number2.includes(' ')) {
            helpNbr2Elt.textContent += ` Retirez les espaces.`;
        }
    }

    // Display result if everything is correctly filled by the user
    if (!isNaN(number1) && !(number1 == null) && !(number1 == '') && !isNaN(number2) && !(number2 == null) && !(number2 == '')) {

        // Calculation for each operator
        switch (operator) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '/':
                result = number1 / number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '%':
                result = number1 % number2;
                break;
        }

        displayResultElt.classList.remove('hide');
        calculationElt.textContent = `${number1} ${operator} ${number2} = ${result}`;
    }
});
// ----
