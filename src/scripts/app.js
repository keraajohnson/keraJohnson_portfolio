// header
const typed = new Typed('.typedStrings', {
    strings: ["the internet", "javascript", "design", "dogs", "reality TV", "running", "#a11y", "react"],
    typeSpeed: 55,
    backSpeed: 40,
    showCursor: true,
    loop: true
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

