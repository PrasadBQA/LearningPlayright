//          ***Noraml function***

// function getName(name: string): string{
//     return  "Bob";
// }

// getName("JS!");
// getName(12345); //TypeError: Argument of type 'number' is not assignable to parameter of type 'string'

//          ***Function using Generics***

// This program uses a generic function to work with different data types.
// It returns and prints the first item from each array.
function getFirstResult<T>(result:T[]):T{
    return result[0]!; // ! = non null assertion operator
}

// Here "T" is a Generic Type Parameter, It can be anything/name

let firstNumber = getFirstResult<number>([200,400,500]);
let firstString = getFirstResult<string>(["Login", "SignUp", "Cart"]);
let firstBoolean = getFirstResult<boolean>([true, false, true]);

console.log("First code:", firstNumber);
console.log("First Test:", firstString);
console.log("StatusPass:", firstBoolean);