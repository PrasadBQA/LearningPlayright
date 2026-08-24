// In JS Functions are FIRST CLASS CITIGENS  -->
// We can create a function - Function Defination, 
// We can assign a function to a variable - Function Expression,
// We can Define a function with in another funciton - Nested-Functions,
// We can Pass Function as a parameter to another Function - CallBack-Functions.

function foo(bar){
    bar(); // this function is called as callback-function
}

// How to Execute
// foo() takes a function(bar) So, --> foo(function(){}) --> 
// here we are passing(anonymous) function() as argument to foo().

foo(function(){
    console.log("bar");
});

// OR Instead of passing directly, create a new funciton

function named(){
    console.log("bar");
}
foo(named); // valid
// foo(named()); // always pass as parameter. 