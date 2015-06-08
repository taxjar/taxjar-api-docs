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
      var buttonAnchor = button.parent().prevAll('[data-unique]').first();
      var apiToken = $('#api-token').val();
      var requestBodyTitle = button.parent().next().next(':contains("Request Body")');
      var responseBodyTitle = (requestBodyTitle && requestBodyTitle.length) ? requestBodyTitle.next().next(':contains("Response Body")') : button.parent().next().next(':contains("Response Body")');
      var actionButtons = '<blockquote class="sandbox__actions">'
          + '<button class="sandbox__button sandbox__button--send">Send Request</button>'
          + '<button class="sandbox__button sandbox__button--cancel">Cancel</button>'
          + '</blockquote>';

      if (!apiToken.length) {
        alert('Please enter your API token.');
        return;
      }

      if (this.requestPath) {
        var oldEndpoint = this.requestPath.text();
        this.resetRequest(this.requestPath, this.editor);
        if (button.parent().next('pre').text() == oldEndpoint) return;
      }

      $('.tocify-item[data-unique="' + buttonAnchor.attr('data-unique') + '"]').trigger('click');

      this.requestPath = button.parent().next('pre');
      this.requestBody = requestBodyTitle.next();
      this.responseBody = responseBodyTitle.next();

      this.requestPath.clone().insertAfter(this.requestPath).attr('contenteditable', true);

      if (this.requestBody.length) {
        this.requestBody.after(actionButtons);
        this.requestBody.after('<blockquote class="CodeMirror-block"><textarea>' + this.requestBody.text() + '</textarea></blockquote>');
      } else {
        this.requestPath.next().after(actionButtons);
      }

      this.responseBody.after('<pre class="highlight json sandbox__response">Awaiting your data...</pre>');

      this.requestPath.hide();
      this.requestBody.hide();
      this.responseBody.hide();

      if (this.requestBody.length) {
        this.editor = CodeMirror.fromTextArea(this.requestBody.next('blockquote').find('textarea')[0], {
          value: this.requestBody.text(),
          mode: {
            name: 'javascript',
            json: true
          }
        });
      }

      $('.sandbox__button--send').on('click', function(e) {
        var request = this.requestPath.text().split(' ');
        var requestVal = '';
        if (this.editor) requestVal = this.editor.getValue();
        this.sendRequest(apiToken, request, requestVal);
        e.preventDefault();
      }.bind(this));

      $('.sandbox__button--cancel').on('click', function(e) {
        this.resetRequest();
        e.preventDefault();
      }.bind(this));
    },
    resetRequest: function() {
      // Remove CodeMirror, textarea, sandbox actions
      if (this.editor) this.editor.toTextArea();
      $('.CodeMirror-block').remove();
      $('.sandbox__actions').remove();

      // Remove request path and response message
      this.requestPath.next('pre').remove();
      this.responseBody.next('pre').remove();

      // Show original request and response
      this.requestPath.show();
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