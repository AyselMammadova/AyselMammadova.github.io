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
        var headHeight = $('.first-body #main').height();

        if (scroll >= headHeight) header.addClass('sticky')
        else header.removeClass('sticky');

        if($('.first-body header').hasClass('sticky')) {
            $('.first-body header').find('.navbar-brand img').attr('src', 'img/original-logo.png');
        } else {
            $('.first-body header').find('.navbar-brand img').attr('src', 'img/white-logo.png');
        }

        if ($(window).scrollTop()){
            feature.slideUp();
        }
        else{
            feature.slideDown();
        }
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