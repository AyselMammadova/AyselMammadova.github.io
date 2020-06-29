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
        loop: true,
        lazyLoad:true,
        autoplay: true,
        dots: false,
        nav: true,
        navSpeed: 500,
        navContainer: '.navCustom',
        navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        items: 3
    });

    // when hover items
    
    $('.owl-carousel .item').mouseover(function(){
    $(this).trigger('stop.owl.autoplay');
    });
    
    $('.owl-carousel .item').mouseleave(function(){
        $(this).trigger('play.owl.autoplay',[5000]);
    });
    
    //when click navs
    
    $('section .owl-nav > button').on('click', function () {
        $('.owl-carousel').trigger('stop.owl.autoplay');
    });
    
    $('section .owl-nav > button').mouseover(function(){
        $('.owl-carousel').trigger('play.owl.autoplay',[5000]);
    });
    
    $('section .owl-nav > button').mouseleave(function(){
        $('.owl-carousel').trigger('play.owl.autoplay',[5000]);
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
        var about = $('#about').offset().top + 100;
        var services = $('#services').offset().top + 100;
        var news = $('#news').offset().top + 100;
        var footerTop = $('footer .section-top').offset().top + 100;
        var footerBottom = $('footer .section-bottom').offset().top + 100;

        if (about - ($(window).scrollTop()+$(window).height()) < 0) {
            $('#about .articleSec').addClass('fadeInLeft');
            $('#about .hexagon-img').addClass('zoomIn');
        } 

        if (services - ($(window).scrollTop()+$(window).height()) < 0) {
            $('#services .box-wrap').addClass('fadeInRight');
        } 

        if (news - ($(window).scrollTop()+$(window).height()) < 0) {
            $('#news .item').addClass('zoomIn');
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

    // $('#services .box').each(function(){
    //     var truncated = $(this).find('p').text();
    //     truncated = $.trim(truncated).substring(0,68) + '...';
    //     $(this).find('p').text(truncated);
    // });

    $('#whatIs .video-wrap').click(function() {
        $(this).html('<iframe width="560" height="315" src="https://www.youtube.com/embed/-uQz524deas?rel=0&enablejsapi=1?autoplay=1" frameborder="0"></iframe>');
        $(this).addClass('none-overlay');
    });

});



