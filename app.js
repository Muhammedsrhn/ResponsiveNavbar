const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobilMenu);

function mobilMenu() {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
}