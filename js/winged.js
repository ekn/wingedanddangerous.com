maybeShowLogo = function() {
    var w = $(window);
	$("#nav-logo").toggle((w.scrollTop() >= 70) && (w.width() > 700));
}

$(window).scroll(maybeShowLogo);
$(window).resize(maybeShowLogo);

maybeShowLogo();