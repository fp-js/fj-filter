# fj-filter

[![Build Status](https://travis-ci.org/fp-js/fj-filter.svg)](https://travis-ci.org/fp-js/fj-filter) [![npm version](https://badge.fury.io/js/fj-filter.svg)](http://badge.fury.io/js/fj-filter)
> Filter FP style.

## Installation

`npm install fj-filter --save`

## Usage

```js
var filter = require('fj-filter');

let isOdd = (x) => x & 1;

filter(isOdd, [1,2,3]) // [1,3]

let getOdds = filter(isOdd);

getOdds([1,2,3]) // [1,3]
```
