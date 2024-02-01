import interior from './img/interior.jpg';

export default function createAboutPage(){

    const main = document.getElementById('main');
    main.innerHTML = `
        <section id="about-us" class="section">
            <div class="container">
                <div class="wrapper row space-between">
                    <div class="about-img">
                        <img src="${interior}" alt="">
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
    `
}

    
// YourModule.js

// Your module code here

if (module.hot) {
    module.hot.accept();
  }
  