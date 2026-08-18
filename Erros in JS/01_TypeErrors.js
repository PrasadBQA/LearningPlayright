// A TypeError occurs in JavaScript when an operation cannot be performed 
// because a value is of the wrong data type.


//Common TypeError Examples

// Calling a non-function (Attempting to execute something that isn't a function)
const user = { name: "Alex" };
user(); // TypeError: user is not a function



// Accessing properties of null or undefined 
// (Trying to read a property on a value that doesn't exist)
let data = null;
console.log(data.length); // TypeError: Cannot read properties of null (reading 'length')



// Modifying an immutable value (Attempting to reassign a const variable)
const maxLimit = 100;
maxLimit = 200; // TypeError: Assignment to constant variable.


// Using array methods on non-arrays (Calling array-specific methods on incompatible types)
const age = 25;
age.map(x => x * 2); // TypeError: age.map is not a function