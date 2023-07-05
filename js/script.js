const $html = document.querySelector('html');
const colorMode = document.getElementById('color-mode') ;

colorMode.addEventListener('change', () => {
    $html.classList.toggle('dark-mode')
})