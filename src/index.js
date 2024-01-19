import "./index.css";
import createRestaurantHomepage from "./restaurant-page";

const html = document.querySelector('html');
// html.style.backgroundColor = 'red';
createRestaurantHomepage()

if (module.hot) {
    module.hot.accept()
}