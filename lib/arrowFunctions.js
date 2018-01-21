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
  console.log(name);
};

//the above can be writtern without the () around "name"
var sayName2 = function sayName2(name) {
  console.log(name);
};

sayName('foo');