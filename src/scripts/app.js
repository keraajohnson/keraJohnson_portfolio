// header
const typed = new Typed('.typedStrings', {
    strings: ["the internet", "javascript", "design", "dogs", "reality TV", "running", "#a11y", "react"],
    typeSpeed: 55,
    backSpeed: 40,
    showCursor: true,
    loop: true
});

const pressed = [];
const code = "bensbagels";

const finishbagels = () => {
    let bagel = document.getElementById("bagel-container");
    bagel.className = "hide";
}

const trigger = () => {
    setTimeout(
        function () {
            finishbagels();
        }, 10000);
}

const startbagels = () => {
    let bagel = document.getElementById("bagel-container");
    bagel.className = "show";
    trigger();

}

window.addEventListener("keyup", function (e) {
    pressed.push(e.key);
    pressed.splice(-code.length - 1, pressed.length - code.length);

    if (pressed.join("").includes(code)) {
        startbagels();
    }
});

$(function () {
    $('.hamburger').on('click', function () {
        $('.menu').fadeIn("slow");
    });
    $('.exit-responsive').on('click', function () {
        $('.menu').fadeOut("slow");
    });
    $('.navMobile.a').on('click', function () {
        $('.menu').fadeOut("slow");
    });
    new WOW().init();
    // smooth scroll
    $('nav ul li a').smoothScroll();
});

