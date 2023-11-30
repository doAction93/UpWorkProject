document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");

    window.addEventListener("scroll", function() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    });
});