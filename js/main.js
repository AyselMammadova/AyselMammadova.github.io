$(document).ready(function () {

    $('.mainCarousel.first-Main').owlCarousel({
        loop: true,
        lazyLoad:true,
        autoplay: true,
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
        autoplay: true,
        dots: false,
        nav: true,
        navSpeed: 500,
        navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        items: 1
    });

    $('.news-carousel').owlCarousel({
        margin: 10,
        loop: false,
        lazyLoad:true,
        autoplay: false,
        dots: false,
        nav: true,
        navSpeed: 500,
        navContainer: '.navCustom',
        items: 3
    });

    $('.navCustom button').remove();

    var owl = $('.news-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.next-nav').click(function() {
        owl.trigger('next.owl.carousel');
        $('.prev-nav').css('opacity', '1');
    })
    // Go to the previous item
    $('.prev-nav').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
        $('.next-nav').css('opacity', '1');
    });

    if ($('.news-carousel .owl-item').eq(0).hasClass('active')) {
        $('.prev-nav').css('opacity', '0');
    };

    // var lastEl = $('.news-carousel .owl-item').length - 1;

    // if ($('.news-carousel .owl-item').eq(lastEl).hasClass('active')) {
    //     $('.next-nav').css('opacity', '0');
    // };


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
        } 

        if (services - ($(window).scrollTop()+$(window).height()) < 0) {
            $('#services .box-wrap').addClass('fadeInRight');
        } 

        if (news - ($(window).scrollTop()+$(window).height()) < 0) {
            $('#news .box-wrap').addClass('zoomIn');
        } 

        if (footerTop - ($(window).scrollTop()+$(window).height()) < 0) {
            $('footer .section-top h4').addClass('fadeInRight');
            $('footer .section-top .socialM').addClass('fadeInRight');
            $('footer .section-top .socialName').addClass('fadeInRight');
        } 

        if (footerBottom - ($(window).scrollTop()+$(window).height()) < 0) {
            $('footer .section-bottom .navbar-brand').addClass('zoomIn');
            $('footer .section-bottom .h6').addClass('fadeIn');
            $('footer .section-bottom h6').addClass('fadeIn');
            $('footer .section-bottom li').addClass('fadeIn');
        } 
    }); 







});



