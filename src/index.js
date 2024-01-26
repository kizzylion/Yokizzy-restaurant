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





setInterval(function(){
    welcomeImg.classList.toggle('hide');
}, 500)

if (module.hot) {
    module.hot.accept()
}
  