$(document).ready(function() {

    // dropdown 

    // Add slideDown animation to Bootstrap dropdown when expanding.
    // $('.dropdown').on('show.bs.dropdown', function() {
    //     $(this).find('.dropdown-menu').first().stop(true, true).slideDown('fast');
    // });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    // $('.dropdown').on('hide.bs.dropdown', function() {
    //     $(this).find('.dropdown-menu').first().stop(true, true).slideUp('fast');
    // });

    // window scroll

    $(window).scroll(function(){
        var header = $('header'),
            scroll = $(window).scrollTop();
        var headHeight = $('header').height();

        if (scroll >= headHeight) header.addClass('sticky')
        else header.removeClass('sticky');
    });

    //main carousel

    // slide caption animate 
    var owl = $('.mainCarousel');
    function fadeInReset() {
		$('.mainCarousel .slide-text .fadeIn-1').stop().delay(800).animate({ opacity: 0 }, { duration: 400, easing: "easeInCubic" });
    }
    
    function fadeInRightReset() {
        $('.mainCarousel .slide-text .fadeInRight-1, .mainCarousel .slide-text .fadeInRight-2').stop().delay(800).animate({ opacity: 0, left: "-15px" }, { duration: 400, easing: "easeInCubic" });
	}
	
	function fadeIn() {
		$('.mainCarousel .owl-item.active .slide-text .fadeIn-1').stop().delay(500).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
    }

    function fadeInRight() {
		$('.mainCarousel .owl-item.active .slide-text .fadeInRight-1').stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
		$('.mainCarousel .owl-item.active .slide-text .fadeInRight-2').stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
	}
    $('.mainCarousel').owlCarousel({
        loop: true,
        lazyLoad:true,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        dotsEach: true,
        dots: true,
        dotsContainer: '#customDots',
        nav: true,
        navContainer: '#customNavs',
        navSpeed: 500,
        smartSpeed: 500,
        items: 1	
    });

    //advantages carousel
    $('.advantageCarousel').owlCarousel({
        loop: false,
        lazyLoad:true,
        margin: 10,
        autoplay: false,
        dots: false,
        nav: true,
        navText: ["⟨","⟩"],
        navSpeed: 500,
        smartSpeed: 500,
        slideBy: 2,
        items: 8
    });

    // remove old nav

    $('#customNavs').find('button').remove();
   

    

    // nav and dot function

    
    owl.on('changed.owl.carousel', function() {
        fadeInRightReset();
        fadeInReset();
        fadeInRight();
        fadeIn();
    });

    $('#customDots .owl-dot').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 1000]);
        fadeInRightReset();
        fadeInReset();
        fadeInRight();
        fadeIn();
    });

    $('#customNavs .owl-prev').click(function () {
        owl.trigger('prev.owl.carousel');
        fadeInRightReset();
        fadeInReset();
        fadeInRight();
        fadeIn();
    });

    $('#customNavs .owl-next').click(function () {
        owl.trigger('next.owl.carousel');    
        fadeInRightReset();
        fadeInReset();
        fadeInRight();
        fadeIn();
    });
    
    // stop autoplay and start

    $('#customNavs > .owl-nav').on('click', function () {
        $('.owl-carousel').trigger('stop.owl.autoplay');
    });
    
    $('#customNavs > .owl-nav').mouseleave(function(){
        $('.owl-carousel').trigger('play.owl.autoplay',[5000]);
    });
    
    $('#customDots > .owl-dot').on('click', function () {
        $('.owl-carousel').trigger('stop.owl.autoplay');
    });
    
    $('#customDots > .owl-dot').mouseleave(function(){
        $('.owl-carousel').trigger('play.owl.autoplay',[5000]);
    });


    // add active class on advantages carousel

    $('#advantages .item a').click(function() {
        $(this).addClass('active');
        $(this).parents().eq(1).siblings().find('a').removeClass('active');
    });

    
    // change image on service hover 

    $('#services .service').hover(function() {
        var serviceIcon = $(this).find('.service-info img').attr('src').split('.')[0];
        var serviceEnd = $(this).find('.service-info img').attr('src').split('.')[1];
        $(this).find('.service-info img').attr('src', serviceIcon + '-white.' + serviceEnd);
    }, function() {
        var serviceIcon = $(this).find('.service-info img').attr('src').split('.')[0].split('-')[0];
        var serviceEnd = $(this).find('.service-info img').attr('src').split('.')[1];
        $(this).find('.service-info img').attr('src', serviceIcon + '.' + serviceEnd);
    });
});