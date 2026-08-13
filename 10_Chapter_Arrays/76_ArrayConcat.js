// The .concat() method merges two or more arrays into a single new array. 
// It does not modify the original arrays.

let a = [1,2,3];
let b = [4,5];

let c = a.concat(b);
console.log(c); // Returns a brand-new array without altering existing ones.

// Immutable: Returns a brand-new array without altering existing ones.
// Multiple Inputs: Accepts multiple arrays or individual values:

console.log("-----------------------");
let d = [6,7];

let combined = a.concat(b,d, 99); // Combines 3 arrays in given order and adds extra element at end of array
console.log(combined);

console.log("-----------------------");
// Modern Alternative: Spread Operator (...)
let combinedbyspread = [...a, ...b, ...d, 96];
console.log(combinedbyspread);