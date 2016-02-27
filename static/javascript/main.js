$(document).ready(function() {

  $('#logo-expander').click(function(){
    console.log("Clicked the cow");
    $('#logo-expander').addClass('animate_expander').delay(4000).queue(function(){
      $(this).removeClass('animate_expander').dequeue();
      if($('.nav-item').hasClass('hidden')){
      $('.nav-item').removeClass('hidden');
      }
      else{
        $('.nav-item').addClass('hidden');
      }
    });
  });
});
