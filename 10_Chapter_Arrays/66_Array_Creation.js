// Preffered way to create an array is, initialization with values.
let browsers = ["Chrome", "Firefox", "Edge", "Safari"];

// Another way to create an array is, using the Array constructor.
let scores = new Array(3); // This will create an array of length 3 with all elements as undefined.
scores[0] = "1";
console.log(scores.at(0)); // will print 1
console.log(scores.at(2)); // will print undefined
console.log(scores.length);// Will print 3


let scores2 = new Array(1, 2, 3); // This will create an array with elements 1, 2, and 3.

// AI Agents sometimes use any of these methods to create an array,
// but you have to add them propeyly into SKILL file or A RULE file to make them work properly.


let scores3 = Array.of(1,2,3,4);
// If you give 1 argument to new Array(), it will think as lenght of the array, but if you give 2 or more arguments, it will create an array with those elements.

let test = Array.of(1,2,3,4,5); // This will create an array with elements 1, 2, 3, 4, and 5.

let chars = Array.from("hello"); // it will break them into characters
console.log(chars);