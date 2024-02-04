document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.has-tooltip');

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('click', function(event) {
            event.preventDefault();
            const title = this.getAttribute('title');
            showTooltip(event.clientX, event.clientY, title);
        });
    });

    function showTooltip(x, y, text) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = text;
        tooltip.style.left = x + 'px';
        tooltip.style.top = y + 'px';

        document.body.appendChild(tooltip);

        setTimeout(() => {
            tooltip.classList.add('tooltip_active');
        }, 0);

        document.addEventListener('click', function hideTooltip() {
            tooltip.classList.remove('tooltip_active');
            setTimeout(() => {
                tooltip.remove();
                document.removeEventListener('click', hideTooltip);
            }, 300);
        });
    }
});
