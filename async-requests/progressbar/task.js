document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const progress = document.getElementById('progress');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(form);

            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,

                headers: {
                    'Accept': 'application/json',
                },
            });


            const result = await response.json();  
    });
});