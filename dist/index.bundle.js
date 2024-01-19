/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/restaurant-page.js

function createRestaurantHomepage() {
  const contentDiv = document.getElementById('content');

  //Create and append title
  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to Our Wonderful Restaurant';
  headline.classList.add('text');
  contentDiv.appendChild(headline);

  //Create and append copy of paragraph
  const copy1 = document.createElement('p');
  copy1.textContent = "Discover a delightful culinary experience at our restaurant, where every dish is crafted with passion and care. Our chefs use the finest ingredients to create mouthwatering flavors that will leave you craving for more";
  contentDiv.appendChild(copy1);

  //Create and append copy of paragraph
  const copy2 = document.createElement('p');
  copy2.textContent = "Immerse yourself in the cozy ambiance, perfect for both intimate dinners and lively gatherings. Whether you're a food enthusiast or just looking for a memorable dining experience, we invite you to savor the magic of our kitchen.";
  contentDiv.appendChild(copy2);

  //Create and append copy of paragraph
  const copy3 = document.createElement('p');
  copy3.textContent = "Reserve your table today and experience the perfect combination of elegance and welcomingness.";
  contentDiv.appendChild(copy3);
}
;// CONCATENATED MODULE: ./src/index.js


const html = document.querySelector('html');
// html.style.backgroundColor = 'red';
createRestaurantHomepage();
if (false) {}
/******/ })()
;
//# sourceMappingURL=index.bundle.js.map