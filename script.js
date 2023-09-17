document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Function to toggle the navigation bar
    function toggleNav() {
        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("show");
    }

    // Click event for the menu toggle
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent clicks on the menu toggle from closing the nav bar
        toggleNav();
    });

    // Click event for the document body to close the nav bar when clicking outside
    document.body.addEventListener("click", function () {
        if (navLinks.classList.contains("show")) {
            toggleNav();
        }
    });

    // Prevent clicks inside the nav bar from closing it
    navLinks.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent clicks inside the nav bar from closing it
    });
});
