(function (global) {
  'use strict';

  var table = $('.datatable').next('table');

  $('.datatable').next('table').DataTable({
    ajax: function (_, callback) {
      return $.ajax({
        url: 'https://api.taxjar.com/v2/categories',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + global.apiToken
        },
      }).done(function addFlags (res) {
        return callback({
          data: res.categories.map(function (category) {
            category.flags = flagList[category.product_tax_code] || flagList.default;
            return category;
          })
        });
      }).fail(function () {
        return callback({data: []});
      });
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
      zeroRecords: 'No matching categories found',
      emptyTable: '🔁Something went wrong!\nPlease reload the page.'
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

})(window);
