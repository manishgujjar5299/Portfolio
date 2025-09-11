document.addEventListener('DOMContentLoaded', function() {
    
    // Menu Icon Logic
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');
    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }

    // Typed.js Animation
    if (typeof Typed !== 'undefined' && document.querySelector('#animated-text')) {
        var typed = new Typed('#animated-text', {
            strings: ['Frontend Developer in Haryana', 'Web Designer', 'Python Coder'],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true
        });
    }

    // ScrollReveal Animation
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal({
            distance: '60px',
            duration: 2000,
            delay: 200
        });
        ScrollReveal().reveal('.home-content, .about-content h2, .skills h2, .projects h2', { origin: 'top' });
        ScrollReveal().reveal('.home-image, .skills-container, .projects-container', { origin: 'bottom' });
    }

    // Modal JavaScript
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close-btn');

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = document.querySelector(btn.dataset.modalTarget);
            if(modal) modal.style.display = "block";
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = btn.closest('.modal');
            if(modal) modal.style.display = "none";
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
        }
    });

});