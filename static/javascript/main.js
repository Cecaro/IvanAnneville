$(document).ready(function() {
    // this will get the full URL at the address bar
    var url = (window.location.pathname);
    switch(url) {
    case "/audio/":
        url = "A écouter";
        break;
    case "/videos/":
        url = "A regarder";
        break;
    case "/quisuisje/":
        url = "Qui suis-je ?";
        break;
    case "/contactezmoi/":
        url = "Contactez-moi";
        break;
    default:
        url = "Accueil";
      }
    // passes on every "a" tag
    $(".nav-item a").each(function() {
      var $anchorText = $(this).html();
            // checks if its the same on the address bar
        if(url == ($anchorText)) {
            $(this).addClass("active");
        }
    });
});

function toggle_visibility(id, e) {
  e.preventDefault();

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
      toBeFiltered.push($id);
    }
  });

  $('.content-item').each(function(i, obj){
    var $currentItem = $(this);
    for(var j = 0; j < toBeFiltered.length; j++){
      if(!$currentItem[0].classList.contains(toBeFiltered[j])) {
        $(this).addClass("fade-out");
      }
      else {
        $(this).removeClass("fade-out");
        break;
      }
    }
  });

  if(toBeFiltered.length == 0){
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
