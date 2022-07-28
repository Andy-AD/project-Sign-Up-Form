let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');
let form = document.querySelector('form');
let passwordValidity = document.querySelector('.validity');

password.addEventListener('input', removeNoMatchPasswordAction);
confirmPassword.addEventListener('input', removeNoMatchPasswordAction);



form.addEventListener('submit', (event) => {
    console.log(form.elements[5].value !== form.elements[4].value);
    if (form.elements[5].value !== form.elements[4].value) {
        addNoMatchPasswordAction();
        event.preventDefault();        
    }
});

function addNoMatchPasswordAction() {
    confirmPassword.classList.add('no-match');
    password.classList.add('no-match');
    passwordValidity.textContent = "*Passwords do not match"

}

function removeNoMatchPasswordAction() {
    password.classList.remove('no-match');
    confirmPassword.classList.remove('no-match');
    passwordValidity.textContent = '';
}