(function (global) {
  'use strict';

  $('.datatable').next('table').DataTable({
    info: false,
    paging: true,
    pageLength: 30,
    order: [[ 1, 'asc' ]],
    lengthChange: false,
    // scrollY: 1000,
    // scrollCollapse: true,
    columnDefs: [
      { 'width': '20%', 'targets': 0 },
      { 'width': '15%', 'targets': 0 },
      { 'width': '15%', 'targets': 0 },
      { 'width': '50%', 'targets': 0 }
    ]
  });

})(window);
