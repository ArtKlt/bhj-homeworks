document.addEventListener('DOMContentLoaded', function () {
  const rotatorCases = document.querySelectorAll('.rotator__case');
  const rotator = document.querySelector('.rotator');

  function rotateText() {
    const activeCase = document.querySelector('.rotator__case_active');
    const nextCase = activeCase.nextElementSibling || rotatorCases[0];
    const speed = parseInt(activeCase.dataset.speed) || 1000;
    const color = activeCase.dataset.color || 'black';
    activeCase.classList.remove('rotator__case_active');
    nextCase.classList.add('rotator__case_active');
    rotator.style.color = color;
    setTimeout(rotateText, speed);
  }

  setTimeout(rotateText, 0);
});