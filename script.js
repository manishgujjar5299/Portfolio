function initAnimations() {
    if (document.querySelector('#animated-text')) {
        var typed = new Typed('#animated-text', {
            strings: ['Frontend Developer in Haryana', 'Web Designer', 'Python Coder'],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true
        });
    }

    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal({
            distance: '60px',
            duration: 2000,
            delay: 200
        });
        ScrollReveal().reveal('.home-content, .about-content h2, .skills h2, .projects h2', { origin: 'top' });
        ScrollReveal().reveal('.home-image, .skills-container, .projects-container', { origin: 'bottom' });
    }
}

const readMoreBtns = document.querySelectorAll('.read-more-btn');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-btn');

readMoreBtns.forEach(btn => {
    btn.onclick = function() {
        const modal = document.querySelector(btn.dataset.modalTarget);
        if(modal) modal.style.display = "block";
    }
});

closeBtns.forEach(btn => {
    btn.onclick = function() {
        const modal = btn.closest('.modal');
        if(modal) modal.style.display = "none";
    }
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback();
    document.body.appendChild(script);
}

window.addEventListener('load', () => {
    loadScript('https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js', () => {
        loadScript('https://unpkg.com/scrollreveal', initAnimations);
    });
});