/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 180:
/***/ (function() {

const homeBtn = document.querySelector("#homeBtn");
const aboutBtn = document.querySelector("#aboutBtn");
const menuBtn = document.querySelector("#menuBtn");
const contactBtn = document.querySelector("#contactBtn");
document.addEventListener('DOMContentLoaded', function () {
  const navList = document.getElementById('navList');
  navList.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('nav-link')) {
      // Remove 'active' class from all links
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });

      // Add 'active' class to the clicked link
      target.classList.add('active');
    }
  });
});

/***/ }),

/***/ 473:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('main-header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});

/***/ }),

/***/ 97:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/headerscroll.js
var headerscroll = __webpack_require__(473);
// EXTERNAL MODULE: ./src/welcomebadge.js
var welcomebadge = __webpack_require__(510);
// EXTERNAL MODULE: ./src/restaurant-page.js + 7 modules
var restaurant_page = __webpack_require__(128);
;// CONCATENATED MODULE: ./src/img/logo.png
var logo_namespaceObject = __webpack_require__.p + "images/logo.png";
// EXTERNAL MODULE: ./src/headerNavEvent.js
var headerNavEvent = __webpack_require__(180);
// EXTERNAL MODULE: ./src/openmenu.js
var openmenu = __webpack_require__(602);
;// CONCATENATED MODULE: ./src/index.js








const loadLogo = () => {
  const logoDiv = document.getElementById('logo');
  const logoImg = new Image();
  logoImg.src = logo_namespaceObject;
  logoImg.classList.add('logo');
  logoDiv.appendChild(logoImg);
};
loadLogo();
(0,restaurant_page/* default */.Z)();
setInterval(function () {
  welcomeImg.classList.toggle('hide');
}, 500);
if (false) {}

/***/ }),

/***/ 602:
/***/ (function() {

// get the openmenu button, closemenu btn and nav

const openMenuBtn = document.getElementById('openmenu');
const closeMenuBtn = document.querySelector('.closemenu');
const nav = document.querySelector('.nav');
openMenuBtn.addEventListener('click', showNav);
closeMenuBtn.addEventListener('click', hideNav);
function showNav() {
  nav.style.left = 0;
  nav.style.transform = 'translateX(0%)';
}
function hideNav() {
  nav.style.transform = 'translateX(-100%)';
}

/***/ }),

/***/ 128:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ createRestaurantHomepage; }
});

;// CONCATENATED MODULE: ./src/img/menu-img/Tandoori-Chicken-Wings.jpg
var Tandoori_Chicken_Wings_namespaceObject = __webpack_require__.p + "images/Tandoori-Chicken-Wings.jpg";
;// CONCATENATED MODULE: ./src/img/menu-img/Yaki-Udon-noddle.jpg
var Yaki_Udon_noddle_namespaceObject = __webpack_require__.p + "images/Yaki-Udon-noddle.jpg";
;// CONCATENATED MODULE: ./src/img/menu-img/Sansai-Soba-Noodle-Soup.jpg
var Sansai_Soba_Noodle_Soup_namespaceObject = __webpack_require__.p + "images/Sansai-Soba-Noodle-Soup.jpg";
;// CONCATENATED MODULE: ./src/img/menu-img/Chicken-Nuggets.jpg
var Chicken_Nuggets_namespaceObject = __webpack_require__.p + "images/Chicken-Nuggets.jpg";
;// CONCATENATED MODULE: ./src/img/menu-img/Vegan-Kimchi-Ramen.jpg
var Vegan_Kimchi_Ramen_namespaceObject = __webpack_require__.p + "images/Vegan-Kimchi-Ramen.jpg";
;// CONCATENATED MODULE: ./src/img/menu-img/Peppered-Snail.jpg
var Peppered_Snail_namespaceObject = __webpack_require__.p + "images/Peppered-Snail.jpg";
;// CONCATENATED MODULE: ./src/menu-list.js






const menuItems = [{
  special: true,
  title: 'Tandoori Chicken',
  description: 'Delicious Indian appetizer, marinated chicken wings.',
  pic: Tandoori_Chicken_Wings_namespaceObject,
  alt: "Picture of tandoori chicken wings",
  price: "N 15,000"
}, {
  special: true,
  title: 'Yaki Udon Noodles',
  description: 'fresh spring veggies, crispy tofu, bamboo shoots, and mushrooms',
  pic: Yaki_Udon_noddle_namespaceObject,
  alt: "Picture of Yaki udon noodles",
  price: "N 20,000"
}, {
  special: true,
  title: 'Sansai Soba Noodle',
  description: 'Veggies, crispy tofu, bamboo shoots, and mushrooms in a noodles',
  pic: Sansai_Soba_Noodle_Soup_namespaceObject,
  alt: "Picture of Sansai soba noodle soup",
  price: "N 25,000"
}, {
  special: true,
  title: 'Vegan Chicken Nuggets',
  description: 'Golden and crispy outside and firm and meaty inside, with  umami flavor',
  pic: Chicken_Nuggets_namespaceObject,
  alt: "Picture of Vegan Chicken Nugget",
  price: "N 10,000"
}, {
  special: true,
  title: 'Vegan Kimchi Ramen',
  description: 'Broth, mushrooms, bamboo shoots, seaweed, with vegan butter',
  pic: Vegan_Kimchi_Ramen_namespaceObject,
  alt: "Picture of Vegan kimchi ramen",
  price: "N 45,000"
}, {
  title: 'Pepper Snails',
  description: 'Herb seasoned snails with glazed capsicum and plantains in Naija pepper sauce and chips',
  pic: Peppered_Snail_namespaceObject,
  alt: "Picture of Pepper snail",
  price: "N 15,000"
}];
/* harmony default export */ var menu_list = (menuItems);
;// CONCATENATED MODULE: ./src/restaurant-page.js

function createRestaurantHomepage() {
  const main = document.getElementById('main');
  main.innerHTML = `
    
    <section id="home" class="section">
        <div class="container">
            <div class="wrapper .row">
                <div class="content">
                    <h1>BEST QUALITY FOOD</h1>
                    <p>Bold flavor meets sophisticated design in the heart of Ikeja, Lagos.
                        Generosity is at the core of everything we do and can be felt in our abundant portions, complimentary bread and sauces, and quality, affordable meals.
                    </p>
                    <div class="btn">BOOK A TABLE</div>
                </div>
            </div>
        </div>
    </section>
    
    <section id="special-dishes" class="section">
        <div class="title-center">
            <div class="header1">
                <H2>OUR SPECIAL DISHES</H2>
            </div>
            <p>Our restaurant offers a diverse and extensive menu that aims to satisfy every craving. From classic comfort food to innovative creations, our menu is a must-try.</p>
        </div>
        <div class="container ">
            <div id="special-row" class="owl-carousel wrapper row">
                
            </div>
        </div>
    </section>
    <footer id="footer">
        <p>
            Copyright &copy; All rights reserved.
            <a href="https://github.com/kizzylion/yokizzy-restaurant"><i class="fa-brands fa-github"></i> Kizzylion</a>
        </p>
    </footer>
    `;
  const carousel = document.getElementById('special-row');

  // Filter only special items
  const specialItems = menu_list.filter(item => item.special === true);
  specialItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `
        <img src="${item.pic}" alt="${item.alt}">
        <div class="special-dish-content">
            <h3 class="title">${item.title}</h3>
            <p class="Description">${item.description}</p>
            <p class="price">${item.price}</p>
        </div>
        `;
    carousel.appendChild(itemDiv);
  });

  // Function to move carousel
  function moveCarousel() {
    const firstItem = carousel.firstElementChild;
    carousel.appendChild(firstItem.cloneNode(true));
    carousel.removeChild(firstItem);
    carousel.scrollTo({
      left: carousel.scrollLeft + firstItem.offsetWidth,
      // scroll one item width
      behavior: 'smooth' // smooth scroll
    });
  }

  // Set interval to move carousel every 3 seconds
  setInterval(moveCarousel, 2000);
}

// YourModule.js

// Your module code here

if (false) {}

/***/ }),

/***/ 510:
/***/ (function() {

const closeBadge = document.getElementById('badgeClose');
const welcomeImg = document.getElementById('welcomeImg');
const welcomeBox = document.getElementById('box');
closeBadge.addEventListener("click", function () {
  welcomeBox.classList.toggle('hide');
});

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0,
/******/ 			7: 0,
/******/ 			59: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkyokizzy_restaurant"] = self["webpackChunkyokizzy_restaurant"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [59], function() { return __webpack_require__(97); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.bundle.js.map