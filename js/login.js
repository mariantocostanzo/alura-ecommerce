const submit = document.getElementById('login');
const loginError = document.querySelector('.login-message-error');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if(email.value == "mariaCostanzo@hotmail.com"){
        if(password.value == "maria8042"){
            window.location.href = './admin.html'
        } else {
            loginError.classList.add('invalid-login')
        }
    } else {
        loginError.classList.add('invalid-login')
    }
})



