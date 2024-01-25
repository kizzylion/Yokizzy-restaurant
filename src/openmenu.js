

// get the openmenu button, closemenu btn and nav

const openMenuBtn = document.getElementById('openmenu');
const closeMenuBtn = document.querySelector('.closemenu');
const nav = document.querySelector('.nav');

openMenuBtn.addEventListener('click', showNav)
closeMenuBtn.addEventListener('click', hideNav);

function showNav() {
    nav.style.left = 0;
    nav.style.transform = 'translateX(0%)';

}

function hideNav(){
    nav.style.transform = 'translateX(-100%)';
}