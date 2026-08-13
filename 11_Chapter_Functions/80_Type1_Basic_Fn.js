// Type 1 - No param, No Return -> final return undefined.
// Define
function greet()
{
        console.log("Hello JS!");
}

// No Param and No Return -> (void)

// call

greet();
greet();
greet();

let output  = greet();
console.log(output);
//At Line: let output = greet() captures what the function returns, but greet() has no return statement.
// In JavaScript, a function with no explicit return automatically returns undefined.

function openBrowser(){ // No Pram, No Return -> Final Return is undefined
    console.log("Open Browser");
    // open the browser
}