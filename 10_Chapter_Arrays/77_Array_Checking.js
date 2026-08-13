// .isArray() is a static method on the built-in Array object.
// It determines whether a given value is a JavaScript Array.

// Syntax : Array.isArray(value), Parameter: value — The value to check. Returns "true" or "false"
console.log(".isArray() starts: -----------------------");

let result = Array.isArray([1,2,3]);
let result2 = Array.isArray([]);
let result3 = Array.isArray(new Array(5));

console.log(result);
console.log(result2);
console.log(result3);


// Evaluates false
let result4 = Array.isArray("a");
console.log(result4);

Array.isArray({});
Array.isArray("Hello");
Array.isArray(123);
Array.isArray(null);
Array.isArray(undefined);
Array.isArray({ length: 2, 0: "a", 1: "b" }); // Array-like object, but not an array

console.log(".every() starts: -----------------------");

// .every() is an instance method on array prototypes. 
// It tests whether all elements in the array satisfy the condition defined by a testing function.

/**It iterates over the array elements and runs your callback function on each element. 
 * As soon as the callback returns a falsy value for any element, 
 * .every() stops iterating (short-circuits) and immediately returns false. 
 * If every element passes the condition, it returns true. */

console.log([22,25,26,30].every(s => s >= 15));// true
console.log([15,20,22,23,26,29].every(s => s >= 20)); // false

let scores = [85,92,70,90];
let allpass = scores.every(score => score >=80); // false
console.log(allpass);

console.log(".some() starts: -----------------------");

// .some() is an instance method on array prototypes.
// It tests whether at least one element in the array satisfies the condition defined 
// by a testing function.
/**It iterates over the array elements and runs your callback function on each element.
 *  As soon as the callback returns a truthy value for any element, .some() stops iterating
 *  (short-circuits) and immediately returns true. If it checks all elements and none pass,
 *  it returns false. */
console.log([80,90,60].some( s => s<70)); // true
console.log([80,90,85].some( s => s<70)); // false

const numbers = [1,3,5,8,9];
const hasEven = numbers.some(num => num % 2 === 0); // false
console.log(hasEven);