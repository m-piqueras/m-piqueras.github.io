<script>
    // Selecciona todos los botones colapsables
    const collapsibles = document.querySelectorAll(".collapsible");

    // Añade un evento de clic a cada botón
    collapsibles.forEach(button => {
        button.addEventListener("click", function() {
            // Selecciona el contenido asociado con el botón
            const content = this.nextElementSibling;

            // Si el contenido tiene un max-height (significa que está abierto), lo ocultamos
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                // Si no tiene max-height (está cerrado), lo mostramos
                content.style.maxHeight = content.scrollHeight + "px"; // Le damos altura suficiente para mostrar el contenido
            }
        });
    });
</script>
