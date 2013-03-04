$(window).scroll(function() {
  $('#nav-logo').toggle($(window).scrollTop() >= 158);
});