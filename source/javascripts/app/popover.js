(function (global) {
  'use strict';

  var popover = {
    init: function() {
      $('[data-tooltip]').each(function() {
        new Drop({
          target: $(this).get(0),
          classes: 'drop-theme-taxjar-popovers',
          content: $(this).data('tooltip'),
          position: $(this).data('tooltip-position'),
          openOn: 'hover'
        });
      });

      $('h4[id="parameters"] + table td:contains("float")').each(function() {
        $(this).html('<span class="type-hint">' + $(this).text() + '</span>');
        new Drop({
          target: $(this).find('> span').get(0),
          classes: 'drop-theme-taxjar-popovers',
          content: 'When passing monetary values to our API, we will convert them to high-precision decimals. ' +
                   'SmartCalcs performs arbitrary-precision decimal arithmetic for accurately calculating sales tax.',
          position: 'top center',
          openOn: 'hover'
        });
      });
    }
  };

  popover.init();

})(window);
