document.addEventListener('DOMContentLoaded', function () {
    const fontControls = document.querySelectorAll('.font-size');
    const bookContent = document.getElementById('book');
  
    fontControls.forEach(function (control) {
      control.addEventListener('click', function (event) {
        event.preventDefault();
  
        fontControls.forEach(function (element) {
          element.classList.remove('font-size_active');
        });

        control.classList.add('font-size_active');
        const fontSize = control.getAttribute('data-size');
        bookContent.className = 'book__content';
        bookContent.classList.add(`font-size_${fontSize}`);
      });
    });
  });