(function (global) {
  'use strict';

  $('.menu a[href="/api' + window.location.pathname + '"]').addClass('active');

})(window);