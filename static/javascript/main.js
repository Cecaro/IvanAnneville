function toggle_visibility(id, e) {
  //loop through all the content filters to see if one is clicked. If one is, we filter the videos to only show the ones which have that tag
  //otherwise we display all the videos.
  //So if one is clicked, first we give all the videos the hidden class, then remove it from the ones with the tag

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
