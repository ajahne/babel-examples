'use strict';

var add = function add(x, y) {
  return x + y;
};

var addFat = function addFat(x, y) {
  return x + y;
};

var return12 = function return12() {
  return 12;
};

var multiply = function multiply() {
  var x = 5;
  var y = 10;
  return x * y;
};

var sayName = function sayName(name) {
  return console.log(name);
};

sayName('foo');
