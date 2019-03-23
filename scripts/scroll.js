var nav = document.getElementById("nav");
var paralaxEls = document.querySelectorAll(".paralax");
var paralax2Els = document.querySelectorAll(".paralax2");
var paralaxMovement = 15;

window.onscroll = function() {
    if (document.documentElement.scrollTop  <= 50) {
        nav.classList.remove("bg");
    } else {
        nav.classList.add("bg");
    }

    var paralaxLength = paralaxEls.length;
    for (var i = 0; i < paralaxLength; i++) {
        paralaxEls[i].style.transform = 'translateY(' + ( paralaxMovement * 0.01 * document.documentElement.scrollTop - (document.documentElement.scrollTop / document.documentElement.scrollHeight) * 300 -100) + 'px)';
    }

    var paralax2Length = paralax2Els.length;
    for (var i = 0; i < paralax2Length; i++) {
        paralax2Els[i].style.transform = 'rotate(45deg) translateY(' + ( paralaxMovement * 0.01 * document.documentElement.scrollTop - (document.documentElement.scrollTop / document.documentElement.scrollHeight) * 300 -100) + 'px)';
    }
}

ScrollReveal().reveal('.reveal', {
    distance: '5%',
    origin: 'bottom',
    duration: 1000
});