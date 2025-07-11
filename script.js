// General site functions go here
// Navigation, smooth scrolling, etc.

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const page = document.querySelectorAll('.page-content');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();


            const targetPage = this.getAttribute('data-page');

            navLinks.forEach(function(navLink) {
                navLink.classList.remove('active');
            });

            this.classList.add('active');

            pages.forEach(function(page) {
                page.classList.remove('active');
            });
            
            // Show target page with animation
            setTimeout(function() {
                document.getElementById(targetPage).classList.add('active');
            }, 100);
        });
    });

});