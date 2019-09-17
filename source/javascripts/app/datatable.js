(function (global) {
  'use strict';

  $('.datatable').next('table').DataTable({
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

})(window);
