$('.works__item').fancybox();
$(".owl-carousel").owlCarousel({
  items:1,
  loop:true
});

$(".works__item_slaider:hidden").slice(0,4).show();

$('.load').on('click', function(e) {
  e.preventDefault();
  
  var elem = $(".works__item_slaider:hidden");
  
  if (elem.length > 0) {
    elem.slice(0,4).slideDown();
  }
  
  if ($(".works__item_slaider:hidden").length === 0) {
    $(".load").fadeOut();
  }
});

$(window).on('scroll', function(){
  var scroll = $(window).scrollTop();

    if (scroll > 110) {
        $('header').addClass('active');
    } else {
        $('header').removeClass('active');
    }
});

$('.burger-menu').on('click', function(){
  $(this).toggleClass('active');
  $('.header__wrap').toggleClass('active');
})