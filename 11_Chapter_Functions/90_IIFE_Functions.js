// Everything inside this IIFE is in its own private scope
(function(){
    var apikey = "Secret_12345";
    function connect()
    {
        console.log("Connecting with", apikey);
    }
    connect();
})
// Outside IIFE
console.log(typeof apikey); // Undefined
console.log(typeof connect); // Undefined

// Isolation: apiKey and connect() exist only inside the function's execution memory.
// Clean Global Namespace: Zero variables are added to the global window/global scope.
// Execution & Cleanup: The code executes immediately when the file loads, does its job (like setup or event bindings), and leaves no trace behind in the global space.

/**Modern Context
 * While IIFE was the primary method for modularity and scope isolation in older JavaScript (ES5),
 * ES6 Modules (import/export) and block-scoped variables (let and const) have largely 
 * superseded IIFE for code organization. However, IIFE remains valuable in legacy 
 * codebases, standalone scripts, or async top-level executions. */