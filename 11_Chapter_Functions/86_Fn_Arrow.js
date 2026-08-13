function greet(name){
    return `Hello, ${name}!`;
}

const greet1 = function (name1) {
    return `Hello, ${name1}!`;
}

const greet2 = (name2) => `Hello, ${name2}!`;

// Arrow Fn

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>


console.log(greet("Prasad"));
console.log(greet1("Prasad"));
console.log(greet2("Prasad"));