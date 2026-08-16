// Extracting SubStrings

let str = "Login_Test_Pass_001";

//.slic(start, end) -negative indexes supported ( start end-1)
// Returns a section of a string.
// start — The index to the beginning of the specified portion of stringObj.
// end -  If this value is not specified, the substring continues to the end of stringObj.

str.slice(0,5); // starts from index 0 - go till 5-1 ->  4
str.slice(11); // Starts from index 11 - go till the end of string
str.slice(-3); // -3 -> -1 

console.log(str.slice(0,5)); // (0,4) -> "Login"
console.log(str.slice(11)); // 
console.log(str.slice(-3)); // 

let testNumber = str.slice(-3); 

// subString(start, end) - no negatives (treats as 0)
// Returns the substring at the specified location within a String object.
str.substring(6, 10);

console.log("--------------:")
// at() for single chars
// Returns a new String consisting of the single UTF-16 code unit 
// located at the specified index.

str.at(0);   // "L"
str.at(-1);  // "1"
str.at();   // Points to 0 index

console.log(str.at(0));
console.log(str.at(-1));
console.log(str.at());

