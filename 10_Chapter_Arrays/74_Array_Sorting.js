// Function expression with const, arrow function, and hoisting

getname(); // Output: ReferenceError: Cannot access 'getname' before initialization
console.log(x);
console.log(getname());
var x = 10;
const getname = () => {
    console.log("Hello JS");
}


// Function expression with var, arrow function, and hoisting

getbill();  // Output: TypeError: getbill is not a function
console.log(getbill());

var getbill = () =>{
    console.log("Hello JS");
}


// Function expression with let, arrow function, and hoisting

getlet();  // Output: ReferenceError: Cannot access 'getlet' before initialization
console.log(getlet());

let getlet = () =>{
    console.log("Hello JS");
}
