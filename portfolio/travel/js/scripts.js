$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    loop:true
  });


  $('.header__burger').on('click', function(){
    $('.header__menu__nav').toggleClass('active');
  });

  //$('.header__menu__icons_blue').on('click', function(){  
  //  if ($(window).width() < 480){
  //    $('.header__menu__icons_wrap').toggleClass('active');
  //  };
  //})

  $('.main-screen__form').on('click', function(){
    if ($(window).width() < 768){
      $('.main-screen__form input, .main-screen__form button').show();
      $('.main-screen__form').css({bottom: "0"});
    }
  });

  $(document).on('click', function(e){
    if (!e.target.closest('.main-screen__form') && e.target.className.indexOf('datepicker') < 0 && $(window).width() < 768 ) {
      $('.main-screen__form input, .main-screen__form button').not('.main-screen__form__place').hide();
      $('.main-screen__form').css({bottom: "25px"});
    }
  })

  $('.main-screen__form__place').focus(function() {
      $(this).attr('placeholder', 'Italy, China, etc')
  }).blur(function() {
      $(this).attr('placeholder', 'Where do you want to go?')
  })
  
  $('.main-screen__form__duration').focus(function() {
      $(this).attr('placeholder', 'Number of days')
  }).blur(function() {
      $(this).attr('placeholder', 'Duration')
  })
  
  

  
  $('.main-screen__form__date').datepicker({
     minDate: new Date(),
     position: 'top right',
     language: 'en',
     autoClose: true 
  })
  
  
  
  
})

