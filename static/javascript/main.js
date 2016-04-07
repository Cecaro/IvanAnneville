function toggle_visibility(id, e) {
  e.preventDefault();
//first loop: through the filters, make array of all that are clicked
//hide all the videos
//second loop: through the videos, remove the fade out class when one of their class is in the array
var toBeFiltered = [];
  if($('a#'+id).hasClass("clicked")){
    $('span[id^="' + id + '"]').remove();
    $('a#'+id).removeClass("clicked");
  }
  else {
    $('a#'+id).append('<span class="glyphicon glyphicon-remove" id="'+ id + '"></span>');
    $('a#'+id).addClass("clicked");
  }
  $('.content-filter').each(function(i, obj) {
    if($(this).hasClass("clicked")){
      var $id = $(this).attr('id');
      //add the id of the this element to the array
      toBeFiltered.push($id);
    }
  });
  //now loop through the array and hide the elements which do not have one of the array element as their class
  console.log(toBeFiltered);
  $('.content-item').each(function(i, obj){
    var $currentItem = $(this);
    for(var j = 0; j < toBeFiltered.length; j++){
      if(!$currentItem[0].classList.contains(toBeFiltered[j])) {
        $(this).addClass("fade-out");
      }
      else {
        $(this).removeClass("fade-out");
      }
    }
  });

  if(toBeFiltered.length = 0){
    $('.content-item').each(function(i, obj){
      $(this).removeClass("fade-out");
    });
  }
}

$(".filter-btn").click(function(e) {
    e.preventDefault();
    $(this).find('span').toggleClass('glyphicon-chevron-right glyphicon-chevron-down');
    $(".filters").toggleClass('hidden ')
});
