document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita el envío por defecto
    
    // Obtiene los datos del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Guarda los datos en localStorage
    localStorage.setItem('registeredEmail', email);
    localStorage.setItem('registeredPassword', password);
    
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    
    // Redirige al login
    window.location.href = "./login.html";
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Evita el envío del formulario por defecto

        const emailLogin = document.getElementById('email').value;
        const passwordLogin = document.getElementById('password').value;

        const storedEmail = localStorage.getItem('registeredEmail');
        const storedPassword = localStorage.getItem('registeredPassword');
        alert('registeredEmail')
        // Simulación de autenticación
        if(emailLogin === storedEmail && passwordLogin === storedPassword) {
            alert("Credenciales correctas");
            localStorage.setItem('isLoggedIn', 'true');  // Guarda el estado de login
            window.location.href = "./index.html";  // Redirige a la página principal
        } else {
            alert("Credenciales incorrectas");
        }
    })
});

