// JS Allows you to create a function to define a function within another function.
// This is the basic thing towards understanding the concept of "CLOSURES".
// The Concept of CLOSURE in JS functions = The Understaning of Nested-Functions + Function Scope

function outer(){
    console.log("Inside Outer function: ");
    function inner(){
        console.log("Inside inner function: ");
    }

    inner();
    // This Nested function as I have defined inside of Outer-function
    // I have to call inner-function inside the Outer-function itself.
}

outer(); 
// This does return undefined, but you do not see it because you are not printing the return value.
// call the function, ignore its result(Undefined)
// OP: Inside Outer funciton: Inside inner function: 


//    -------- EXECUTION ---------
// Outer Function will be invoked, and prints the statement, Then it'll see the inner();
// It'll invoke the inner(), also.



console.log(outer()); // call the function and print its result
// Inside Outer funciton: 
// Inside inner function: 
// Undefined --> bcz, function has no return statement