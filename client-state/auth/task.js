document.addEventListener('DOMContentLoaded', function () {
    const signinForm = document.getElementById('signin__form');
    const welcomeBlock = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');


    const savedUserId = localStorage.getItem('user_id');

    if (savedUserId) {
        userIdSpan.textContent = savedUserId;
        welcomeBlock.classList.add('welcome_active');
    }

    signinForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(signinForm);

        fetch('https://students.netoservices.ru/nestjs-backend/auth', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem('user_id', data.user_id);
                userIdSpan.textContent = data.user_id;
                welcomeBlock.classList.add('welcome_active');
                signinForm.parentElement.classList.remove('signin_active');
            } else {
                alert('Неверный логин/пароль');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});