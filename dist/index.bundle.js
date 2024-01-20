/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 473:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('main-header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});

/***/ }),

/***/ 777:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ createRestaurantHomepage; }
/* harmony export */ });
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./src/headerscroll.js
var headerscroll = __webpack_require__(473);
// EXTERNAL MODULE: ./src/restaurant-page.js
var restaurant_page = __webpack_require__(777);
;// CONCATENATED MODULE: ./src/img/logo.png
var logo_namespaceObject = __webpack_require__.p + "images/logo.png";
;// CONCATENATED MODULE: ./src/index.js




const logoDiv = document.getElementById('logo');
const logoImg = new Image();
logoImg.src = logo_namespaceObject;
logoImg.classList.add('logo');
logoDiv.appendChild(logoImg);
console.log(logo_namespaceObject);
(0,restaurant_page/* default */.Z)();
if (false) {}
}();
/******/ })()
;
//# sourceMappingURL=index.bundle.js.map