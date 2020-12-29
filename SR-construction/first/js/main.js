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


    // floor tooltip svg

    var myPolygon = $('.floor-svg .hover-me');
    var myTooltip = $('.floor-tooltip-wrapper');
    var w = $(window);

    function checkWidth() {
        if (w.width() < 990.91) {
            $('.floor-tooltip-wrapper').addClass('mob-position');
        } else {
            $('.floor-tooltip-wrapper').removeClass('mob-position');
        }
    }
    
    window.onload = function() {
      checkWidth();
    };
    
    w.resize(checkWidth);

    myPolygon.mousemove(function(e) {
        var floorN = $(this).parent().data('floor');
        var blockN = $(this).parent().data('block');
        $('.floor-tooltip-wrapper').html('');
        $('.floor-tooltip-wrapper').append('<div class="tooltip-box"><div class="number-b"><span class="title">Blok</span><span class="number">' + blockN + '</span></div><div class="number-f"><span class="title">Mərtəbə</span><span class="number">' + floorN + '</span></div></div>');
        myTooltip.css('transform', 'translate('+ e.clientX + 'px' + ',' + e.clientY + 'px' +')');
        $('.mob-position').css('transform', 'none');
        myTooltip.css('opacity', '1');
    });

    myPolygon.mouseout(function(e) {
        myTooltip.css('opacity', '0');
    });


     // flat tooltip svg

     var myPolygon1 = $('.flat-svg .hover-me');
     var myTooltip1 = $('.flat-tooltip-wrapper');
 
     myPolygon1.mousemove(function(e) {
         var roomN = $(this).parent().data('room');
         var areaN = $(this).parent().data('area');
         myTooltip1.find('.room-flat .number').text(roomN);
         myTooltip1.find('.area-flat .number').text(areaN);
     });

     myPolygon1.mouseout(function(e) {
        myTooltip1.find('.room-flat .number').text('-');
         myTooltip1.find('.area-flat .number').text('-');
    });


    // popup notification for scroll mob

    setTimeout(function() {
        $('.mob-scroll-notification').addClass('hide');
    }, 2000);

    $('body').click(function(e) {
        $('.mob-scroll-notification').addClass('hide');
        $('.menu-icon').removeClass('close', 300);
        $('#menu').slideUp(300);
        $('.dropdown-menu-wrap').removeClass('show');
        $('.modal-wrapper').hide();
        $('.modal-wrapper .modal-wrap').hide();
    });


    // hamburger menu
    $('.menu-icon').click(function(e) {
        e.stopPropagation();
        if(!($(this).hasClass('close'))) {
            $(this).addClass('close', 300);
            $('#menu').slideDown(300);
        } else {
            $(this).removeClass('close', 300);
            $('#menu').slideUp(300);
        }
    });
    $('#menu').click(function(e) {
        e.stopPropagation();
    });

    $('.dropdown-menu-wrap').click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('show').siblings().removeClass('show');
    });

    // modals
    $('.open-modal').click(function(e) {
        e.stopPropagation();
        var modalL= $(this).attr('href');
        $('.modal-wrapper').show();
        var modalD = $('.modal-wrapper .modal-wrap').filter(function() {
            return $(this);
        });
        console.log(modalD.data('modal'));

        if(modalL === modalD.data('modal')) {
            modalD.show();
        } 
        // $('.modal-wrapper .modal-wrap').show();
    });

    $('.modal-wrapper .modal-wrap').click(function(e) {
        e.stopPropagation();
    });


    // input, textarea focus effect 
    const labels = document.querySelectorAll("label");

    labels.forEach((label) => {
        label.innerHTML = label.innerText
            .split("")
            .map((letter, index) => {
                return `<span style="transition-delay:${index*100}ms">${letter}</span>`
            }).join("");
    })
});