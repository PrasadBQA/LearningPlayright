// String Properties & Basic Access

let a = "abcdefghij\nklmnop";
let b = 'abcdefghij"k"lm\nnop';

let str = "Hello Js";
console.log(str.length); // length starts with 1
console.log(str[0]);    // index starts with 0
console.log(str[7]);
console.log(str[11]); // Out-of-Range: undefined
//console.log(str[]); //SyntaxError

console.log(str[-1]);

console.log("-----------------:")
// charAt()
str.charAt(); // charAt() points at index 0 by default
str.charAt(0);


console.log(str.charAt());  // H
console.log(str.charAt(0)); // H

console.log("-----------------:")
// charCodeAt()
// Returns the Unicode value of the character at the specified location.

str.charCodeAt(0);
str.charCodeAt(); // Point to 0 index by default
str.charCodeAt(12); //If there is no character at the specified index, NaN is returned.

console.log(str.charCodeAt(0)); // 72 -> is the Unicode and ASCII value of `H`
console.log(str.charCodeAt());  // 72
console.log(str.charCodeAt(12));