$(document).ready(function() {
    // slider
    $('.slider').owlCarousel({ 
        loop: true,
        lazyLoad:true,
        mouseDrag: false,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 700,
        dots: false,
        nav: false,
        items: 1,
        animateOut: 'fadeOut'
    });
});