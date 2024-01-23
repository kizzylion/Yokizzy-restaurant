const closeBadge = document.getElementById('badgeClose');

const welcomeImg = document.getElementById('welcomeImg');
const welcomeBox = document.getElementById('box');

closeBadge.addEventListener("click", function() {
    welcomeBox.classList.toggle('hide');
})