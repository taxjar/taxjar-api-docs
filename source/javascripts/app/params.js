(function (global) {
  'use strict';

  var params = {
    init: function() {
      $('#parameters + table').each(function() {
        $(this).find('td:contains("optional")').addClass('optional');
        $(this).find('td:contains("required")').addClass('required');
      });
    }
  };

  params.init();

})(window);