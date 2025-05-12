const btnLogin = document.querySelector('.login');
const btnReg = document.querySelector('.reg');

btnLogin.addEventListener('click', () => {
    window.location.href = '../html/login.html';
});

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('psw').value;

    console.log(email, password)
}