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

    myPolygon.mouseover(function(e) {
        var floorN = $(this).parent().data('floor');
        var buildingN = $(this).parent().data('building');
        myTooltip.find('.number-b span').text(buildingN);
        myTooltip.find('.number-f span').text(floorN);
        myTooltip.show();
        var polygonPos = $(this).offset();
        
        myTooltip.css('transform', 'translate('+ e.pageX + 'px' + ',' + e.pageY + 'px' +')');
        // myTooltip.css('left', (e.pageX - 136) + 'px');
        // myTooltip.css('top', e.pageY + 'px');
        console.log(polygonPos.left);
    });

    myPolygon.mouseout(function(e) {
        myTooltip.hide();
    });
});