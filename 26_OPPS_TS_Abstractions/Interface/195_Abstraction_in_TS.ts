// JavaScript does not have true abstraction in the same way as 
// languages like Java, C#, or C++.
// However, you can achieve abstraction using:

// 1. Functions -> Hide complex logic behind a simple function call
// 2. Closures  -> Hide internal variables and state
// 3. Classes   -> Expose a clean public API
// 4. Private class fields (#) -> Hide implementation details from outside code
// 5. Modules (export / import) -> Hide internal implementation and expose only selected functionality


// JavaScript has no abstract keyword in plain JavaScript.

// THEN WHY Does TypeScript Have Abstraction Features?

/*JavaScript already supports the concept of abstraction, but it does not 
provide explicit constructs such as interfaces and abstract classes. 
TypeScript adds these constructs to define and enforce abstraction 
contracts at compile time.*/

/*JavaScript provides ways to implement abstraction, while TypeScript 
provides explicit tools to define and enforce abstraction contracts.*/

// WE CAN ACHIEVE THIS BY USING:
// Interfaces
// Enums
// Abstract Classes

interface user{
    name: string;
    age: number;
    email: string;
}

// Objects created using "user interface" it should have all the properties with correct types
// The interface defines the required structure; it does not create the object itself.
const user1: user = {
    name: "Jon",
    age: 30,
    email: "abc@testmail.com"
}

const user2: user = {
    name: "John2",
    age : 56,
    email: "abc@gmail.com"
}

const user3: user = {
    name: "John3",
    age : 23,
    email: "abc@gmail.com"
}
