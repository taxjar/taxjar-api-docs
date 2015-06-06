(function (global) {
  'use strict';

  var sandbox = {
    init: function() {
      $('blockquote > p:contains("Request Path")').each(function() {
        var requestContainer = $(this).parent().next('pre');
        var request = requestContainer.text().split(' ');

        if (request[0] && request[1]) {
          $(this).after('<button class="sandbox__button sandbox__button--demo">Try It Out</button>');
        }
      });

      $('.sandbox__button--demo').on('click', function(e) {
        this.handleDemo(e);
        e.preventDefault();
      }.bind(this));
    },
    handleDemo: function(e) {
      var button = $(e.target);
      var requestPath = button.parent().next('pre');
      var requestBodyTitle = button.parent().nextAll('blockquote').find('p:contains("Request Body")').first();
      this.requestBody = requestBodyTitle.parent().next();
      var responseBodyTitle = button.parent().nextAll('blockquote').find('p:contains("Response Body")').first();
      this.responseBody = responseBodyTitle.parent().next();

      requestPath.attr('contenteditable', true);

      this.requestBody.after('<blockquote><button class="sandbox__button sandbox__button--send">Send Request</button></blockquote>');
      this.requestBody.after('<blockquote class="CodeMirror-block"><textarea>' + this.requestBody.text() + '</textarea></blockquote>');
      this.requestBody.hide();

      this.responseBody.html('Awaiting your data...');

      var editor = CodeMirror.fromTextArea(this.requestBody.next('blockquote').find('textarea')[0], {
        value: this.requestBody.text(),
        mode: {
          name: 'javascript',
          json: true
        }
      });

      $('.sandbox__button--send').on('click', function(e) {
        var endpoint = button.parent().next('pre');
        var request = endpoint.text().split(' ');
        this.sendRequest(request, editor.getValue());
        e.preventDefault();
      }.bind(this));
    },
    sendRequest: function(request, requestBody) {
      var requestType = request[0];
      var requestUrl = request[1];
      var requestData = JSON.parse(requestBody);
      var that = this;

      requestUrl = requestUrl.replace('https://api.taxjar.com', 'http://tjapi-test.herokuapp.com');

      $.ajax(requestUrl, {
        type: requestType,
        data: requestData,
        headers: {
          'Authorization': 'Bearer 757ff81af786d517d4e0cdf9b0b05c7f'
        },
        error: function(xhr, status, err) {
          var res = JSON.stringify(JSON.parse(xhr.responseText), null, 2);
          that.responseBody.html(res);
        },
        success: function(data) {
          var res = JSON.stringify(data, null, 2);
          that.responseBody.html(res);
        }
      });
    }
  };

  sandbox.init();

})(window);