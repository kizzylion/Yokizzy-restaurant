

export default function createContactPage(){

    const main = document.getElementById('main');
    main.innerHTML = `
    <section id="contact" class="section">
        <div class="container">
            <div class="title-center">
                <div class="header1">
                    <h2>BOOK A TABLE</h2>
                </div>
            </div>
            <!-- Contact Form -->

            <div class="wrapper flex-row wrapp-booking-form">
                <div class="booking-form">
                    <form method="post">
                        <div class="wrapp-input-group flex-row">
                            <div>
                                <label for="firstname">First Name</label>
                                <input type="text" name="firstname" id="firstname" placeholder="First Name" required>
                            </div>
                            <div>
                                <label for="lastname">Last Name</label>
                                <input type="text" name="lastname" id="lastname" placeholder="Last Name" required>
                            </div>
                            <div>
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email" required>
                            </div>
                            <div>
                                <label for="phone">Phone Number</label>
                                <input type="tel" name="phone" placeholder="Phone" id="phone">
                            </div>
                            <div>
                                <label for="date">Date</label>
                                <input type="date" name="date" id="date" required>
                            </div>
                            <div>
                                <!-- select time -->
                                <label for="time">Time</label>
                                <!-- select time from options -->
                                
                                <select name="time" id="time">
                                    
                                    <!-- option groups for breakfast -->
                                    <optgroup label="Breakfast">
                                        <option value="9:00">9:00</option>
                                        <option value="10:00">10:00</option>
                                        <option value="11:00">11:00</option>
                                    </optgroup>

                                    <optgroup label="Lunch">
                                        <option value="13:00">13:00</option>
                                        <option value="14:00">14:00</option>
                                        <option value="15:00">15:00</option>
                                        <option value="16:00">16:00</option>
                                    </optgroup>

                                    <optgroup label="Dinner">
                                        <option value="18:00">18:00</option>
                                        <option value="19:00">19:00</option>
                                        <option value="20:00">20:00</option>
                                        <option value="21:00">21:00</option>
                                    </optgroup>

                                </select>

                            </div>
                            <div class="btn">BOOK A TABLE</div>
                        </div>
                    </form>

                    
                </div>
                <div class="working-hours">
                    <h3>OPENING HOURS</h3>
                    <!-- welcome note -->
                    <p>We are open 7 days</p>

                    <div class="table-hour flex-row">
                        <p>Monday - Friday</p>
                        <p>9AM - 9PM</p>
                    </div>
                    <div class="table-hour flex-row">
                        <p>Saturday</p>
                        <p>9AM - 7PM</p>
                    </div>
                    <div class="table-hour flex-row">
                        <p>Sunday</p>
                        <p>9AM - 5PM</p>
                    </div>


                </div>
            </div>
        </div>

    
    </section>
    
    <section id="contactlinks" class="section">
            <div class="container">
                <div class="title-center">
                    <div class="header1">
                        <h2>CONTACTS</h2>
                    </div>
                </div>
                <!-- Contacts -->

                <div class="wrapper flex-row wrapp-contacts">
                    <div>
                        <h3>
                            <i class="fa-solid fa-location-dot"></i>
                            LOCATION
                        </h3>
                        <p>122 Joel Ogunaike St, <br> Ikeja, Lagos State.</p>
                    </div>
                    <div>
                        <h3>
                            <i class="fa-sharp fa-solid fa-phone"></i>
                            PHONE
                        </h3>
                        <a class="socialtel" href="tel:+2348100000000">+2348100000000</a>
                    </div>
                    <div>
                        <h3>
                            <i class="fa-solid fa-envelope"></i>
                            EMAIL
                        </h3>
                        <a href="mailto:info@yokizzyrest.com">info@yokizzyrest.com</a>
                    </div>
                    <div>
                        <ul class="socials">
                            <li><a href="https://github.com/kizzylion/yokizzy-restaurant"><i class="fa-brands fa-github"></i></a></li>
                            <li><a href="https://www.facebook.com/chima.kizito/"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="https://twitter.com/chmkzt"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/chimexkizzy?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="https://youtu.be/RuzIBfTstgI?si=HJLVu4XepxYOBhbF"><i class="fa-brands fa-youtube"></i></a></li>
                        </ul>
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
  