// Basic Custom Callback

// Write a function calculate(a, b, operation) where operation is a callback function.
// Test it by passing functions for addition and multiplication.

function calculate(a, b, operation){

    return operation(a, b);
}

function addition(x, y){
    return x + y;
}

function multiplication(x, y){
    return x * y;
}

const addResult = calculate(2, 3, addition);
console.log(`Addition result: ${addResult}`);

const multiplyResult = calculate(2, 3, multiplication);
console.log(`Multiply Result: ${multiplyResult}`);
console.log("--------------:")
// OR Using Arrow Functions

const addResult2 = calculate(2, 3, (x, y) => x + y);
console.log(`Using arrow function Addition result: ${addResult2}`);

const multiplyResult2 = calculate(2, 3, (x, y) => x * y);
console.log(`Using arrow function Multiply Result: ${multiplyResult}`);

