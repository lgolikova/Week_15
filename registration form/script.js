function checkForm() {

    let name = document.getElementById('name');
    let surname = document.getElementById('surname');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let error = document.getElementById('form_error');
    
    error.innerHTML = '';
    let counter = 0;

    let emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i; 
    let passwordFormat = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    let nameFormat = /^[а-я ,.'-]+$/i;
    let surnameFormat = /^[а-я ,.'-]+$/i;


    if (email.value == '') {
        error.innerHTML += "Введите адрес электронной почты<br>"
    } else if (!validateEmail(email.value)) {
        error.innerHTML += "Адрес электронной почты заполнен неверно<br>"
    }
    else {
        counter += 1;
    }
    function validateEmail(email) {
        return emailFormat.test(email);
    }


    if (password.value == '') {
        error.innerHTML += "Введите пароль<br>"
    } else if (!validatePassword(password.value)) {
        error.innerHTML += "Введите надежный пароль<br>"
    }
    else {
        counter += 1;
    }
    function validatePassword(password) {
        return passwordFormat.test(password);
    }


    if (name.value == '') {
        error.innerHTML += "Введите ваше имя<br>"
    } else if (!validateName(name.value)) {
        error.innerHTML += "Введите корректное имя<br>"
    }
    else {
        counter += 1;
    }
    function validateName(name) {
        return nameFormat.test(name);
    }


    if (surname.value == '') {
        error.innerHTML += "Введите фамилию<br>"
    } else if (!validateSurname(surname.value)) {
        error.innerHTML += "Введите корректную фамилию<br>"
    }
    else {
        counter += 1;
    }
    function validateSurname(surname) {
        return surnameFormat.test(surname);
    }


    if (counter==4) {
        alert (`Добро пожаловать, ${name.value}!`);
    }

}




// function checkForm() {
//     let name = document.getElementById('name');
//     let surname = document.getElementById('surname');
//     let email = document.getElementById('email');
//     let password = document.getElementById('password');
//     let counter=0;
    
//     if (name.value == "") {
//         name.style.color = "red";
//         name.value = "Введите ваше имя";
//         counter+=1;
//     }
//     else {
//         name.style.color = "black";
//     }
//     if (surname.value == "") {
//         surname.style.color = "red";
//         surname.value = "Введите вашу фамилию";
//         counter+=1;
//     }
//     else {
//         surname.style.color = "black";
//     }
//     if (email.value == "") {
//         email.type = "text";
//         email.value = "Введите email";
//         email.style.color = "red";
//         counter+=1;
//     }
//     else {
//         email.style.color = "black";
//     }
//     if (password.value == "") {
//         password.type = "text";
//         password.value = "Введите пароль";
//         password.style.color = "red";  
//         counter+=1;
//     }
//     else if (password.value.length <= 6) {
//         password.type = "text";
//         password.value = "Пароль слишком короткий";
//         password.style.color = "red";
//         counter+=1;
//     }
//     else {
//         password.style.color = "black";
//     }
//     if (counter==0) {
//         let name1 = name.value;
//         alert (`Привет, ${name1}!`);
//     }
// }
    
    