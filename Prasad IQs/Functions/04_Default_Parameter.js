function calc(a, b){
    return (2* (a + b));
}
console.log(calc(2, 3));
console.log(calc()); // prints NaN, bcz we are not passing parameters.
// a -> undefined, b -> undefined 2 * (undefined + undefined) = NaN
calc(3); // NaN

console.log("-----------------------:");

// if someone in team forgot to pass any one parameter, it'll give NaN
// So, here "Default Parameters" will help to overcome this scenario
function calc2(a, b = 0){
    return (2 *(a + b));
}

console.log(calc2(2)); // 2 * (2 + 0), will take b as default parameter
console.log(calc2(2, 3)); // 2 * (2 + 3)
console.log(calc2(0)); // NaN

// You get NaN (Not a Number) in JavaScript when an arithmetic operation involves 
// a value that cannot be converted into a valid number, such as undefined.

// Most common reasons this happens with functions and calculations:
// 1. Missing Arguments:
// 2. Forgetting to Return a Value:
// 3. Operating on Invalid Data Types:

// 2) 

function getValue() {
  let result = 0;
  // Missing: return result;
}

let total = 2 * (getValue() + 0);// NaN

// 3) 

let a; // Currently undefined
let result = 2 * (a + 0); // Returns NaN

