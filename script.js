// Manejo de botones colapsables
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.classList.toggle("active");
        content.style.maxHeight = content.classList.contains("active")
            ? content.scrollHeight + "px"
            : null;
    });
});

