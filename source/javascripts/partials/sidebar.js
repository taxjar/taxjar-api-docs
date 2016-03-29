(function($) {
  var content = $('.wrap__content');
  var sidebar = $('.wrap__sidebar');

  if (!sidebar.length) return;

  $('.navbar-toggle').click(function(e) {
    e.preventDefault();
    sidebar.parent().toggleClass('collapsed');

    if (sidebar.parent().hasClass('collapsed')) {
      setTimeout(function() {
        content.one('click', function() {
          sidebar.parent().removeClass('collapsed');
        });
      }, 1000);
    }
  });

  $(window).resize(function() {
    var viewportWidth = $(window).outerWidth();

    if (viewportWidth > 1140) {
      sidebar.parent().removeClass('collapsed');
    }
  });
})(jQuery);