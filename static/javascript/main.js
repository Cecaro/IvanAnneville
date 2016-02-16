$(document).ready(function() {
  $("#voix-dropdown").hover(function(){
    $(".dropdown-menu").css("display", "block");
  });
  $(".nav-dropdown").mouseleave(function(){
    $(".dropdown-menu").css("display", "none");
  });
});
