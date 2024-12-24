// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Example of form validation for login page
    const loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', function(event) {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!username || !password) {
            event.preventDefault();
            alert('Please fill in both fields');
        }
    });
});