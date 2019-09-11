$(function(){
	$('.collapse').on('show.bs.collapse', function () {
      $(this).prev().find('.fa').removeClass('fa-plus-circle').addClass('fa-minus-circle')
    });
	$('.collapse').on('hide.bs.collapse', function () {
      $(this).prev().find('.fa').removeClass('fa-minus-circle').addClass('fa-plus-circle')
    });
  
  $('#myForm').validator({    
   feedback: {
   success: 'fa fa-check-circle',
   error: 'fa fa-times-circle'
   }
  });
  
   $('.form-sel').select2({
     minimumResultsForSearch: Infinity
   });
  
  new WOW({
    offset: 100
  }).init();
});