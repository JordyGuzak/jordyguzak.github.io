window.onload = () => {
    document.querySelector('#theme-toggle').addEventListener('change', toggleTheme);
    document.body.classList.add('loaded');
}

function toggleTheme(e) {

    if (e.target.checked) document.body.classList.add('dark-theme');
    else document.body.classList.remove('dark-theme');
}