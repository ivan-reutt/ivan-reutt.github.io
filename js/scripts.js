$(function(){
  new WOW().init();
  
  function staticAnimate(object) {
    TweenMax.to(object, .03, {
      backgroundPosition: Math.floor(Math.random() * 100) + 1 + "% " + Math.floor(Math.random() * 10) + 1 + "%",
      onComplete: staticAnimate,
      onCompleteParams: [object],
      ease: SteppedEase.config(1)
    });
  };
  var static = $('.noiseBG');
  staticAnimate(static);
});

$(document).ready(function(){
    $(".main-screen__menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
$(document).ready(function(){
    $(".main-screen__button-down").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

//
//$(document).ready(function(){
// $('.sun').click(function () {
// $(".main-screen").toggleClass('active');
// $(".noiseBG").toggleClass('active');
// });
//});
