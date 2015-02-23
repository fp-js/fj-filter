"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var filter = _interopRequire(require("./"));

var isOdd = function (x) {
  return x & 1;
};

it("fj-filter", function () {
  assert.deepEqual(filter(isOdd, [1, 2, 3]), [1, 3]);
  var getOdds = filter(isOdd);
  assert.deepEqual(getOdds([1, 2, 3]), [1, 3]);
});