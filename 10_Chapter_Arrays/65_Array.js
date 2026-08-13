// Accessing an element at an index that doesn't exist in the array
// We don't have array element index out of bounds error in JavaScript.
// Instead, it will return undefined if you try to access an index that doesn't exist in the array.

let arr = [2,3,4,5];
console.log(arr[5]); // This will print undefined because there is no element at index 5 in the array.


let testresults = ["pass", "fail", "pass", "skip"];
let mixedArray = [1, "hello", true, null, undefined, {name: "John"}, [1,2,3]]; // An array can contain elements of different data types.