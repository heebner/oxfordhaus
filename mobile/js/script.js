
$('[data-role="page"]').live('pagebeforeshow', function(){
  window.addEventListener("load",function() {
    setTimeout(function(){
        window.scrollTo(0, 1);
    }, 0);
  });

  if($(window).width() <= $(window).height()) 
    SizeForPortrait();
  else
    SizeForLandscape();

  $(window).on( "orientationchange", function( event ) {
    if(event.orientation == "landscape")
      SizeForLandscape();
    else
      SizeForPortrait();
  });

  $(window).resize(function(){
    if($(window).width() >= $(window).height())
      SizeForLandscape();
    else
      SizeForPortrait();
  });
});

function SizeForPortrait()
{
  $("#content").height($(window).height() - 30);
  $("#content").width($(window).width() - 30);
  $("#balloon_content").height($(window).height());
  $("#balloon_content").width($(window).width() - 30);
  window.scrollTo(0, 1);

  if($("#logo") != null) {
    ResizeElementWidth("#logo", .9, 656, 616);
    $("#logo").css({"padding-top":(($(window).height() - $("#logo").height())/ 2)});
    $("#logo").css({"padding-left":"0px"});
  }

  if($("#web") != null){
    var original_web_width = $("#web").width();
    ResizeElementWidth("#web", .9, 481, 515);
    var new_width = $("#web").width();
    var zoomFactor = 1 - ((515 - new_width) / 515);
    $("#web-image").css({"zoom":zoomFactor});
    $("#web-image").css({"-o-transform":zoomFactor});
    $("#web-image").css({"-moz-transform":zoomFactor});
    $("#web").css({"margin-top":(($(window).height() - $("#web").height())/ 2)});
    $("#web").css({"margin-left":"0px"});
  }

  if($("#balloon") != null) {
    ResizeElementWidth("#balloon", .35, 681, 299);
    $("#balloon").css({"padding-top":(($(window).height() - $("#balloon").height())/ 2)});
    $("#balloon").css({"padding-left":(($(window).width() - $("#balloon").width())/ 2)});
  }
}

function SizeForLandscape()
{
  $("#content").height($(window).height() - 30);
  $("#content").width($(window).width() - 30);
  $("#balloon_content").height($(window).height());
  $("#balloon_content").width($(window).width() - 30);
  window.scrollTo(0, 1);

  if($("#logo") != null) {
    ResizeElementHeight("#logo", .9, 656, 616);
    $("#logo").css({"padding-left":(($(window).width() - $("#logo").width())/ 2)});
    $("#logo").css({"padding-top":(($("#content").height() - $("#logo").height())/ 2)});
  }

  if($("#web") != null){
    var original_web_height = $("#web").height();
    ResizeElementHeight("#web", .9, 481, 515);
    var new_height = $("#web").height();
    var zoomFactor = 1 - ((481 - new_height) / 481);
    $("#web-image").css({"zoom":zoomFactor});
    $("#web-image").css({"-o-transform":zoomFactor});
    $("#web-image").css({"-moz-transform":zoomFactor});
    $("#web").css({"margin-left":(($("#content").width() - $("#web").width())/ 2)});
    $("#web").css({"margin-top":"0px"});
  }

  if($("#balloon") != null) {
    ResizeElementHeight("#balloon", .9, 681, 299);
    $("#balloon").css({"padding-left":(($("#content").width() - $("#balloon").width())/ 2)});
    $("#balloon").css({"padding-top":(($("#content").height() - $("#balloon").height())/ 2)});
  }
}

function ResizeElementHeight(elementName, percent, original_height, original_width){
  var new_height = $(window).height() * percent;
  var new_width = (new_height * original_width) / original_height;
  $(elementName).height(new_height);
  $(elementName).width(new_width);
  var string = new_width + "px " + new_height + "px";
  $(elementName).css({"background-size": string});
}

function ResizeElementWidth(elementName, percent, original_height, original_width){
  var new_width = $(window).width() * percent;
  var new_height = (new_width * original_height) / original_width;
  $(elementName).height(new_height);
  $(elementName).width(new_width);
  var string = new_width + "px " + new_height + "px";
  $(elementName).css({"background-size": string});
}
