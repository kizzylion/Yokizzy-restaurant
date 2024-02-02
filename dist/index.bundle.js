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

/***/ 329:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/headerscroll.js
var headerscroll = __webpack_require__(473);
// EXTERNAL MODULE: ./src/welcomebadge.js
var welcomebadge = __webpack_require__(510);
// EXTERNAL MODULE: ./src/restaurant-page.js
var restaurant_page = __webpack_require__(777);
;// CONCATENATED MODULE: ./src/img/logo.png
var logo_namespaceObject = __webpack_require__.p + "images/logo.png";
// EXTERNAL MODULE: ./src/headerNavEvent.js
var headerNavEvent = __webpack_require__(180);
;// CONCATENATED MODULE: ./src/openmenu.js
// get the openmenu button, closemenu btn and nav

const openMenuBtn = document.getElementById('openmenu');
const closeMenuBtn = document.querySelector('.closemenu');
const nav = document.querySelector('.nav');
openMenuBtn.addEventListener('click', showNav);
closeMenuBtn.addEventListener('click', hideNav);
function showNav() {
  if (window.innerWidth <= 992) {
    nav.style.left = 0;
    nav.style.transform = 'translateX(0%)';
  }
}
function hideNav() {
  if (window.innerWidth <= 992) {
    nav.style.transform = 'translateX(-100%)';
  }
}
;// CONCATENATED MODULE: ./src/img/interior.jpg
var interior_namespaceObject = __webpack_require__.p + "images/interior.jpg";
;// CONCATENATED MODULE: ./src/aboutus-page.js

function createAboutPage() {
  const main = document.getElementById('main');
  main.innerHTML = `
        <section id="about-us" class="section">
            <div class="container">
                <div class="wrapper row space-between">
                    <div class="about-img">
                        <img src="${interior_namespaceObject}" alt="">
                        <a class="playBtn" href="#">
                            <i class="fa-solid fa-play"></i>
                        </a>
                    </div>
                    <div class="about-content">
                        <h2>A Culinary Odyssey in Lagos</h2>
                        <p>
                            Yokizzy International Restaurant is more than just a dining destination; it's a narrative woven with the threads of passion, creativity, and a deep appreciation for diverse cultures. Born out of a vision to bring the world's flavors to Lagos, our story began with the desire to create a space where global cuisines converge, harmonizing with the vibrant tapestry of this dynamic city.
                            <br>
                            <br>
                            At the helm of Yokizzy Restaurant are our visionary chefs, masters of their craft with a shared commitment to excellence. Drawing inspiration from their travels and culinary experiences, they infuse each dish with a unique blend of authenticity and innovation.
                            <br>
                            <br>
                            We invites you to embark on a culinary odyssey where each dish tells a story, and every visit is a chapter in our shared narrative.


                        </p>
                        <div class="advantage row space-between">
                            <div>
                                <i class="fa-solid fa-utensils"></i>
                                <h5>Experience Chefs</h5>
                            </div>
                            <div>
                                <i class="fa-brands fa-readme"></i>
                                <h5>Amazing Recipes</h5>
                            </div>
                            <div>
                                <i class="fa-solid fa-bowl-food"></i>
                                <h5>Fresh food</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="offer" class="section">
            <div class="container">
                <div class="wrapper">
                    <div class="content">
                        <h2>Double CHEESE PIZZA 
                           <br>
                           30% OFF FRIDAY ONLY</h2>
                       <div class="btn">BOOK A TABLE</div>
                   </div>
                
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
}

// YourModule.js

// Your module code here

if (false) {}
// EXTERNAL MODULE: ./src/menu-list.js + 18 modules
var menu_list = __webpack_require__(187);
;// CONCATENATED MODULE: ./src/menu-page.js

function createMenuPage() {
  const main = document.getElementById('main');
  main.innerHTML = `
    
    <section id="menu" class="section">
        <div class="container">
            <div class="title-center">
                <h2 >OUR MENU</h2>
            </div>
            <div class="wrapper row wrap-menu">
                <ul id="list-menu" class="list-menu">
                    <li id="All" class="active">All</li>
                    <li id="Burgers">Burgers</li>
                    <li id="Chillis" >Chillis</li>
                    <li id="Pastas" >Pastas</li>
                    <li id="Rice" >Rice</li>
                    <li id="Salads" >Salads</li>
                    <li id="Drinks" >Drinks</li>
                </ul>
            </div>
            <div class="wrapper menu-items" id="menu-items">
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
  const menuItems = document.getElementById('menu-items');
  const menuTabs = document.querySelectorAll('.list-menu li');
  menuTabs.forEach(elem => {
    elem.addEventListener('click', function () {
      menuTabs.forEach(tab => {
        tab.classList.remove('active');
      });
      this.classList.add('active');
      generateTabItems(this, menuItems);
    });
  });

  //predefined filter functions

  const filter = {
    ['All']: () => true,
    ['Burgers']: record => record.group === 'Burgers',
    ['Chillis']: record => record.group === 'Chillis',
    ['Pastas']: record => record.group === 'Pastas',
    ['Rice']: record => record.group === 'Rice',
    ['Salads']: record => record.group === 'Salads',
    ['Drinks']: record => record.group === 'Drinks'
  };
  const generateTabItems = (elem, tabContent) => {
    const filterName = elem.id;
    const filterFunction = filter[filterName];
    const mappedRecords = menu_list/* default */.Z.filter(filterFunction).map(record => {
      return `
                    <div class="item">
                        <img src="${record.pic}" alt="${record.alt}" />
                        <h3 class="title">${record.title}</h3>
                        <p class="description">${record.description}</p>
                        <footer class="price">${record.price}</footer>
                    </div>
                `;
    });
    tabContent.innerHTML = mappedRecords.join("");
  };
  let activeLink = document.querySelector('.list-menu .active');
  generateTabItems(activeLink, menuItems);
}
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

//Function to clearContent
function clearContent() {
  const mainDiv = document.getElementById('main');
  mainDiv.innerHTML = "";
}

//Adding event listener for each navigation button
document.getElementById('homeBtn').addEventListener('click', () => {
  clearContent();
  (0,restaurant_page/* default */.Z)();
  hideNav();
});
document.getElementById('aboutBtn').addEventListener('click', () => {
  clearContent();
  createAboutPage();
  hideNav();
});
document.getElementById('menuBtn').addEventListener('click', () => {
  clearContent();
  createMenuPage();
  hideNav();
});
setInterval(function () {
  welcomeImg.classList.toggle('hide');
}, 500);
if (false) {}

/***/ }),

/***/ 187:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ menu_list; }
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
;// CONCATENATED MODULE: ./src/img/menu-img/chilli-chicken.jpeg
var chilli_chicken_namespaceObject = __webpack_require__.p + "images/chilli-chicken.jpeg";
;// CONCATENATED MODULE: ./src/img/menu-img/PotatoesChilli.jpeg
var PotatoesChilli_namespaceObject = __webpack_require__.p + "images/PotatoesChilli.jpeg";
;// CONCATENATED MODULE: ./src/img/menu-img/ChickenManchurian.jpeg
var ChickenManchurian_namespaceObject = __webpack_require__.p + "images/ChickenManchurian.jpeg";
;// CONCATENATED MODULE: ./src/img/menu-img/VegBurger.jpeg
var VegBurger_namespaceObject = __webpack_require__.p + "images/VegBurger.jpeg";
;// CONCATENATED MODULE: ./src/img/menu-img/goumetBurger.jpeg
var goumetBurger_namespaceObject = __webpack_require__.p + "images/goumetBurger.jpeg";
;// CONCATENATED MODULE: ./src/img/menu-img/jeeraRice.jpeg
var jeeraRice_namespaceObject = __webpack_require__.p + "images/jeeraRice.jpeg";
;// CONCATENATED MODULE: ./src/img/menu-img/Chopper-Rice.jpeg
var Chopper_Rice_namespaceObject = __webpack_require__.p + "images/Chopper-Rice.jpeg";
;// CONCATENATED MODULE: ./src/img/menu-img/paneerRice.jpeg
var paneerRice_namespaceObject = __webpack_require__.p + "images/paneerRice.jpeg";
;// CONCATENATED MODULE: ./src/img/menu-img/chickenCaesar.jpeg
var chickenCaesar_namespaceObject = __webpack_require__.p + "images/chickenCaesar.jpeg";
;// CONCATENATED MODULE: ./src/img/menu-img/tuscanArtichocke.jpeg
var tuscanArtichocke_namespaceObject = __webpack_require__.p + "images/tuscanArtichocke.jpeg";
;// CONCATENATED MODULE: ./src/img/menu-img/strawberryIcedTea.jpeg
var strawberryIcedTea_namespaceObject = __webpack_require__.p + "images/strawberryIcedTea.jpeg";
;// CONCATENATED MODULE: ./src/img/menu-img/mangoBerrySmoothie.jpeg
var mangoBerrySmoothie_namespaceObject = __webpack_require__.p + "images/mangoBerrySmoothie.jpeg";
;// CONCATENATED MODULE: ./src/menu-list.js


















const menuItems = [{
  special: true,
  title: 'Tandoori Chicken',
  description: 'Delicious Indian appetizer, marinated chicken wings.',
  pic: Tandoori_Chicken_Wings_namespaceObject,
  alt: "Picture of tandoori chicken wings",
  price: "N 15,000",
  group: "Pastas"
}, {
  special: true,
  title: 'Yaki Udon Noodles',
  description: 'Fresh spring veggies, crispy tofu, bamboo shoots, and mushrooms',
  pic: Yaki_Udon_noddle_namespaceObject,
  alt: "Picture of Yaki udon noodles",
  price: "N 20,000",
  group: "Pastas"
}, {
  special: true,
  title: 'Sansai Soba Noodle',
  description: 'Veggies, crispy tofu, bamboo shoots, and mushrooms in a noodles',
  pic: Sansai_Soba_Noodle_Soup_namespaceObject,
  alt: "Picture of Sansai soba noodle soup",
  price: "N 25,000",
  group: "Pastas"
}, {
  special: true,
  title: 'Vegan Chicken Nuggets',
  description: 'Golden and crispy outside and firm and meaty inside, with  umami flavor',
  pic: Chicken_Nuggets_namespaceObject,
  alt: "Picture of Vegan Chicken Nugget",
  price: "N 10,000",
  group: "Burgers"
}, {
  special: true,
  title: 'Vegan Kimchi Ramen',
  description: 'Broth, mushrooms, bamboo shoots, seaweed, with vegan butter',
  pic: Vegan_Kimchi_Ramen_namespaceObject,
  alt: "Picture of Vegan kimchi ramen",
  price: "N 45,000",
  group: "Pastas"
}, {
  title: 'Pepper Snails',
  description: 'Herb seasoned snails with glazed capsicum and plantains in Naija pepper sauce and chips',
  pic: Peppered_Snail_namespaceObject,
  alt: "Picture of Pepper snail",
  price: "N 15,000",
  group: "Chillis"
}, {
  title: 'Chilli Chicken',
  description: 'Soy sauce, boneless chicken, green thai, honey, rice vinegar',
  pic: chilli_chicken_namespaceObject,
  alt: "Picture of Chicken chilli",
  price: "N 8,000",
  group: "Chillis"
}, {
  title: 'Potatoes Chilli',
  description: 'Coated in a sweet and spicy sauce that will make your taste buds dance with joy',
  pic: PotatoesChilli_namespaceObject,
  alt: "Picture of Potatoes chilli",
  price: "N 10,000",
  group: "Chillis"
}, {
  title: 'Chicken Manchurian',
  description: 'Made with pan-fried chicken chunks and seasoned with a fiery sauce',
  pic: ChickenManchurian_namespaceObject,
  alt: "Picture of Chicken Manchurian",
  price: "N 12,000",
  group: "Chillis"
}, {
  title: 'Veg Burger',
  description: 'Made with chickpeas/Garbanzo beans, multigrain flour and veggies like carrot.',
  pic: VegBurger_namespaceObject,
  alt: "Picture of Veggie Burger",
  price: "N 5,000",
  group: "Burgers"
}, {
  title: 'Goumet Burger',
  description: 'Fresh herbs, mushrooms and luxurious truffle mayo.',
  pic: goumetBurger_namespaceObject,
  alt: "Picture of Goumet Burger",
  price: "N 6,500",
  group: "Burgers"
}, {
  title: 'Jeera Rice',
  description: 'Made using rice, cumin seeds, and a few other spices.',
  pic: jeeraRice_namespaceObject,
  alt: "Picture of Jeera Rice",
  price: "N 6,500",
  group: "Rice"
}, {
  title: 'Chicken Chopper',
  description: 'A delicious dish made up of egg fried rice and chicken curry.',
  pic: Chopper_Rice_namespaceObject,
  alt: "Picture of Chicken Chopper Rice",
  price: "N 9,500",
  group: "Rice"
}, {
  title: 'Paneer Fried Rice',
  description: 'Stir-fried with paneer, sauces, and lots of crunchy veggies.',
  pic: paneerRice_namespaceObject,
  alt: "Picture of Paneer Fried Rice",
  price: "N 12,500",
  group: "Rice"
}, {
  title: 'Chicken Caesar',
  description: 'hearty and delicious dish that is packed with all your favorite flavors from a caser salad!',
  pic: chickenCaesar_namespaceObject,
  alt: "Picture of Chicken Caesar Salad",
  price: "N 15,500",
  group: "Salads"
}, {
  title: 'Tuscan Artichoke Salad',
  description: 'Filled with artichoke hearts, chickpeas, fresh herbs, & ripe tomatoes',
  pic: tuscanArtichocke_namespaceObject,
  alt: "Picture of Tuscan Artichoke Salad",
  price: "N 10,500",
  group: "Salads"
}, {
  title: 'Strawberry Iced Tea',
  description: 'Perfect combination of rooiboss tea, vanilla and strawberries',
  pic: strawberryIcedTea_namespaceObject,
  alt: "Picture of Strawberry Iced Tea",
  price: "N 4,500",
  group: "Drinks"
}, {
  title: 'Mango Berry Smoothie',
  description: 'Delicious flavors of juicy mango and sweet berries',
  pic: mangoBerrySmoothie_namespaceObject,
  alt: "Picture of Mango Berry Smoothie",
  price: "N 5,500",
  group: "Drinks"
}];
/* harmony default export */ var menu_list = (menuItems);

/***/ }),

/***/ 777:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ createRestaurantHomepage; }
/* harmony export */ });
/* harmony import */ var _menu_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(187);

function createRestaurantHomepage() {
  const main = document.getElementById('main');
  main.innerHTML = `
    
    <section id="home" class="section">
        <div class="container">
            <div class="wrapper">
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
  const specialItems = _menu_list__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.filter(item => item.special === true);
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [59], function() { return __webpack_require__(329); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.bundle.js.map