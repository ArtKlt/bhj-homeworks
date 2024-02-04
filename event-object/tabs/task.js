document.addEventListener('DOMContentLoaded', function () {
    const tabsContainer = document.getElementById('tabs1');
    const tabButtons = tabsContainer.querySelectorAll('.tab');
    const tabContents = tabsContainer.querySelectorAll('.tab__content');

    tabButtons.forEach(function (tabButton, index) {
        tabButton.addEventListener('click', function () {
            tabContents.forEach(function (content) {
                content.classList.remove('tab__content_active');
            });
            tabButtons.forEach(function (button) {
                button.classList.remove('tab_active');
            });
            tabContents[index].classList.add('tab__content_active');
            tabButton.classList.add('tab_active');
        });
    });
});