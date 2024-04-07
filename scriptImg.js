window.addEventListener('DOMContentLoaded', (event) => {
    const logo = document.getElementById('logo');
    let initialMouseX;
    let initialMouseY;
    let initialLogoX;
    let initialLogoY;

    function startDrag(e) {
        initialMouseX = e.clientX;
        initialMouseY = e.clientY;
        const logoRect = logo.getBoundingClientRect();
        initialLogoX = logoRect.left;
        initialLogoY = logoRect.top;

        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
    }

    function drag(e) {
        const deltaX = e.clientX - initialMouseX;
        const deltaY = e.clientY - initialMouseY;
        logo.style.left = initialLogoX + deltaX - window.pageXOffset + 'px';
        logo.style.top = initialLogoY + deltaY - window.pageYOffset + 'px';
    }

    function stopDrag() {
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDrag);
    }

    logo.addEventListener('mousedown', startDrag);
});