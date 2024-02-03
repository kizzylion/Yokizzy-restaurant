import $ from 'jquery';
import 'magnific-popup';
import 'magnific-popup/dist/magnific-popup.css';

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
    // $('.imageview').magnificPopup({
    //     type: 'image',
        
    // });
})
document.getElementById('aboutBtn').addEventListener('click',()=>{
    clearContent();
    createAboutPage();
    hideNav()
    $('.playBtn').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: function (url) {
                        var match = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                        if (!match || !match[1]) return null;
                        return match[1];
                    },
                    src: 'https://www.youtube.com/embed/RuzIBfTstgI?si=xaCmfsVSzF5WS-jm'
                }
            }
        }
    });
})
document.getElementById('menuBtn').addEventListener('click',()=>{
    clearContent();
    createMenuPage();
    hideNav()
})
document.getElementById('contactBtn').addEventListener('click',()=>{
    clearContent();
    createContactPage();
    
})







setInterval(function(){
    welcomeImg.classList.toggle('hide');
}, 500)

if (module.hot) {
    module.hot.accept()
}
  

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/RuzIBfTstgI?si=xaCmfsVSzF5WS-jm&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}