// Manejo de desplegables
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        button.classList.toggle("active");

        if (content.style.maxHeight) {
            content.style.maxHeight = null; // Cerrar
        } else {
            content.style.maxHeight = content.scrollHeight + "px"; // Abrir
        }
    });
});

// Manejo de carga de PDFs
const pdfLinks = document.querySelectorAll(".load-pdf");

pdfLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Evitar comportamiento por defecto
        const pdfSrc = link.getAttribute("data-pdf"); // Ruta del PDF
        const viewer = link.nextElementSibling; // Obtener el iframe asociado

        viewer.src = pdfSrc; // Asignar el PDF al iframe
        viewer.style.height = "400px"; // Ajustar la altura del iframe
    });
});
