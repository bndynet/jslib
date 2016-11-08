﻿// Generated by IcedCoffeeScript 108.0.11
(function() {
  (function(window) {
    var Dialog;
    if (typeof jQuery === 'undefined') {
      throw new Error('Dialog component requires jQuery');
    }
    Dialog = function() {
      this.VERSION = "1.0.0";
      this.options = {};
      return this.init();
    };
    Dialog.prototype = {
      init: function() {
        if (!$) {
          console.error("jQuery Required");
        }
      },
      _wrapSize: function(size) {
        if (size && $.isArray(size)) {
          if ($.isNumeric(size[0])) {
            size[0] = size[0] + 'px';
          }
          if ($.isNumeric(size[1])) {
            size[1] = size[1] + 'px';
          }
        } else {
          size = ['50%', '50%'];
        }
        return size;
      },
      set: function(options) {
        return this.options = $.extend({}, this.options, options);
      },
      alert: function(msg, callback) {
        var options, root;
        root = this;
        options = $.extend({}, root.options, {
          btn: root.options.btn[0]
        });
        return layer.alert(msg, options, callback);
      },
      success: function(msg, callback) {
        var options, root;
        root = this;
        options = $.extend({}, root.options, {
          icon: 1,
          btn: root.options.btn[0]
        });
        return layer.alert(msg, options, callback);
      },
      warn: function(msg, callback) {
        var options, root;
        root = this;
        options = $.extend({}, root.options, {
          icon: 0,
          btn: root.options.btn[0]
        });
        return layer.alert(msg, options, callback);
      },
      error: function(msg, callback) {
        var options, root;
        root = this;
        options = $.extend({}, root.options, {
          icon: 2,
          btn: root.options.btn[0]
        });
        return layer.alert(msg, options, callback);
      },
      confirm: function(msg, fnYes, fnCancel) {
        var options, root;
        root = this;
        options = $.extend({}, root.options, {
          icon: 3
        });
        return layer.confirm(msg, options, function(index) {
          if (fnYes) {
            fnYes(index);
          }
          return layer.close(index);
        }, function(index) {
          if (fnCancel) {
            return fnCancel(index);
          }
        });
      },
      prompt: function(title, fnYes, formType) {
        var options, root;
        root = this;
        options = $.extend({}, root.options, {
          title: title,
          formType: formType || 1
        });
        return layer.prompt(options, fnYes);
      },
      tip: function(msg, selector, options) {
        return layer.tips(msg, selector, $.extend({}, this.options, {
          shade: false,
          btn: null,
          closeBtn: 0,
          time: this.options.tipsTime
        }));
      },
      show: function(selector, title, size) {
        var options, root;
        root = this;
        if (!size || !$.isArray(size)) {
          size = ['50%', '50%'];
        }
        options = $.extend({}, root.options, {
          type: 1,
          btn: null,
          area: root._wrapSize(size),
          content: $(selector)
        });
        return layer.open(options);
      },
      iframe: function(url, title, size) {
        var options, root;
        root = this;
        if (!size || !$.isArray(size)) {
          size = ['50%', '50%'];
        }
        options = $.extend({}, root.options, {
          type: 2,
          btn: null,
          area: root._wrapSize(size),
          content: url
        });
        return layer.open(options);
      },
      loading: function(selector) {
        var options, root;
        root = this;
        if (selector) {
          $(selector).each(function() {
            var eleLoading;
            $(this).children().hide();
            if ($(this).find('.bn-dialog-loading').length > 0) {
              return $(this).find('.bn-dialog-loading').show();
            } else {
              eleLoading = $('<div class="bn-dialog-loading"><i class="icon fa fa-spin fa-spinner"></i><span class="text">Loading...</span></div>');
              return $(this).append($(eleLoading));
            }
          });
        } else {
          options = $.extend({}, root.options, {
            btn: null,
            shade: root.options.loadingShade
          });
          layer.load(root.options.loadingIcon, options);
        }
      },
      loaded: function(selector) {
        if (selector) {
          $(selector).each(function() {
            $(this).children().show();
            return $(this).find('.bn-dialog-loading').remove();
          });
        } else {
          layer.closeAll("loading");
        }
      }
    };
    return window.dialog = new Dialog();
  })(window);

}).call(this);
