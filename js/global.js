// Execute the following code when the page is loaded
$(function () {
    // log(), which is just a shortcut for console.log()
    log = function() {
        console.log(Array.prototype.slice.call(arguments).join(' '));
    };

    // Custom JS

    $('.element').typed({
      strings: ["Inspiration is a now thing.", "If it grabs you, grab it right back and put it to work."],
      typeSpeed: 20,
      backDelay: 1000,
      callback: function() {
        $('.author').delay( 700 ).fadeIn("slow");
        $('.element').delay( 2800 ).fadeOut("slow");
        $('.author').delay( 1500 ).fadeOut();
        $('.clear').delay( 2800 ).fadeOut("slow");
        $('.stuff').delay( 3500 ).fadeIn("slow");
        $('.fa-angle-double-down').delay( 3500 ).fadeIn("slow");
        $('.main_page').delay( 3500 ).fadeIn("slow");
        $('.slide_logo').delay( 3500 ).fadeIn("slow");
      }
    });

    var arrow = $('i.fa-angle-double-down');
     function runIt() {
       arrow.animate({opacity:'1'}, 800);
       arrow.animate({opacity:'0.1'}, 800, runIt);
    }
    runIt();

    $('i.fa-angle-double-down').click(function() {
      $('html, body').animate({
        scrollTop: $(".details").offset().top
      }, 2000);
      // $(this).fadeOut("slow");
      // $(this).next().fadeIn("slow");
    });

    $('i.fa-angle-double-up').click(function() {
      $('html, body').animate({
        scrollTop: $('html').offset().top
      }, 1500);
      // $(this).fadeOut("slow");
      // $(this).prev().fadeIn("slow");
    });

    var main = $('.main_page');
    var mainTop = main.offset().top;

    $(window).scroll(function() {
      if (mainTop < $(window).scrollTop()) {
        $('i.fa-angle-double-down').fadeOut();
      }
      else {
        $('i.fa-angle-double-down').fadeIn();
      }

    });

    $('.contact').click(function() {
      $('.slide_nav li div').fadeToggle();
    });


});
