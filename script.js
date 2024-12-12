// script.js
document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.querySelector('#contact button');
    contactButton.addEventListener('click', () => {
        alert('¡Gracias por tu interés! Me pondré en contacto contigo pronto.');
    });
});

<script>
    document.addEventListener("DOMContentLoaded", function () {
        const collapsibles = document.querySelectorAll(".collapsible");
        collapsibles.forEach((button) => {
            button.addEventListener("click", function () {
                this.classList.toggle("active");
                const content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        });
    });
</script>
