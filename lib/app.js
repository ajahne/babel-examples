"use strict";

var message = "Hello World";
{
  var _message = "Hello Block";
  console.log(_message);
}
console.log(message);

//for loop with let
for (var i = 0; i < 5; i++) {
  console.log('logging with let %o', i);
}

//will trigger an error:
//console.log('outside of the loop, i is %o', i);

//lets try some contants
{
  var a = 2;
  console.log(a);
  // a = 10; NOTE: will cause a syntax error
}