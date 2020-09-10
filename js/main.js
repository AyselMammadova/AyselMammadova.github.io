$(document).ready(function () {

    // scroll down
    $(".scroll-down").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-company").offset().top
        }, 2000);
    });

    // window scroll

    $(window).scroll(function(){
        var feature = $('#features'),
            header = $('header'),
            scroll = $(window).scrollTop();
        var featureHeight = $('#features').height();
        var headHeight = $('header').height();
      
        if (scroll >= featureHeight) {
            feature.slideUp('500');
            feature.css('display', 'none');
        }
        else {
            feature.css('display', 'flex');
        }
      
        if (feature.is(':hidden')) header.addClass('sticky')
        else header.removeClass('sticky');
    });


    // product carousel

    $('.products-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        dots: false,
        nav: true,
        items: 5, 
        margin: 10,
        responsive : {
            0: {
               items: 1
            },
            500: {
               items: 2
            },
            768 : {
                items: 3
            },
            991 : {
                items: 4
            },
            1200 : {
                items: 5
            }
        }
    });
});