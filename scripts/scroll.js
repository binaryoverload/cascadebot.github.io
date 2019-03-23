var nav = document.getElementById("nav");
var paralaxEls = document.querySelectorAll(".paralax");
var paralax2Els = document.querySelectorAll(".paralax2");
var paralaxMovement = 15;

window.onscroll = function() {
    if (document.documentElement.scrollTop  >= 50) {
        nav.classList.add("bg");
    } else {
        nav.classList.remove("bg");
    }
}

window.onscroll();

ScrollReveal().reveal('.reveal', {
    distance: '5%',
    origin: 'bottom',
    duration: 1000
});