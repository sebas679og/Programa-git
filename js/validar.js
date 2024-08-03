document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const tipoUsuario = document.getElementById('tipoUsuario');
    const usuario = document.getElementById('usuario');
    const contraseña = document.getElementById('contraseña');
    const modal = document.getElementById('myModal');
    const modalMessage = document.getElementById('modal-message');
    const closeButton = document.querySelector('.close');
    const modalButton = document.getElementById('modal-button');

    // Función para mostrar el modal con un mensaje específico
    function showModal(message) {
        modalMessage.textContent = message;
        modal.style.display = "flex"; // Mostrar el modal
    }

    // Cerrar el modal al hacer clic en el botón de cerrar
    closeButton.addEventListener('click', function() {
        modal.style.display = "none"; // Ocultar el modal
    });

    // Cerrar el modal al hacer clic en el botón dentro del modal
    modalButton.addEventListener('click', function() {
        modal.style.display = "none"; // Ocultar el modal
    });

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Ocultar el modal
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        const tipoUsuarioSeleccionado = tipoUsuario.value;
        const correoIngresado = usuario.value;
        const contraseñaIngresada = contraseña.value;

        const correoEsperado = "usuario@dominio.com";
        const contraseñaEsperada = "contraseña";

        if (tipoUsuarioSeleccionado === "Seleccionar Tipo de Usuario") {
            showModal("Seleccione su usuario");
            return;
        }

        if (correoIngresado === correoEsperado && contraseñaIngresada === contraseñaEsperada) {
            window.location.href = "views/menu_principal.html";
        } else {
            showModal("El usuario ingresado no existe.");
            form.reset(); // Limpiar el formulario
        }
    });
});