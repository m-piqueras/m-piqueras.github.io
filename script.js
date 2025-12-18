// --- Scroll Progress Bar Logic ---
window.onscroll = function() { updateProgressBar() };

function updateProgressBar() {
    // 1. Cuánto scroll ha hecho el usuario desde arriba
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    // 2. La altura total "scrolleable" (Altura total del documento - Altura de la ventana visible)
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // 3. Regla de tres para sacar el porcentaje
    const scrolled = (winScroll / height) * 100;
    
    // 4. Aplicar el ancho al elemento
    document.getElementById("myBar").style.width = scrolled + "%";
}

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

