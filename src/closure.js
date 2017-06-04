//state
const addAreaCode = (areaCode) => (number) => (areaCode + number);
const addSPringfieldAreaCode = addAreaCode('413-');
console.log(addSPringfieldAreaCode('212-7743'));

//privacy - TBD
