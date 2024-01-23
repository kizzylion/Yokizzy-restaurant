const homeBtn = document.querySelector("#homeBtn")
const aboutBtn = document.querySelector("#aboutBtn")
const menuBtn = document.querySelector("#menuBtn")
const contactBtn = document.querySelector("#contactBtn")

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




