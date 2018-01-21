'use strict';

//state
var addAreaCode = function addAreaCode(areaCode) {
  return function (number) {
    return areaCode + number;
  };
};
var addSPringfieldAreaCode = addAreaCode('413-');
console.log(addSPringfieldAreaCode('212-7743'));

//privacy
var counter = function counter() {
  var value = 0;
  var increment = function increment() {
    value++;
  };
  return {
    increment: increment
  };
};