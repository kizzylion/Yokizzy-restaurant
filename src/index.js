import "./index.css";
import "./headerscroll.js";
import "./welcomebadge.js";
import createRestaurantHomepage from "./restaurant-page";
import logo from './img/logo.png';
import "./headerNavEvent.js";
import '@fortawesome/fontawesome-free/css/all.css';
import './openmenu.js';
import createAboutPage from "./aboutus-page.js";
import { hideNav } from "./openmenu.js";
import createMenuPage from "./menu-page.js";
import createContactPage from "./contact-page.js";

import headImg from "./img/metaImage.jpg"
import favicon from "./img/favicon.ico"

const metaImg = document.querySelectorAll('.metaImg');

metaImg.forEach(element => {
    element.content = headImg;
});

const faviconImg = document.querySelector('#favicon');

faviconImg.src = favicon;
faviconImg.href = favicon;


const loadLogo = () => {
    const logoDiv = document.getElementById('logo');
    const logoImg = new Image()
    logoImg.src = logo;
    logoImg.classList.add('logo');
    logoDiv.appendChild(logoImg);
}
loadLogo();

createRestaurantHomepage()

//Function to clearContent
function clearContent(){
    const mainDiv = document.getElementById('main');
    mainDiv.innerHTML = "";
}

//Adding event listener for each navigation button
document.getElementById('homeBtn').addEventListener('click',()=>{
    clearContent();
    createRestaurantHomepage();
    hideNav()
})
document.getElementById('aboutBtn').addEventListener('click',()=>{
    clearContent();
    createAboutPage();
    hideNav()
})
document.getElementById('menuBtn').addEventListener('click',()=>{
    clearContent();
    createMenuPage();
    hideNav()
})
document.getElementById('contactBtn').addEventListener('click',()=>{
    clearContent();
    createContactPage();
    hideNav()
})





setInterval(function(){
    welcomeImg.classList.toggle('hide');
}, 500)

if (module.hot) {
    module.hot.accept()
}
  