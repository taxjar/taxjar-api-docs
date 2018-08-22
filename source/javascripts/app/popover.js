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
          content: 'When passing float values to our API, we will convert them to BigDecimal for internal processing. ' +
                   'BigDecimal provides arbitrary-precision floating point decimal arithmetic for accurately calculating monetary values.',
          position: 'top center',
          openOn: 'hover'
        });
      });
    }
  };

  popover.init();

})(window);
