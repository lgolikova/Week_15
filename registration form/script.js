function checkForm() {

    let name = document.getElementById('name');
    let surname = document.getElementById('surname');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    
    let error = document.getElementById('form_error')
    error.innerHTML = '';

    let emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i; 
    let passwordFormat = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;



    if (email.value == '') {
        error.innerHTML = "Введите адрес электронной почты<br>"
    } else if (!validateEmail(email.value)) {
        error.innerHTML = "Адрес электронной почты заполнен неверно<br>"
    }
    function validateEmail(email) {
        return emailFormat.test(email);
    }

    if (password.value == '') {
        error.innerHTML += "Введите пароль<br>"
    } else if (!validatePassword(password.value)) {
        error.innerHTML += "Адрес электронной почты заполнен неверно<br>"
    }
    function validatePassword(password) {
        return passwordFormat.test(password);
    }




    // let mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    // if (email.value.match(mailFormat)) {
    //     return true;
    // }
    // else {
    //     emailError.innerHTML = 'Ваш адрес электронной почты введен неверно'
    //     return false;
    // }

    // let passwordFormat = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    // else if (password.value.match(passwordFormat)) {
    //     return true;
    // }
    // else {
    //     passwordError.innerHTML = 'Введите корректный пароль'
    //     return false;
    // }






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
    
    