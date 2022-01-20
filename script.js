$(document).ready(function (){
   $("#to_start").click(function (){
       $('html').animate({
              scrollTop: $("#start").offset().top
          }, 2000 );
      });
});
$(document).ready(function (){
    $("#to_about").click(function (){
        $('html').animate({
               scrollTop: $("#about").offset().top
           }, 1000 );
       });
 });
 $(document).ready(function (){
    $("#to_blog").click(function (){
        $('html').animate({
               scrollTop: $("#blog").offset().top
           }, 2400 );
       });
 });

