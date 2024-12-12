document.addEventListener('DOMContentLoaded', () => {
    // Función para el botón de contacto
    const contactButton = document.querySelector('#contact button');
    contactButton.addEventListener('click', () => {
        alert('¡Gracias por tu interés! Me pondré en contacto contigo pronto.');
    });

    // Funcionalidad de los desplegables
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach((button) => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            const content = button.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
