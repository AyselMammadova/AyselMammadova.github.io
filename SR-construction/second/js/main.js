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

    // $( ".floor-svg svg a" ).hover(function() {
    //     if($(this).parent().id === $(this).parents().eq(1).find('.floor').data('id')) {
    //         $(this).parents().eq(1).find('.floor').addClass('hover-rect');
    //     }
    // });

    // var myPolygon = document.getElementById("myPolygon");
    // var myTooltip = document.getElementById("myTooltip");

    // myPolygon.addEventListener("mouseover", showPopup);
    // myPolygon.addEventListener("mouseout", hidePopup);

    // function showPopup(evt) {
    //     var iconPos = myPolygon.getBoundingClientRect();
    //     myTooltip.style.left = (iconPos.right - 200) + "px";
    //     myTooltip.style.top = (window.scrollY + iconPos.top - 10) + "px";
    //     myTooltip.style.display = "block";
    //     myPolygon.classList.add("active-tooltip");
    // }

    // function hidePopup(evt) {
    //     myTooltip.style.display = "none";
    //     myPolygon.classList.remove("active-tooltip");
    // }

    var myPolygon = $('.floor');
    var myTooltip = $('#myTooltip');

    myPolygon.mouseover(function(e) {
        var floorN = $(this).parent().data('floor');
        var buildingN = $(this).parent().data('building');
        myTooltip.find('.number-b span').text(buildingN);
        myTooltip.find('.number-f span').text(floorN);
        myTooltip.show();
        var polygonPos = $(this).offset();
        myTooltip.css('left', (e.pageX - 100) + 'px');
        myTooltip.css('top', ($(window).scrollTop() + polygonPos.top - 40) + 'px');
        console.log(polygonPos.left);
    });

    myPolygon.mouseout(function(e) {
        myTooltip.hide();
    });
});