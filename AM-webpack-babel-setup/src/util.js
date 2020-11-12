// Named exports
// Default exports

console.log('utility');

export const add = (a, b) => {
  return a + b;
};

export const ime = 'alen';



console.log('util', add(3, 4));


//  bez export, default na kraju
const square = (x) => {
  return x * x;
};


// default exports
export default square
