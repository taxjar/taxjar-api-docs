(function (global) {
  'use strict';

  var clipboardButtons = {
    init: function() {
      var that = this;

      $('pre.highlight').each(function() {
        $(this).prepend('<button class="copy-btn">Copy</button>');

        var clipboard = new Clipboard(this.querySelector('.copy-btn'), {
          target: function(trigger) {
            return trigger.nextElementSibling;
          }
        });

        clipboard.on('success', function(e) {
          $(e.trigger).html('Copied');
          e.clearSelection();

          setTimeout(function() {
            $(e.trigger).html('Copy');
          }, 3000);
        });
      });
    }
  };

  clipboardButtons.init();

})(window);
