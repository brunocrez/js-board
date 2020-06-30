const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

cards.forEach(card => {
    card.addEventListener('mousedown', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('mouseleave', dragend);
});

function dragstart() {
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'));
}

function drag() {

}

function dragend() {
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));    
}

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
});

function dragenter() {
}

function dragover() {
    this.classList.add('over');
}

function dragleave() {
    this.classList.remove('over');
}