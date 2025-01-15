// Función de validación
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    let isValid = true;

    // Validación para el campo Nombre
    if (name.trim() === "") {
        nameError.textContent = "El nombre no debe estar vacío.";
        nameError.style.display = "block";
        isValid = false;
    } else if (name.length > 50) {
        nameError.textContent = "El nombre debe tener como máximo 50 caracteres.";
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    // Validación para el campo Email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.trim() === "") {
        emailError.textContent = "El correo electrónico no debe estar vacío.";
        emailError.style.display = "block";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Por favor ingrese un correo electrónico válido (ejemplo: texto@texto.com).";
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Validación para el campo Mensaje
    if (message.trim() === "") {
        messageError.textContent = "El mensaje no debe estar vacío.";
        messageError.style.display = "block";
        isValid = false;
    } else if (message.length > 300) {
        messageError.textContent = "El mensaje debe tener un máximo de 300 caracteres.";
        messageError.style.display = "block";
        isValid = false;
    } else {
        messageError.style.display = "none";
    }

    // Habilitar el botón si el formulario es válido
    document.getElementById("submitButton").disabled = !isValid;
}

// Monitorear los cambios en los campos
document.getElementById("name").addEventListener("input", validateForm);
document.getElementById("email").addEventListener("input", validateForm);
document.getElementById("message").addEventListener("input", validateForm);

// Validar el formulario al intentar enviarlo
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario si no es válido

    if (document.getElementById("submitButton").disabled === false) {
        alert("Formulario enviado correctamente");
    }
});
