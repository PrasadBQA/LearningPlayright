// Private Field (#) and Public Field (no #) in JavaScript
// Private fields are a feature in JavaScript that allows you to create properties on objects that cannot be accessed or modified from outside the class. They are defined using a `#` prefix. Public fields, on the other hand, can be accessed and modified from outside the class.
// Privaate Fields -> Hidden Data
// Public Fields -> Accessible Data

let v = 10;
class Credentials{
    #apiKey; // private field, cannot be accessed outside the class
    users;

    constructor(users, key){
        this.users = users; // public field, can be accessed outside the class
        this.#apiKey = key; // private field, cannot be accessed outside the class

    }
    // Custom made function by us
    babbugetAuthHeader(){
        return "Bearer " + this.#apiKey; // private field, cannot be accessed outside the class
    }
}

let cred = new Credentials("Admin", "Secret_Key_112");
// console.log(Credentials.apiKey); // undefined, because apiKey is a private field and cannot be accessed outside the class
// console.log(Credentials.#apiKey); // SyntaxError: Private field '#apiKey' must be declared in an enclosing class
console.log(cred.users); // Admin, because users is a public field and can be accessed outside the class
console.log(cred.babbugetAuthHeader()); // Bearer Secret_Key_112