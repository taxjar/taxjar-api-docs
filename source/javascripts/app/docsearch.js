(function() {
'use strict';

  // handle .tocify-wrapper overflow issue:
  // when docsearch dropdown is shown, overflow should be visible
  // when docsearch dropdown is hidden, overflow should be auto/hidden

  function resetOverflow() {
    $('.tocify-wrapper').css({
      'overflow-y': 'auto',
      'overflow-x': 'hidden'
    });
  }

  function createSearchInputs(/* ...selectors */) {
    $.each(arguments, function(_, selector) {
      docsearch({
        appId: '7ZBSP80X0K',
        apiKey: '2a9d77b7d7b611725a62fd9ffb522880',
        indexName: 'developers.taxjar.com',
        inputSelector: selector
      })
        .autocomplete.on('autocomplete:shown', function() {
          $('.tocify-wrapper').css({
            'overflow-y': 'visible',
            'overflow-x': 'visible'
          });
        })
        .on('autocomplete:closed', resetOverflow);

      $(selector).on('keyup', function(e) {
        if (e.keyCode === 27 || $(this).val() === '') {
          resetOverflow();
        }
      });
    });
  }

  createSearchInputs('#docsearch', '#docsearch-mobile');
})();
