const menu = document.querySelector('.nav-menu');
const navRight = document.querySelector('.nav-right');

menu.addEventListener('click', () => {
    navRight.classList.toggle('active-menu');
})