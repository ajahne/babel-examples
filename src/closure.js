//state
const addAreaCode = (areaCode) => (number) => (areaCode + number);
const addSPringFieldAreaCode = addAreaCode('413-');
console.log(addSPringFieldAreaCode('212-7743'));

//privacy - TBD
