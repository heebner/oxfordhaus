// On your marks, get set...
$(document).ready(function(){
  //$.stellar();
  //$("body").backstretch("/Users/benjamin/Dropbox/New Splash Page/images/horizontal_wood.jpg");

  var ua = navigator.userAgent,
    isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

  if (isMobileWebkit) {
    $('html').addClass('mobile');
  }

  $(function(){
    var iScrollInstance;

    if (isMobileWebkit) {
      iScrollInstance = new iScroll('wrapper');

      $('#scroller').stellar({
        scrollProperty: 'transform',
        positionProperty: 'transform',
        horizontalScrolling: false,
        verticalOffset: 0
      });
      var string = ($(window).width() / 4) + "% " + ($(window).width() / 4) + "%";
      $("#oxfordhauslogo").css({"background-size": string});
      $("#oxfordhauslogo").height(($("#oxfordhauslogo").height() * $(window).width()) / $("#oxfordhauslogo").width());
      $("#oxfordhauslogo").width($(window).width());
      $("#oxfordhauslogo").attr("data-stellar-ratio", -2)

      $("#plane").css({"background-size": string});


      $("#web").attr("data-stellar-vertical-offset", -100);
      var zoomFactor = ($(window).width() / 400);
      $("#web-image").css({"zoom":zoomFactor});
      $("#web-image").css({"-o-transform":zoomFactor});
      $("#web-image").css({"-moz-transform":zoomFactor});


    } else {
      $.stellar({
        horizontalScrolling: false,
        verticalOffset: 0
      });
    }
  });

  $(window).resize(function(){
    var minSize = 800;

    if($(window).width() < minSize)
    {
      var string = ($(window).width() / minSize) * 100 + "% " + ($(window).width() / minSize) * 100 + "%";
      $("#oxfordhauslogo").css({"background-size": string});
      $("#oxfordhauslogo").height(($("#oxfordhauslogo").height() * $(window).width()) / $("#oxfordhauslogo").width());
      $("#oxfordhauslogo").width($(window).width());
      $("#plane").css({"background-size": string});
      $("#plane").height(($("#plane").height() * $(window).width()) / $("#plane").width());
      $("#plane").width($(window).width());

      // Let's figure out the zoom value
      var zoomFactor = $(window).width() / $("#web-image").width();

      if(zoomFactor < 1.0)
      {
        $("#web-image").css({"zoom":zoomFactor});
        $("#web-image").css({"-o-transform":zoomFactor});
        $("#web-image").css({"-moz-transform":zoomFactor});
      }

    }
  });

  $(window).scroll(function () {


    var scroll_top = $(window).scrollTop();     
    var starting_top = 650;
    var stopping_top = 900;
    var multiplier = stopping_top / (stopping_top - starting_top);

    if (scroll_top >= starting_top) {  
      var percentage = (multiplier * (stopping_top - scroll_top)) / stopping_top;

      var margin_left = $(window).width() * percentage;
      if(margin_left <= 10)
        margin_left = 10;
      $("#plane").css({"margin-left": margin_left + "px"});  
    }
    else {
      $("#plane").css({"margin-left": $(window).width() + "px"});
    }

    }); 
  });
