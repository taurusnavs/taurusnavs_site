$(function() {
  //hide about-me home
    $("#navbar #s1").one('click', function() {
        $("#home").show();
      });
    $("#navbar #h1").one('click', function() {
        $("#home").hide();
      });

      $('.scrolltotop i').hide();

      $(window).scroll(function() {
        
        if ($(this).scrollTop()>8)
         {
            $('.scrolltotop i').fadeIn(500);
         }
        else
         {
          $('.scrolltotop i').hide(500);
         }
     });
});
