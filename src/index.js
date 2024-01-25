import "./index.css";
import "./headerscroll.js";
import "./welcomebadge.js";
import createRestaurantHomepage from "./restaurant-page";
import logo from './img/logo.png';
import "./headerNavEvent.js";
import '@fortawesome/fontawesome-free/css/all.css';
import './openmenu.js';



const loadLogo = () => {
    const logoDiv = document.getElementById('logo');
    const logoImg = new Image()
    logoImg.src = logo;
    logoImg.classList.add('logo');
    logoDiv.appendChild(logoImg);
}
loadLogo();

createRestaurantHomepage()


setInterval(function(){
    welcomeImg.classList.toggle('hide');
}, 500)

if (module.hot) {
    module.hot.accept()
}
  