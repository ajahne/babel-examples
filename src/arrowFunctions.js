let add = function(x,y) {
  return x + y;
}

let addFat = (x,y) => x + y;

let return12 = () => 12;

let multiply = () => {
  let x = 5;
  let y = 10;
  return x * y;
};

let sayName = (name) => {console.log(name);}

//the above can be writtern without the () around "name"
let sayName2 = name => {console.log(name);}

sayName('foo');
