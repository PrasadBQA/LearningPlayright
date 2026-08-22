function x(){

    return x;
}

// storing function x() return value in p.To store value function x() must return. 
// Without retun, it'll print undefined.
let p = x(); 
function y(){
    p; // using the function x() returned value.
}

//-----------------------------------------------------


function one(a, c){
    let d = a + c;
    return d; // "Return" Only sends value. will not print on console
// OR return a + b;

}
one(2, 3); // "Return" Only sends value. will not print on console, bcz we're only executing
console.log(one(2, 3)); // Displays value on console.

let r = one(2, 3);
// console.log(r);

function two(){
    console.log("inside function two: ");
}
two();



