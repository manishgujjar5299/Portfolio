// Modal JavaScript
const readMoreBtns = document.querySelectorAll('.read-more-btn');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-btn');

readMoreBtns.forEach(btn => {
    btn.onclick = function() {
        const modal = document.querySelector(btn.dataset.modalTarget);
        modal.style.display = "block";
    }
});

closeBtns.forEach(btn => {
    btn.onclick = function() {
        const modal = btn.closest('.modal');
        modal.style.display = "none";
    }
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}