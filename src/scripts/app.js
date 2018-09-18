    // header
    const typed = new Typed('.typedStrings', {
        strings: ["the internet", "javascript", "design", "dogs", "reality TV", "running", "#a11y", "react"],
        typeSpeed: 55,
        backSpeed: 40,
        showCursor: true,
        loop: true
    });
    
$(function () {
    // flickity carousel
    $('.mainCarousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        cellSelector: '.project',
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true
    });	
    new WOW().init();

    // smooth scroll
    $('nav ul li a').smoothScroll();
});

