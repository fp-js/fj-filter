"use strict";

var curry2 = require("fj-curry").curry2;


var filter = function (fn, list) {
    var index = -1,
        listLen = list.length,
        result = [];

    while (++index < listLen) {
        if (fn(list[index])) {
            result[result.length] = list[index];
        }
    }

    return result;
};

module.exports = curry2(filter);