document.addEventListener('DOMContentLoaded', function () {
    const revealElements = document.querySelectorAll('.reveal');

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function revealElementsOnScroll() {
      revealElements.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add('reveal_active');
        }
      });
    }
  
    document.addEventListener('scroll', revealElementsOnScroll);

    revealElementsOnScroll();
  });