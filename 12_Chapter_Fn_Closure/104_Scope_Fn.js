// Scope in functions

let env = "staging"; // global scope variable

function setupConfig(){
    let timeout = 3000;     // local scope variable
    console.log(env);       // can access global
    console.log(timeout);   // can access local
}

setupConfig();
console.log(env);
console.log(timeout); // ReferenceError: not accessible


///

let g_x = 10;

function outer(){
    let x = 10;
    function inner(){
        let y = 20;
        console.log(x);  // inner can access outer's scope variables
    }

    
    inner();
    console.log(y);  // outer cannot access inner's variable
}