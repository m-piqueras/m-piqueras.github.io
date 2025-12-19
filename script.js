// --- Collapsible Buttons Logic ---
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(button => {
    button.addEventListener("click", function() {
        // Toggle 'active' class on button
        this.classList.toggle("active");
        
        // Handle content visibility
        const content = this.nextElementSibling;
        content.classList.toggle("active");

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            // Add extra buffer to ensure content fits
            content.style.maxHeight = content.scrollHeight + 50 + "px"; 
        }
    });
});

// --- Scroll Progress Bar Logic ---
window.onscroll = function() { updateProgressBar() };

function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    document.getElementById("myBar").style.width = scrolled + "%";
}
// --- Scroll Reveal Animation ---
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Se activa cuando el 10% del elemento es visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Dejar de observar una vez animado (para que no parpadee al subir y bajar)
        }
    });
}, observerOptions);

// Elementos que queremos animar
const hiddenElements = document.querySelectorAll('section, .project, .skill-card, .timeline-item');

hiddenElements.forEach((el) => {
    el.classList.add('hidden'); // Ocultarlos inicialmente
    observer.observe(el);       // Empezar a vigilarlos
});
