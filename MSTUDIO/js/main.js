$(document).ready(function () {
  // slider text parallax
  var rellax = new Rellax('.rellax');

  // active page  
  $(function () {                          
    $('#navbarMenu .nav-link').each(function () {
        var location = window.location.href; 
        var link = this.href; 
        if(location == link) {              
          $(this).parent().addClass('active');  
        }
    });
    
    $('footer .footer-menu .nav-link').each(function () {
        var location1 = window.location.href; 
        var link1 = this.href; 
        if(location1 == link1) {              
          $(this).parent().addClass('active');  
        }
    });
  });

  // lang wrap
  $(".lang-wrapper").hover(
    function() {
      $('.lang-wrapper .other-langs-wrap').toggleClass('opened');
      if($('.lang-wrapper .other-langs-wrap').hasClass('opened')) {
        $('.lang-wrapper .other-langs-wrap').show();
        $('.lang-wrapper .other-langs-wrap').animate({right: '100%'},100, 'linear');
      } else {
        $('.lang-wrapper .other-langs-wrap').animate({right: '0'},100, 'linear');
        $('.lang-wrapper .other-langs-wrap').fadeOut('fast');
      }   
    }
  );

  /* for mobile click */
  // $('.lang-wrapper .active-lang').click(function() {
  //     $('.lang-wrapper .other-langs-wrap').toggleClass('opened');
  //     if($('.lang-wrapper .other-langs-wrap').hasClass('opened')) {
  //       $('.lang-wrapper .other-langs-wrap').show();
  //       $('.lang-wrapper .other-langs-wrap').animate({right: '100%'},100, 'linear');
  //     } else {
  //       $('.lang-wrapper .other-langs-wrap').animate({right: '0'},100, 'linear');
  //       $('.lang-wrapper .other-langs-wrap').hide('100');
  //     }     
  // });

  

  // about scroll and zoom out effect
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $("#about .cover-img").css({
      transform: 'scale('+ scroll/1000 +')'
    });
    $("#about .about-img-wrap").css({
      transform: 'translate(-50%, '+ scroll/100 + '%' +')'
    });
    $("#about .about-img").css({
      transform: 'scale('+ scroll/1000 +')'
    });
    $("#about .overlay-img").css({
      transform: 'scale('+ scroll/1000 +')'
    });
  });


  // add and remove wishlist
  $('.wishlistIcon').click(function() {
    $(this).toggleClass('mark');
  })
});
