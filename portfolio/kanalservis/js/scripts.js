$("#owl-1").owlCarousel({
  items:1,
  loop:true,
  nav: true,
  dots: true,
  navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
});
$('[data-fancybox="gallery"]').fancybox({
	closeExisting: false,
    arrows: false,
    infobar: false,
  buttons: [
    'fullScreen',
    'close'
  ]
});
$("#owl-certificates").owlCarousel({
  items: 4,
  loop: true,
  responsive:{
    0:{
      items: 1
    },
    480:{
      items: 2
    },
    768:{
      items: 3
    },    
    1200:{
      items: 4
    }
  }
});
$("#owl-2").owlCarousel({
  items:1,
  loop:true,
  nav: true,
  navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
});

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.63893415, 37.62595110],
            zoom: 11,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([55.62414537, 37.62043003], {
            hintContent: 'КаналСервис'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/marker.png',
            iconImageSize: [48, 64],
            iconImageOffset: [-24, -64]
        });
    myMap.behaviors.disable("scrollZoom");
    myMap.geoObjects
        .add(myPlacemark);
});

//(function() {
//      var modal = document.getElementById('myModal');
//      var buttons = document.getElementsByClassName("myBtn")
//      var span = document.getElementsByClassName("close");
//
//      for (var i = 0; i < buttons.length; i++) {
//          buttons[i].onclick = function() {
//          var id = this.getAttribute('data-modal');
//          var modal = document.getElementById(id);
//          modal.style.display = 'block';
//        }
//      }
//
//      for (var i = 0; i < span.length; i++) {
//        span[i].onclick = function() {
//          var id = this.getAttribute('data-modal');
//          var modal = document.getElementById(id);
//          modal.style.display = 'none';
//        }
//      }
//
//      window.onclick = function(event) {
//        var isModal = (' ' + event.target.className + ' ').indexOf(' modal ') > -1;
//        if (isModal) {
//          event.target.style.display = "none";
//        }
//      }
//
//
//
//})();

$(".phone_mask").mask("+375(99)999-99-99");


var options = {
  offset: 80
}
var header = new Headhesive('.head',options);

$('.head__menu__burger').on('click', function(){
  $(this).toggleClass('active');
  $('.head__menu__nav').toggleClass('active');
  $('body').toggleClass('fixed');
  $('header').toggleClass('active');
});

$(window).scroll(function() {
var height = $(window).scrollTop(); 
if(height > 80){
$('.head__menu__nav').addClass('scroll-top');
} else{
$('.head__menu__nav').removeClass('scroll-top');
}

});

$('.head__menu__nav__link').on('click', function(){
  $('.head__menu__nav').toggleClass('active');
  $('.head__menu__burger').toggleClass('active');
  $('body').toggleClass('fixed');
  $('header').toggleClass('active');
});

var burger_nav = document.getElementsByClassName("head__menu__nav")[0];

window.onclick = function (e) {
  if(e.target == burger_nav) {
    $('.head__menu__nav').toggleClass('active');
    $('.head__menu__burger').toggleClass('active');
    $('body').toggleClass('fixed');
    $('header').toggleClass('active');
  }
};

  window.addEventListener("keydown", function(e){
    if (e.keyCode === 27 && !$('body').hasClass('modal')) {
      
    $('.head__menu__nav').removeClass('active');
    $('.head__menu__burger').removeClass('active');
    $('body').removeClass('fixed');
    $('header').removeClass('active');
    }
  });



// Логика отображения попапов

$('[data-modal]').on('click', function(){
  var className = $(this).data().modal;
  $('body').addClass('modal fixed ' + className);
  
  
})

$('div.modal').on('click', function(e){
  if ($(e.target).hasClass('modal') || $(e.target).hasClass('close')) {
    $('body').removeAttr('class');
  }
})

//////////////////////////////////////////////////////////////////////////