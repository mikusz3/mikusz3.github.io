document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (prefersDarkScheme.matches) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});
