﻿// Generated by IcedCoffeeScript 108.0.11
(function() {
  (function(win) {
    win.mergeUrl = function(root, relativeUrl) {
      var arr, item, result, tmp, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
      arr = root.split("/");
      result = "";
      if (relativeUrl && relativeUrl.indexOf("http") !== 0) {
        if (relativeUrl.indexOf("/") === 0) {
          _ref = arr.slice(0, 3);
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            item = _ref[_i];
            result = result + item + "/";
          }
          return result + relativeUrl.substring(1);
        } else if (relativeUrl.indexOf("../") === 0) {
          tmp = relativeUrl.split("../").length;
          _ref1 = arr.slice(0, +(-tmp - 1) + 1 || 9e9);
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            item = _ref1[_j];
            result = result + item + "/";
          }
          return result + relativeUrl.replace(/\.\.\//g, "");
        } else {
          _ref2 = arr.slice(0, -1);
          for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
            item = _ref2[_k];
            result = result + item + "/";
          }
          return result + relativeUrl;
        }
      } else {
        return relativeUrl;
      }
    };
    return win.setUrl = function() {
      var key, reg, url, value;
      url = location.href;
      key = arguments[0];
      value = arguments[1];
      if (arguments.length > 2) {
        url = arguments[0];
        key = arguments[1];
        value = arguments[2];
      }
      reg = new RegExp("" + key + "=[^&]*", "ig");
      if (reg.test(url)) {
        return url.replace(reg, "" + key + "=" + value);
      } else if (url.indexOf("?") > 0) {
        return "" + url + "&" + key + "=" + value;
      } else {
        return "" + url + "?" + key + "=" + value;
      }
    };
  })(window);

}).call(this);
