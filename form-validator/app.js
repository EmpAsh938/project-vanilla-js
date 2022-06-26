const formElement = document.querySelector('.register');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('cpassword');
const button = document.querySelector('.submit-button');

const re =
/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


let validUsername = true;
let validPassword = true;
let validEmail = true;
let validConfirmPassword = true;

function toggleError(elem,show) {
    if(show) elem.classList.add('active');
    else elem.classList.remove('active');
}

function validateUsername(){
    if(username.value.length < 3) {
        toggleError(username.nextElementSibling,true);
        validUsername = false;
    } else {
        toggleError(username.nextElementSibling,false);
        validUsername = true;
    }
}

function validateEmail(){
    if(!email.value.match(re)){
        toggleError(email.nextElementSibling, true);
        validEmail = false;
    } else {
        toggleError(email.nextElementSibling,false);
        validEmail = true;
    }
}

function validatePassword(){
    if(password.value.length < 6) {
        toggleError(password.nextElementSibling, true);
        validPassword = false;
    } else {
        toggleError(password.nextElementSibling,false);
        validPassword = true;
    }
    
}

function validateConfirmPassword(){
    if(!confirm_password.value || password.value !== confirm_password.value) {
        toggleError(confirm_password.nextElementSibling,true);
        validConfirmPassword = false;
    } else {
        toggleError(confirm_password.nextElementSibling,false);
        validConfirmPassword = true;
    }
    
}



function submitForm(e){
    e.preventDefault();
    
    if(validUsername && validPassword && validEmail && validConfirmPassword) {
        console.log("Successful Submission");
    }
}




username.addEventListener('change', validateUsername);
password.addEventListener('change', validatePassword);
email.addEventListener('change', validateEmail);
confirm_password.addEventListener('change', validateConfirmPassword);
button.addEventListener('click', submitForm);
formElement.addEventListener('submit', submitForm);