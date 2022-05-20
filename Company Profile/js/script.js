$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

    if( wScroll > $('.portfolio').offset().top - 240 ) {
      $('.portfolio img').each(function(i) {
        setTimeout(function() {
          $('.portfolio img').eq(i).addClass('nongol');
        }, 320 * (i+1));
      });
    }
