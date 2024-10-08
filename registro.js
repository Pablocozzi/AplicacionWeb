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

    


