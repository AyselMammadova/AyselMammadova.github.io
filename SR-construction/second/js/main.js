$(document).ready(function() {
    // slider
    $('.slider').owlCarousel({ 
        loop: true,
        lazyLoad:true,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 700,
        dots: false,
        nav: false,
        items: 1,
        animateOut: 'fadeOut'
    });

    // hamburger menu
    $('body').click(function(e) {
        $('.menu-icon').removeClass('close', 300);
        $('.menu-inside-pages').slideUp(300);
        $('.navbar-nav').animate({right:'-100%'}, 200);
    });
    $('.menu-icon').click(function(e) {
        e.stopPropagation();
        if(!($(this).hasClass('close'))) {
            $(this).addClass('close', 300);
            $('.menu-inside-pages').slideDown(300);
            $('.navbar-nav').animate({right:'130px'}, 500);
        } else {
            $(this).removeClass('close', 300);
            $('.menu-inside-pages').slideUp(300);
            $('.navbar-nav').animate({right:'-100%'}, 200);
        }
    });
    $('.menu-inside-pages').click(function(e) {
        e.stopPropagation();
    });
});