maybeShowLogo = function() {
    var w = $(window);
	$("#nav-logo").toggle((w.scrollTop() >= 158) && (w.width() > 778));
}

$(window).scroll(maybeShowLogo);
$(window).resize(maybeShowLogo);

maybeShowLogo();