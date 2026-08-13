let fruit = [];
let browser = ["Chrome", "Firefox", "Edge", "Safari"];
console.log(browser[0]); // Indexing starts from 0, so the first element of the array is "Chrome".
console.log(browser.at(-1)); //at() method is used to access the last element of the array.
console.log(browser.length); // length starts from 1, so the length of the array is 4.
console.log("Length of fruit array: " + fruit.length); // length of an empty array is 0.



console.log(browser[-1]); 
// The above line will return undefined because negative indexing is not supported in JavaScript arrays.
// to access array element from the end, you can use the at() method or calculate the index using the length of the array.
// at() method is a new method introduced in ECMAScript 2022 (ES13) that allows you to access elements from the end of an array using negative indices.

// For negative indexed access, use the at() method.
console.log(browser.at(-2)); // This will return "Edge", which is the second last element of the array.

console.log(browser.at(0));  // at() method can also be used to access elements from the start of the array using positive indices. This will return "Chrome", which is the first element of the array.
// Difference between [] and at() method:
// 1. The [] operator does not support negative indexing, while the at() method supports positive and negative indexing.
// 2. The [] operator is more commonly used and has been available in JavaScript for a long time, while the at() method is a newer addition to the language (introduced in ES13).
// 3. The at() method can be more readable when accessing elements from the end of an array, especially when using negative indices.
// 4. The at() method can be used with strings as well, while the [] operator is primarily used for arrays.
// 5. The at() can be used for both positive and negative indexing.