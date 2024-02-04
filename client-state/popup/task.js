document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('subscribe-modal');
    const closeButton = document.querySelector('.modal__close_times');

    const isModalClosed = getCookie('modalClosed');

    if (!isModalClosed) {
        modal.classList.add('modal_active');
    }

    closeButton.addEventListener('click', function () {
        modal.classList.remove('modal_active');
        setCookie('modalClosed', true);
    });

    function setCookie(name, value) {
        document.cookie = `${name}=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
    }

    function getCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }
});