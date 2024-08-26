document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const sectionId = link.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        });
    });
});
