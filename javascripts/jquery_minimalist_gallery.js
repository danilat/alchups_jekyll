$.fn.minimalistGallery = function(targetImg) {
  this.each(function(){
    var href = $(this).attr('href');
    var alt = $(this).find('img').attr('alt');
    var title = $(this).find('img').attr('title');
    $(this).on('click', function(){
      $(targetImg).attr('src', href);
      $(targetImg).attr('alt', alt);
      $(targetImg).attr('title', title);
      return false;
    });
    $('<img/>')[0].src = href;
  });
};