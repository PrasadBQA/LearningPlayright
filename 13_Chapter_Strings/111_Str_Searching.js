// Searching and Checking

let url = "https://vwo.com/ecommerce-ab-testing/";

// includes()
/**Returns true if searchString appears as a substring of 
 * the result of converting this object to a String, at 
 * one or more positions that are greater than or equal to position;
 *  otherwise, returns false. */
url.includes("ecommerce");
url.includes("Dev");
url.includes("Ecommerce");

console.log(url.includes("ecommerce"));
console.log(url.includes("Dev"));
console.log(url.includes("Ecommerce")); // case-sensitive

console.log("---------------:")

// StartsWith / endsWith
url.startsWith("https"); // true
url.startsWith("http://"); // false
url.endsWith("testing/"); // true

console.log(url.startsWith("https"));
console.log(url.startsWith("http://"));
console.log(url.endsWith("testing/"));

console.log("---------------:")

// indexOf / lastIndexOf
// Returns the position of the first occurrence of a substring, 
// or -1 if it is not present.

url.indexOf("a");
url.indexOf("z");
console.log(url.indexOf("a"));
console.log(url.indexOf("z"));

url.lastIndexOf("a");
url.lastIndexOf("z");
url.lastIndexOf("ing");
console.log(url.lastIndexOf("o"));
console.log(url.lastIndexOf("y"));
console.log(url.lastIndexOf("ing"));