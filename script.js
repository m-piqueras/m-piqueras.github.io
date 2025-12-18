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
