$(document).ready(function() {
    // slider
    $('.slider').owlCarousel({ 
        loop: true,
        lazyLoad:true,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 700,
        dots: false,
        nav: false,
        items: 1,
        animateOut: 'slideOutUp'
    });

    // parallax clouds
    var scene = document.getElementById('scene')
    var parallax = new Parallax(scene);
});