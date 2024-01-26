

// get the openmenu button, closemenu btn and nav

const openMenuBtn = document.getElementById('openmenu');
const closeMenuBtn = document.querySelector('.closemenu');
const nav = document.querySelector('.nav');

openMenuBtn.addEventListener('click', showNav)
closeMenuBtn.addEventListener('click', hideNav);

function showNav() {
    if (window.innerWidth <= 992) {
        nav.style.left = 0;
        nav.style.transform = 'translateX(0%)';
    }
}

export function hideNav(){
    if (window.innerWidth <= 992) {
        nav.style.transform = 'translateX(-100%)';

    }
}