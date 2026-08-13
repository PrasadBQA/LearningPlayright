let url = "https://app.vwo.com";
let status = 'pass';
let message = `Test completed in %{320}ms`;


// single quotes
let a = 'Hello JS';


// double quotes
let b = "Hello JS!";

// Template literals (backsticks) - allows expressions & multiline
let name1 = "Alice";
let msg = `Hello, ${name1}! 2 + 2 = ${2 + 2}`;
console.log(msg);

// Multiple line string
let report = `
            Test: Login
            Status: Pass
            Duration: 320ms
            `;

// You can convert a number into string using String()
// anything you pass a "agument" into "String(argument)" will become String
console.log("---------------------------")
console.log(String(200));
String(true); // true will be converted into string: "true"
String(null); // null will be converted into string: "null"
String([1,2]); // array will be converted into string: "[1,2]"




