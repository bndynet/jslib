﻿// Generated by IcedCoffeeScript 108.0.11
(function() {
  $(function() {
    if ($ && $.fn.iCheck) {
      $("input:checkbox, input:radio").iCheck({
        checkboxClass: "icheckbox_minimal",
        radioClass: "iradio_minimal",
        increaseArea: "20%"
      });
    }
    if (typeof dialog !== "undefined") {
      dialog.set({
        title: "INFO",
        shade: [0.2, "#000"],
        shadeClose: false,
        shift: 0,
        maxmin: true,
        fix: true,
        btn: ["OK", "Cancel"],
        closeBtn: 1,
        tips: [1, '#f0ad4e'],
        tipsTime: 3000,
        loadingIcon: 1,
        loadingShade: [0.6, "#fff"],
        useAlertify: true
      });
    }
  });

}).call(this);
