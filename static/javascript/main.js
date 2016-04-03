function toggle_visibility(id, e) {
//first loop: through the filters, make array of all that are clicked
//hide all the videos
//second loop: through the videos, remove the fade out class when one of their class is in the array
  e.preventDefault();
  if($('a#'+id).hasClass("clicked")){
    $('span[id^="' + id + '"]').remove();
    $('a#'+id).removeClass("clicked");
    $('.'+id).removeClass("fade-out");
  }
  else {
    $('a#'+id).append('<span class="glyphicon glyphicon-remove" id="'+ id + '"></span>');
    $('a#'+id).addClass("clicked");
    $('.'+id).addClass("fade-out");
  }
}

$(".filter-btn").click(function(e) {
    e.preventDefault();
    $(this).find('span').toggleClass('glyphicon-chevron-right glyphicon-chevron-down');
    $(".filters").toggleClass('hidden ')
});
