document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita el envío del formulario por defecto

    const email = document.getElementById('email').value;
    const password= document.getElementById('password').value;

    const storedEmail = localStorage.getItem('registeredEmail');
    const storedPassword = localStorage.getItem('registeredPassword');
    // Simulación de autenticación
    if(email === storedEmail && password === storedPassword) {
        alert("Credenciales correctas");
        localStorage.setItem('isLoggedIn', 'true');  // Guarda el estado de login
        window.location.href = "../home.html";  // Redirige a la página principal
    } else {
        alert("Credenciales incorrectas");
    }
});