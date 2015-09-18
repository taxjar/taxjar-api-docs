(function (global) {
  'use strict';

  var popover = {
    init: function() {
      $('[data-tooltip]').each(function() {
        var drop = new Drop({
          target: $(this).get(0),
          classes: 'drop-theme-taxjar-popovers',
          content: $(this).data('tooltip'),
          position: $(this).data('tooltip-position'),
          openOn: 'hover'
        });
      });
    }
  };

  popover.init();

})(window);