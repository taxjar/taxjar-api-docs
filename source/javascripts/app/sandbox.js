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
      var apiToken = $('#api-token').val();
      var requestBodyTitle = button.parent().nextAll('blockquote').find('p:contains("Request Body")').first();
      var responseBodyTitle = button.parent().nextAll('blockquote').find('p:contains("Response Body")').first();

      if (!apiToken.length) {
        alert('Please enter your API token.');
        return;
      }

      if (this.requestPath) {
        this.resetRequest(this.requestPath, this.editor);
        if (button.parent().next('pre').text() == this.requestPath.text()) {
          return; 
        }
      }

      this.requestPath = button.parent().next('pre');
      this.requestBody = requestBodyTitle.parent().next();
      this.responseBody = responseBodyTitle.parent().next();

      this.requestPath.attr('contenteditable', true);

      this.requestBody.after('<blockquote class="sandbox__actions">'
        + '<button class="sandbox__button sandbox__button--send">Send Request</button>'
        + '<button class="sandbox__button sandbox__button--cancel">Cancel</button>'
        + '</blockquote>');
      this.requestBody.after('<blockquote class="CodeMirror-block"><textarea>' + this.requestBody.text() + '</textarea></blockquote>');
      this.responseBody.after('<pre class="highlight json sandbox__response">Awaiting your data...</pre>');

      this.requestBody.hide();
      this.responseBody.hide();

      this.editor = CodeMirror.fromTextArea(this.requestBody.next('blockquote').find('textarea')[0], {
        value: this.requestBody.text(),
        mode: {
          name: 'javascript',
          json: true
        }
      });

      $('.sandbox__button--send').on('click', function(e) {
        var request = this.requestPath.text().split(' ');
        this.sendRequest(apiToken, request, this.editor.getValue());
        e.preventDefault();
      }.bind(this));

      $('.sandbox__button--cancel').on('click', function(e) {
        this.resetRequest();
        e.preventDefault();
      }.bind(this));
    },
    resetRequest: function() {
      // Remove CodeMirror, textarea, sandbox actions
      this.editor.toTextArea();
      this.requestBody.next('.CodeMirror-block').remove();
      this.requestBody.next('.sandbox__actions').remove();

      // Remove contenteditable
      this.requestPath.removeAttr('contenteditable');

      // Remove response message
      this.responseBody.next('pre').remove();

      // Show original request and response
      this.requestBody.show();
      this.responseBody.show();

      delete this.requestPath;
    },
    sendRequest: function(apiToken, request, requestVal) {
      var requestType = request[0];
      var requestUrl = request[1];
      var requestData = JSON.parse(requestVal);
      var that = this;

      requestUrl = requestUrl.replace('https://api.taxjar.com', 'http://tjapi-test.herokuapp.com');

      that.responseBody.next('.sandbox__response').html('Sending your request...');

      $.ajax(requestUrl, {
        type: requestType,
        data: requestData,
        headers: {
          'Authorization': 'Bearer ' + apiToken
        },
        error: function(xhr, status, err) {
          var res = JSON.stringify(JSON.parse(xhr.responseText), null, 2);
          that.responseBody.next('.sandbox__response').html(res);
        },
        success: function(data) {
          var res = JSON.stringify(data, null, 2);
          that.responseBody.next('.sandbox__response').html(res);
        }
      });
    }
  };

  sandbox.init();

})(window);