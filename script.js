// Manejo de botones colapsables
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        button.classList.toggle("active");

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// Manejo de carga de PDFs
const pdfLinks = document.querySelectorAll(".load-pdf");

pdfLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const pdfSrc = link.getAttribute("data-pdf");
        const viewer = link.nextElementSibling;

        viewer.src = pdfSrc;
        viewer.style.height = "400px";
    });
});
