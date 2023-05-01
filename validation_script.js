const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function showSuccess(input){
    formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(input){
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regexEmail.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input, 'Email is not valid');
    }
}

function checkPhone(input){
    const regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if(regexPhone.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input, 'Phone Number is not valid');
    }
}

function checkRequired(inputArr){
    inputArr.forEach(function (input){
        if(input.value.trim()=== ''){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}

function checkLength(input, min, max){
    if(input.value.length<min){
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`);
    }
    else if(input.value.length>max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }
    else{
        showSuccess(input);
    }
}

function checkPasswordsMatch(input1, input2){
    if(input1.value!=input2.value){
        showError(input2, 'Passwords do not match');
    }else{
        showSuccess(input2);
    }
}


function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}




form.addEventListener('submit', function(e){
    e.preventDefault();

    // if(username.value===''){
    //     showError(username, 'username is required');
    // }
    // else{
    //     showSuccess(username);
    // }

    // if(email.value===''){
    //     showError(email, 'username is required');
    // }
    // else if(!isvalidEmail(email.value)){
    //     showError(email, 'email is not valid');
    // }
    // else{
    //     showSuccess(email);
    // }

    // if(password.value===''){
    //     showError(password, 'username is required');
    // }
    // else{
    //     showSuccess(password);
    // }

    // if(password2.value===''){
    //     showError(password2, 'username is required');
    // }
    // else{
    //     showSuccess(password2);
    // }

    checkRequired([username, email, password, password2,]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 32);
    checkEmail(email);
    checkPhone(phone);
    checkPasswordsMatch(password, password2);

    window.location.assign('index.html');
});
