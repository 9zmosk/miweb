document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const respuestaUsuario = document.querySelector('input[name="respuesta"]:checked');
    const resultado = document.getElementById('resultado');

    if (respuestaUsuario) {
        if (respuestaUsuario.value === 'html') {
            alert("¡Respuesta correcta!");
            resultado.textContent = "Bien hecho, puedes avanzar al siguiente modulo."
        } else {
            alert("Respuesta incorrecta. Inténtalo de nuevo.");
            resultado.textContent = "Que lastima, pero no te proucupes, intentalo nuevamente."
        }
    } else {
        alert("Por favor, selecciona una respuesta.");
    }
});