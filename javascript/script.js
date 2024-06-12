// scripts.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Perform your login logic here, e.g., sending the data to a server
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);

    alert('Login form submitted!');
});