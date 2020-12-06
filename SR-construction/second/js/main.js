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
        $('.menu-icon').removeClass('close', 700);
        $('.right-side-wrapper').removeClass('change-border', 800);
        $('.menu-inside-pages').slideUp(700);
        $('.navbar-nav').animate({right:'-100%'}, 200);
    });
    $('.menu-icon').click(function(e) {
        e.stopPropagation();
        if(!($(this).hasClass('close'))) {
            $(this).addClass('close', 700);
            $('.right-side-wrapper').addClass('change-border', 700);
            $('.menu-inside-pages').slideDown(700);
            $('.navbar-nav').animate({right:'4.94792%'}, 1000);
        } else {
            $(this).removeClass('close', 700);
            $('.right-side-wrapper').removeClass('change-border', 800);
            $('.menu-inside-pages').slideUp(700);
            $('.navbar-nav').animate({right:'-100%'}, 200);
        }
    });
    $('.menu-inside-pages').click(function(e) {
        e.stopPropagation();
    });
});