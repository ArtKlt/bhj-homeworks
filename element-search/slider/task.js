document.addEventListener('DOMContentLoaded', function () {
    const sliderItems = document.querySelector('.slider__items');
    const prevArrow = document.querySelector('.slider__arrow_prev');
    const nextArrow = document.querySelector('.slider__arrow_next');
  
    prevArrow.addEventListener('click', function () {
      moveSlider('prev');
    });
  
    nextArrow.addEventListener('click', function () {
      moveSlider('next');
    });
  
    function moveSlider(direction) {
      const items = Array.from(document.querySelectorAll('.slider__item'));
      const activeIndex = items.findIndex(item => item.classList.contains('slider__item_active'));
      const lastIndex = items.length - 1;
  
      items[activeIndex].classList.remove('slider__item_active');
  
      let newIndex;
      if (direction === 'prev') {
        newIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
      } else if (direction === 'next') {
        newIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
      }
  
      items[newIndex].classList.add('slider__item_active');
    }
  });