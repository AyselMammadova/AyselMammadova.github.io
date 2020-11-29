$(document).ready(function() {
    // slider
    $('.slider').owlCarousel({ 
        loop: false,
        lazyLoad:true,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 700,
        dots: false,
        nav: false,
        items: 1, 
        transition: "fade",
        animate: "fadeInUp"	
    });
});