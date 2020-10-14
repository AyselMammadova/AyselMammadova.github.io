$(document).ready(function () {

  // header fixed 
  $(window).scroll(function(){
    var header = $('header'),
        scroll = $(window).scrollTop();
    var headHeight = $('header').height();

    if (scroll >= headHeight) header.addClass('sticky')
    else header.removeClass('sticky');
  });

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

  var lastScrollTop = $('#portfolio').height();
  backgroundSize = $("#about .about-img").css('background-size');
$(window).scroll(function(event){
  console.log(backgroundSize);
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
    backgroundSize = parseFloat(backgroundSize) - 0.3;
   } else {
    backgroundSize = parseFloat(backgroundSize) + 0.3;
   }

  if (parseFloat(backgroundSize) < 100) {
    console.log('true');
   backgroundSize = 100;
  }
   $("#about .cover-img").css('background-size', backgroundSize + '%');
    $("#about .about-img-wrap").css({
      transform: 'translate(-50%, '+ st/1000 + '%' +')'
    });
    $("#about .about-img").css('background-size', backgroundSize + '%');
    $("#about .overlay-img").css('background-size', backgroundSize + '%');
   lastScrollTop = st;
});


  // add and remove wishlist
  $('.wishlistIcon').click(function() {
    $(this).toggleClass('mark');
  })

  // hamburger menu 
  $('.menu-wrap').click(function() {
    $(this).toggleClass('opened');
  })
});
