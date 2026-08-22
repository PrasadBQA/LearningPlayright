// A callback function is simply a function passed as an argument to another function, which is then executed (or "called back") inside that outer function once a specific task is complete.
// Think of it like ordering coffee: 
// you place your order (pass the callback), go sit down, and the barista calls out your name when your drink is ready (executes the callback).

function greetUser(name){
    console.log(`Hello, ${name} Your Coffee is Ready:`);
}

function proceedUserInput(greettheuser){
    // greettheuser now refers to greetUser
    // bcz, Functions in JavaScript are first-class values, so they can be passed as arguments.
    const name = "Alex";
    greettheuser(name); // is equivalent to greetUser(name);
    //"greettheuser" is a parameter, but its value is a function, allowing it to be called with ().

}

proceedUserInput(greetUser);
// Here, greetUser is passed as the argument, and JavaScript assigns it to the parameter
// greettheuser:


