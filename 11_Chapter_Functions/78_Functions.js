// Without functions — repeated logic

let score1 = 85;
let result1 = score1 >= 70 ? "pass" : "fail";
console.log(result1);

let score2 = 45;
let result2 = score2 >= 70 ? "pass" : "fail";
console.log(result2);



// Define

function getResult(score){
    return score >= 70 ? "pass" : "fail";
}

// Calling
getResult(85); // Pass
getResult(45); // Fail

console.log(getResult(85));
console.log(getResult(45));

// Console.log() V/s Return


// Console.log()
/**console.log is a tool for developer visibility. Think of it like a printer. 
 * When you send a document to a physical printer, the paper prints out so you 
 * can read it, but your computer doesn't get anything back to use in its calculations. */

// No Data Hand-off: It does not save or store the output anywhere in memory for other variables or functions to use.
// Returns undefined: console.log() itself is a function, and its return value is always undefined.
// Execution Continues: Code after a console.log line will keep running as normal.

// Return
/**return is how a function delivers its result to the outside world. 
 * Think of it like a vending machine. You put input in, and it hands
 *  you an actual item back that you can hold and use later. */

// Passes Data: It allows the output of a function to be stored in variables, passed into other functions, or used in mathematical expressions.
// Exits the Function Immediately: Any code placed directly after a return statement in the same scope will never execute.