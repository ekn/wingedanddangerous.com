$(window).scroll(function() {
  $('#banner-logo').toggle($(window).scrollTop() >= 158);
});