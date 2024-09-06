const sendBtn = document.querySelector('.submit-comment-form');
const modalWindow = document.querySelector('.modal-window');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-modal-btn');
const form = document.querySelector('form');

sendBtn.onclick = function(event) {
    event.preventDefault();
    
    modalWindow.style.display = 'block';
    modalOverlay.style.display = 'block';
    
    setTimeout(() => {
        modalWindow.classList.add('show');
        modalOverlay.classList.add('show');
    }, 10);
}

closeBtn.onclick = function() {
    modalWindow.classList.remove('show');
    modalOverlay.classList.remove('show');

    setTimeout(() => {
        modalWindow.style.display = 'none';
        modalOverlay.style.display = 'none';
    }, 1000);
}

window.onclick = function(event) {
    if (event.target == modalOverlay) {
        modalWindow.classList.remove('show');
        modalOverlay.classList.remove('show');

        setTimeout(() => {
            modalWindow.style.display = 'none';
            modalOverlay.style.display = 'none';
        }, 1000);
    }
}

closeBtn.addEventListener('click', () => {
    form.reset();
});

window.addEventListener('click', (event) => {
    if (event.target == modalOverlay) {
        form.reset();
    }
});
