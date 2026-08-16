let str = "Hello JS!";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log("-------------:")
// Trim whitespace
// Removes the leading and trailing white space and line terminator characters from a string.
str.trim()
console.log(str.trim());

str.trimStart(); // Removes the leading white space and line terminator characters from a string.
str.trimEnd(); // Removes the trailing white space and line terminator characters from a string.


console.log("-------------:")
// Replace 
// replace(searchValue: string | RegExp, replaceValue: string):
// Replaces text in a string, using a regular expression or search string.

// A string containing the text to replace. When the searchValue is a RegExp, 
// all matches are replaced if the g flag is set (or only those matches at the beginning,
//  if the y flag is also present). Otherwise, only the first match of searchValue is replaced.


// Regex - is basically used to find a particular string in your own string in this case with the help of a pattern.
let msg = "Test: FAIL. Retry: FAIL. TryAgain: Fail";

console.log(`Message is: ${msg}`);

msg.replace("FAIL", "PASS");
msg.replaceAll("FAIL", "PASS");
msg.replace(/FAIL/g, "PASS");
msg.replace(/FAIL/y, "PASS")

console.log(msg.replace("FAIL", "PASS"));
console.log(msg.replaceAll("FAIL", "PASS"));
console.log(msg.replace(/FAIL/g, "PASS"));
//console.log(msg.replace(/FAIL/y, "PASS")); // research more about it




// Concatenation

"Hello" + " " + "World";
"Hello".concat(" ", "World");
`${"Hello"} ${"World"}`;

