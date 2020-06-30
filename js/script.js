const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
});

function dragstart() {
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'));
}

function drag() {

}

function dragend() {
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));
}