(function (global) {
  'use strict';

  var table = $('.datatable').next('table').DataTable({
    ajax: function (_, callback) {
      $.ajax({
        url: 'https://api.taxjar.com/v2/categories',
        type: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + global.apiToken
        }
      }).done(addFlags(callback));
    },
    deferRender: true,
    columns: [
      {data: 'name'},
      {data: 'product_tax_code'},
      {data: 'flags'},
      {data: 'description'}
    ],
    autoWidth: false,
    info: false,
    paging: true,
    pageLength: 30,
    order: [[ 1, 'asc' ]],
    lengthChange: false,
    columnDefs: [
      { width: '25%', targets: 0 },
      { width: '15%', targets: 1 },
      { width: '10%', targets: 2 },
      { width: '50%', targets: 3, className: 'category-desc' }
    ],
    language: {
      search: '',
      searchPlaceholder: 'Search categories...',
      zeroRecords: 'No matching categories found'
    }
  });

  table.on('page.dt', function () {
    $([document.documentElement, document.body]).animate({
      // Note: '#get-list-tax-categories' scrolls too far up on mobile so using '#request'
      scrollTop: $('#request').offset().top
    }, 'slow');
  });

  var flagList = {
    default: '<span class="flag-icon flag-icon-us drop-theme-taxjar-popovers drop-target" data-tooltip="United States" data-tooltip-position="top center"></span>'
  };

  function addFlags(callback) {
    return function (res) {
      callback({
        data: res.categories.map(function (category) {
          category.flags = flagList[category.product_tax_code] || flagList.default;
          return category;
        })
      });
    };
  };

})(window);
