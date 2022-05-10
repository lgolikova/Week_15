function calcSummation() {
    let number1 = document.getElementById('firstNumber').value;
    let number2 = document.getElementById('secondNumber').value;
    let result = +number1 + +number2;
    document.getElementById('result').value = result;
}

function calcSubtraction() {
    let number1 = document.getElementById('firstNumber').value;
    let number2 = document.getElementById('secondNumber').value;
    let result = +number1 - +number2;
    document.getElementById('result').value = result;
}

function calcMultiplication() {
    let number1 = document.getElementById('firstNumber').value;
    let number2 = document.getElementById('secondNumber').value;
    let result = +number1 * +number2;
    document.getElementById('result').value = result;
}

function calcDivision() {
    let number1 = document.getElementById('firstNumber').value;
    let number2 = document.getElementById('secondNumber').value;
    if (number2 == 0) {
        alert ("На ноль делить нельзя!")
    } else { let result = +number1 / +number2;
    document.getElementById('result').value = result;
    }
}


// Со сбросом помог наставник:
function getReset() {
    let inputs = document.querySelectorAll('input[type=text]');
    for (let i=0; i < inputs.length; i++) {
        inputs[i].value = '';
    };
}



