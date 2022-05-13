function checkForm() {
    let name = document.getElementById('name');
    let surname = document.getElementById('surname');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let counter=0;
    
    
    if (name.value == "") {
        name.style.color = "red";
        name.value = "Введите ваше имя";
        counter+=1;
    }
    else {
        name.style.color = "black";
        
        }

        if (surname.value == "") {
            surname.style.color = "red";
            surname.value = "Введите вашу фамилию";
            counter+=1;
        }
        else {
            surname.style.color = "black";
            
        }

        if (email.value == "") {
            email.type = "text";
            email.value = "Введите email";
            email.style.color = "red";
            counter+=1;
        }
        else {
            email.style.color = "black";
            
        }

        if (password.value == "") {
            password.type = "text";
            password.value = "Введите пароль";
            password.style.color = "red";  
            counter+=1;
        }
        // else {
        //     password.style.color = "black";
            
        // }
        else if (password.value.length <= 6) {
            password.type = "text";
            password.value = "Пароль слишком короткий";
            password.style.color = "red";
            counter+=1;
        }
        else {
            password.style.color = "black";
            
        }
        if (counter==0) {
            let name1 = name.value;
            alert (`Привет, ${name1}!`);
        }
}
    
    