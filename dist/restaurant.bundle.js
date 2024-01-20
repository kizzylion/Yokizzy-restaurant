/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/* unused harmony export default */
function createRestaurantHomepage() {
  const contentDiv = document.getElementById('main');

  //Create and append title
  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to Our Yokizzy Restaurant';
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
/******/ })()
;
//# sourceMappingURL=restaurant.bundle.js.map