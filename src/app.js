let message = "Hello World";
{
  let message = "Hello Block";
  console.log(message);
}
console.log(message);

//for loop with let
for (let i = 0; i < 5; i++) {
  console.log('logging with let %o', i);
}

//will trigger an error:
//console.log('outside of the loop, i is %o', i);

//lets try some contants
{
  const a = 2;
  console.log(a);
  // a = 10; NOTE: will cause a syntax error
}
