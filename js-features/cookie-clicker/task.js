let image = document.getElementById('cookie');
let clickCount = 0;
let clickPerSecond = 0;
image.addEventListener('click', function() {
    clickCount++;
    document.getElementById('clicker__counter').innerText = clickCount;
    if (clickCount % 2 === 0)
    {
    image.style.width = '200px';
    image.style.height = '128px';
    }
    else
    {
        image.style.width = '175px';
        image.style.height = '103px';
    }

});