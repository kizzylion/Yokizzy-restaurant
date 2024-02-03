import menuItems from "./menu-list";

export default function createRestaurantHomepage(){
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
            <div id="special-row" class="owl-carousel owl-theme wrapper row">
                
            </div>
        </div>
    </section>
    <footer id="footer">
        <p>
            Copyright &copy; All rights reserved.
            <a href="https://github.com/kizzylion/yokizzy-restaurant"><i class="fa-brands fa-github"></i> Kizzylion</a>
        </p>
    </footer>
    `
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
        `
        carousel.appendChild(itemDiv);
    })

    // Function to move carousel
    function moveCarousel() {
        const firstItem = carousel.firstElementChild;
        carousel.appendChild(firstItem.cloneNode(true));
        carousel.removeChild(firstItem);
        carousel.scrollTo({
            left: carousel.scrollLeft + firstItem.offsetWidth, // scroll one item width
            behavior: 'smooth', // smooth scroll
        });

    }

    // Set interval to move carousel every 3 seconds
    setInterval(moveCarousel, 2000);

}

// YourModule.js

// Your module code here

if (module.hot) {
    module.hot.accept();
  }
  