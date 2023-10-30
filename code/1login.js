const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById("registrarBtn").addEventListener("click", function() {
    // Obtén los valores de los campos del formulario
    var nombreUsuario = document.getElementById("nombreUsuario").value;
    var contrasena = document.getElementById("contrasena").value;
    var email = document.getElementById("email").value;
  
    // Realiza el proceso de registro (puedes enviar estos datos a un servidor para el registro real)
  
    // Si el registro es exitoso, redirige al usuario al menú principal
    if (registroExitoso) { // Reemplaza "registroExitoso" con la lógica real de éxito
      window.location.href = "menu_principal.html"; // Cambia esto al nombre de tu página de menú principal
    }
  });