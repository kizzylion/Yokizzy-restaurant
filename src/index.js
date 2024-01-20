import "./index.css";
import "./headerscroll";

import createRestaurantHomepage from "./restaurant-page";
import logo from './img/logo.png';

const logoDiv = document.getElementById('logo');
const logoImg = new Image()
logoImg.src = logo;
logoImg.classList.add('logo');
logoDiv.appendChild(logoImg);
console.log(logo)

createRestaurantHomepage()

if (module.hot) {
    module.hot.accept()
}