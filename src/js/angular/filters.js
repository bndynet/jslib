﻿// Generated by IcedCoffeeScript 108.0.11
(function() {
  app.filter("appDate", function() {
    return function(input) {
      if (moment(input).isValid()) {
        if (moment.locale() === "zh-cn") {
          return moment(input).format("YYYY-M-D");
        }
        return moment(input).format("l");
      }
      return "";
    };
  });

  app.filter("appDateTime", function() {
    return function(input) {
      if (moment(input).isValid()) {
        if (moment.locale() === "zh-cn") {
          return moment(input).format("YYYY-M-D HH:mm:ss");
        }
        return moment(input).format("lll");
      }
      return "";
    };
  });

  app.filter("appFullDateTime", function() {
    return function(input) {
      if (moment(input).isValid()) {
        if (moment.locale() === "zh-cn") {
          return moment(input).format("llll");
        }
        return moment(input).format("llll");
      }
      return "";
    };
  });

}).call(this);