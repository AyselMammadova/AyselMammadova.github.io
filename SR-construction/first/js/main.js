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

    var myPolygon = $('.floor');
    var myTooltip = $('#myTooltip');

    myPolygon.mousemove(function(e) {
        var floorN = $(this).parent().data('floor');
        var buildingN = $(this).parent().data('building');
        $('.tooltip-box-wrapper').html('');
        $('.tooltip-box-wrapper').append('<div class="tooltip-box"><div class="number-b"><span class="title">Bina</span><span class="number">' + buildingN + '</span></div><div class="number-f"><span class="title">Mərtəbə</span><span class="number">' + floorN + '</span></div></div>');
        myTooltip.css('transform', 'translate('+ e.clientX + 'px' + ',' + e.clientY + 'px' +')');
        myTooltip.css('opacity', '1');
    });

    myPolygon.mouseout(function(e) {
        myTooltip.css('opacity', '0');
    });

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
        } else {
            $(this).removeClass('close', 300);
            $('#menu').slideUp(300);
            $('.social-media li').removeClass('black', 300);
        }
    });
    $('#menu').click(function(e) {
        e.stopPropagation();
    });
});