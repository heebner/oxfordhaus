// On your marks, get set...

var gIsMobile = false;

$(document).ready(function(){

  var ua = navigator.userAgent, isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

  gIsMobile = Detectmob();

  if (gIsMobile) {
    $('html').addClass('mobile');
    gIsMobile = true;
    window.location = "mobile/index.html";
  }

  var iScrollInstance;

  if (isMobileWebkit) {


    // let's resize the logo
    ResizeElement("#oxfordhauslogo", .9);
    var original_web_width = $("#web").width();
    ResizeElement("#web", .9);
    var new_width = $("#web").width();
    var zoomFactor = 1 - ((original_web_width - new_width) / original_web_width);
    $("#web-image").css({"zoom":zoomFactor});
    $("#web-image").css({"-o-transform":zoomFactor});
    $("#web-image").css({"-moz-transform":zoomFactor});

    ResizeElement("#plane", .55);
  } 
  else {
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 0
    });

    if($(window).width() < $("#oxfordhauslogo").width()) {
      ResizeElement("#oxfordhauslogo", .9);
    }
    else if($(window).height() < ($("#oxfordhauslogo").height() + 30)) {
      var new_height = $(window).height() - 30;
      var original_height = $("#oxfordhauslogo").height();
      var original_width = $("#oxfordhauslogo").width();
      var new_width = (original_width * new_height) / original_height;
      var multiplier = 1 - (original_width - new_width) / original_width;
      $("#oxfordhauslogo").height(new_height);
      $("#oxfordhauslogo").width(new_width);
      var string = new_width + "px " + new_height + "px";
      $("#oxfordhauslogo").css({"background-size": string});
    }
  }

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

    if(parseInt($("#oxfordhauslogo").css("top")) > 1000)
    {
      var logo_height = $("#oxfordhauslogo").height();
      $("#oxfordhauslogo").css({"display":"none"});
      $("#web").css({"padding-top": logo_height + "px"});
    }
    else
    {
      $("#web").css({"padding-top":"0px"});
      $("#oxfordhauslogo").css({"display":"block"});
    }


    var scroll_top = $(window).scrollTop();     
    var starting_top = 600;
    var stopping_top = 800;
    var multiplier = stopping_top / (stopping_top - starting_top);

    if (scroll_top >= starting_top) {  
      var percentage = (multiplier * (stopping_top - scroll_top)) / stopping_top;

      var margin_left = $(window).width() * percentage;
      if(margin_left <= $(window).width() * (1/6))
        margin_left = $(window).width() * (1/6);
      $("#plane").css({"margin-left": margin_left + "px"});  
    }
    else {
      $("#plane").css({"margin-left": $(window).width() + "px"});
    }

    }); 
  });

  function Detectmob() { 
   if( navigator.userAgent.match(/Android/i)
   || navigator.userAgent.match(/webOS/i)
   || navigator.userAgent.match(/iPhone/i)
   || navigator.userAgent.match(/iPad/i)
   || navigator.userAgent.match(/iPod/i)
   || navigator.userAgent.match(/BlackBerry/i)
   || navigator.userAgent.match(/Windows Phone/i)
   ){
      return true;
    }
   else {
      return false;
    }
  }

  function ResizeElement(elementName, percent, basis){
    var original_width = $(elementName).width();
    var original_height = $(elementName).height();
    var new_width = $(window).width() * percent;
    var new_height = (new_width * original_height) / original_width;
    $(elementName).height(new_height);
    $(elementName).width(new_width);
    var string = new_width + "px " + new_height + "px";
    $(elementName).css({"background-size": string});
  }
