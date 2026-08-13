// Type 2 funtions

// So with argument/parameter but no return type.

function greetByName(name){
    console.log("Hi", + name);
}

greetByName("Babb");
greetByName("Prasad");
greetByName("Nidu");
greetByName("Ben");

let name1 = greetByName("Jenny"); // greetByName() with no return, will give "undefine if it's called by variable (function expression)
console.log(name1);