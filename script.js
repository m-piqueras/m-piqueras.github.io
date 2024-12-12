<script>
    // Selecciona todos los botones colapsables
    const collapsibles = document.querySelectorAll(".collapsible");

    // Añade un evento de clic a cada botón
    collapsibles.forEach(button => {
        button.addEventListener("click", function() {
            // Selecciona el contenido asociado con el botón
            const content = this.nextElementSibling;

            // Si el contenido está visible, lo oculta
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                // Si el contenido está oculto, lo despliega
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
</script>
