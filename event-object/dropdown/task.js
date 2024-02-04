var element = document.querySelector('.dropdown__value');
var myList = document.querySelector('.dropdown__list');
element.addEventListener('click', function() {
    console.log('Кликнули по элементу!');
    myList.style.display = 'block';
});

var items = document.querySelectorAll('.dropdown__item');

Array.from(items).forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault(); 
        var valueElement = item.closest('.dropdown').querySelector('.dropdown__value');
        var selectedValue = event.target.textContent;
        valueElement.textContent = selectedValue;
        item.closest('.dropdown__list').style.display = 'none';
    });
});