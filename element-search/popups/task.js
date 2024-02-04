function showModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.add('modal_active');
}

document.addEventListener("DOMContentLoaded", function() {
    showModal('modal_main');
});


function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.remove('modal_active');
}


var closeButtons = document.querySelectorAll('.modal__close');


closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var modal = button.closest('.modal');
        if (modal) {
            closeModal(modal.id);
        }
    });
});
var showSuccessButton = document.querySelector('.show-success');


showSuccessButton.addEventListener('click', function() {
    closeModal('modal_main');
    showModal('modal_success');
});