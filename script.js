// Manejo de botones colapsables
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(button => {
    button.addEventListener("click", function() {
        // Alternar clase 'active' en el botón (para cambiar color y el icono +/-)
        this.classList.toggle("active");
        
        // Manejar el contenido
        const content = this.nextElementSibling;
        
        // Alternar clase 'active' en el contenido (para el padding)
        content.classList.toggle("active");

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            // Añadimos un poco de margen extra para asegurar que se vea todo
            content.style.maxHeight = content.scrollHeight + 40 + "px"; 
        }
    });
});
