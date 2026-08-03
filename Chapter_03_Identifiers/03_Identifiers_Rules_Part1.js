// If you break  any of this rule JS will throw SyntaxError.
// Rule 1: Allowed Characters: Letters (a-z, A-Z), (0-9), (_), ($), and Unicode letters & characters

// Rule 2: Cannot Start with a Number

//let 1user = "John";  //  SyntaxError: Invalid or unexpected token
let user1 = "John";  //  Valid
let _user = "John";  //  Valid
let $user = "John";  //  Valid

// Rule 3: Case-Sensitivity
// Identifiers are strictly case-sensitive. myVariable, myvariable, and MYVARIABLE are three completely different identifiers.


// Rule 4: Reserved Keywords Cannot Be Used or future reserved words as identifier names.
// let const = 10;   // ❌ SyntaxError: Unexpected token 'const'
// let function = 5; // ❌ SyntaxError: Unexpected token 'function'

var a = 10;
console.log(a);

var $ = 10;
var _a = 23;
var pp = 34;

var ab123 = 23;
// var 45 = 34;
var _ = 10;

var Name = "pramod";
var name = "Amit";

// var pramod dutta = "hello";
var pramod_dutta = "hello";
var pramod$dutta = "hello";
var pramodu1232 = "hello";