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
        animateOut: 'fadeOut'
    });


    // tooltip svg

    var myPolygon = $('.floor');
    var myTooltip = $('#myTooltip');
    // var w = $(window);

    // function checkWidth() {
    //     if (w.width() < 990.91) {
    //         $('#myTooltip').addClass('mob-position');
    //     } else {
    //         $('#myTooltip').removeClass('mob-position');
    //     }
    // }
    
    // window.onload = function() {
    //   checkWidth();
    // };
    
    // w.resize(checkWidth);

    myPolygon.mousemove(function(e) {
        var floorN = $(this).parent().data('floor');
        var buildingN = $(this).parent().data('building');
        $('.tooltip-box-wrapper').html('');
        $('.tooltip-box-wrapper').append('<div class="tooltip-box"><div class="number-b"><span class="title">Bina</span><span class="number">' + buildingN + '</span></div><div class="number-f"><span class="title">Mərtəbə</span><span class="number">' + floorN + '</span></div></div>');
        myTooltip.css('transform', 'translate('+ e.clientX + 'px' + ',' + e.clientY + 'px' +')');
        // $('.mob-position').css('transform', 'translate('+ e.clientX + 'px' + ',' + e.clientY + 'px' +')');
        myTooltip.css('opacity', '1');
        // console.log(w.scrollLeft());
    });

    myPolygon.mouseout(function(e) {
        myTooltip.css('opacity', '0');
    });


    // popup notification for scroll mob

    setTimeout(function() {
        $('.mob-scroll-notification').addClass('hide');
    }, 2000);

    $('body').click(function(e) {
        $('.mob-scroll-notification').addClass('hide');
        $('.menu-icon').removeClass('close', 300);
        $('#menu').slideUp(300);
        $('.social-media li').removeClass('black', 300);
    });


    // hamburger menu
    $('.menu-icon').click(function(e) {
        e.stopPropagation();
        if(!($(this).hasClass('close'))) {
            $(this).addClass('close', 300);
            $('#menu').slideDown(300);
            $('.social-media li').addClass('black', 500);
            $('header nav .call-us').addClass('show', 500);
        } else {
            $(this).removeClass('close', 300);
            $('#menu').slideUp(300);
            $('.social-media li').removeClass('black', 300);
            $('header nav .call-us').removeClass('show', 300);
        }
    });
    $('#menu').click(function(e) {
        e.stopPropagation();
    });
});