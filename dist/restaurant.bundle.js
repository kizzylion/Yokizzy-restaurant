/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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

// UNUSED EXPORTS: default

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






const menu_list_menuItems = [{
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
/* harmony default export */ var menu_list = ((/* unused pure expression or super */ null && (menu_list_menuItems)));
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
  const specialItems = menuItems.filter(item => item.special === true);
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
/******/ })()
;
//# sourceMappingURL=restaurant.bundle.js.map