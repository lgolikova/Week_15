let operator;
function calc() {
    let number1 = document.getElementById('firstNumber').value;
    let number2 = document.getElementById('secondNumber').value;
    let result;
    switch (operator) {
        case '+':
            result = +number1 + +number2;
            break;
        case '-':
            result = +number1 - +number2;
            break;  
        case '*':
            result = +number1 * +number2;
            break;
        case '/':
            if (number2 == 0) {
                alert ("На ноль делить нельзя!")
            } else {     
            result = +number1 / +number2;}
            break;                      
    }
    document.getElementById('result').value = result;
}


// Со сбросом помог наставник:
function getReset() {
    let inputs = document.querySelectorAll('input[type=text]');
    for (let i=0; i < inputs.length; i++) {
        inputs[i].value = '';
    };
}



