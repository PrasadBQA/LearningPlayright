const add = function(x, y){
    return x + y;
}

// Usage of Arrow function
// 1. you'll write lesser amount of code, mostly used in modern coding
// 2. The relation-ship with the "this" keyword and "arrow-function"
// Arrow Functions "no binding to this keyword"

const add2 = (x, y) => {
    return x + y;
}

console.log(add2(2, 3));

// If body of arrow function (arrow function declaration) has only one line/statement 
// and it's returning somethig you don't have to give even the curly braces {}.

const add3 = (x, y) => x + y;
console.log(add3(5, 5));

// Arrow Function has only one parameter then parantheses() also not needed.
const add4 = x => x; 
console.log(add4(6));