$(document).ready(function () {

    $('.mainCarousel.first-Main').owlCarousel({
        loop: true,
        lazyLoad:true,
        autoplay: false,
        dots: false,
        nav: true,
        navSpeed: 2000,
        animateOut: 'slideOutLeft',
        navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        items: 1
    });

    $('.mainCarousel.second-Main').owlCarousel({
        loop: true,
        lazyLoad:true,
        autoplay: false,
        dots: false,
        nav: true,
        navSpeed: 500,
        navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        items: 1
    });

    $('.search-icon').click(function(e) {
        e.stopPropagation(); 
        $(this).find('i').toggleClass('fa-search fa-times');
        $('.search-line').slideToggle("500");
    });

    $('.search-line').click(function(e) {
        e.stopPropagation(); 
    });

    $("body").click(function(){
        $('.search-icon').find('i').addClass('fa-search').removeClass('fa-times');
        $('.search-line').slideUp("500");
    });

    $(window).scroll(function() {    
        var about = $('#about').offset().top;
        var services = $('#services').offset().top;
        var news = $('#news').offset().top;
        var footerTop = $('footer .section-top').offset().top;
        var footerBottom = $('footer .section-bottom').offset().top;

        if (about - ($(window).scrollTop()+$(window).height()) < 0) {
            $('#about .articleSec').addClass('fadeInLeft');
            $('#about .hexagon-img').addClass('zoomIn');
        } else {
            $('#about .articleSec').removeClass('fadeInLeft');
            $('#about .hexagon-img').removeClass('zoomIn');
        };

        if (services - ($(window).scrollTop()+$(window).height()) < 0) {
            $('#services .box-wrap').addClass('fadeInRight');
        } else {
            $('#services .box-wrap').removeClass('fadeInRight');
        };

        if (news - ($(window).scrollTop()+$(window).height()) < 0) {
            $('#news .news-desc').addClass('fadeInLeft');
            $('#news .box-wrap').addClass('zoomIn');
        } else {
            $('#news .news-desc').removeClass('fadeInLeft');
            $('#news .box-wrap').removeClass('zoomIn');
        };

        if (footerTop - ($(window).scrollTop()+$(window).height()) < 0) {
            $('footer .section-top h4').addClass('fadeInRight');
            $('footer .section-top .socialM').addClass('fadeInRight');
            $('footer .section-top .socialName').addClass('fadeInRight');
        } else {
            $('footer .section-top h4').removeClass('fadeInRight');
            $('footer .section-top .socialM').removeClass('fadeInRight');
            $('footer .section-top .socialName').removeClass('fadeInRight');
        }

        if (footerBottom - ($(window).scrollTop()+$(window).height()) < 0) {
            $('footer .section-bottom .navbar-brand').addClass('zoomIn');
            $('footer .section-bottom .h6').addClass('fadeIn');
            $('footer .section-bottom h6').addClass('fadeIn');
            $('footer .section-bottom li').addClass('fadeIn');
        } else {
            $('footer .section-bottom .navbar-brand').removeClass('zoomIn');
            $('footer .section-bottom .h6').removeClass('fadeIn');
            $('footer .section-bottom h6').removeClass('fadeIn');
            $('footer .section-bottom li').removeClass('fadeIn');
        }
    }); 






});



