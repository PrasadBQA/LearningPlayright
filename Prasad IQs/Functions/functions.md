# JavaScript Functions: Study Guide

Functions are reusable blocks of code that perform a task.

**What is it?** A function is a named or unnamed block of instructions that can
be run whenever it is called.

**Why do we need it?** Functions let us write logic once and reuse it. If the
logic changes, we usually update one place instead of fixing repeated code.

## 1. Function Declaration

**What is it?** A function declaration creates a function using the `function`
keyword and a name.

**Why do we need it?** It is a clear way to define reusable behavior, such as
`login`, `logout`, or `calculateTotal`.

```js
function printMessage() {
    console.log("Hello, JavaScript");
}

printMessage();
```

The function body runs only when the function is called with `()`.

## 2. Parameters and Arguments

**What are they?** Parameters are placeholders in the function definition.
Arguments are the actual values supplied during the function call.

**Why do we need them?** They make one function flexible. The same function can
work with different values.

```js
function greet(name) {       // name is a parameter
    console.log(`Hello, ${name}`);
}

greet("Alex");               // "Alex" is an argument
```

```js
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

console.log(add(2, 3)); // 5
```

## 3. Returning a Value

**What is it?** `return` sends a value from a function back to its caller. It
also stops the function immediately.

**Why do we need it?** Returning values allows functions to provide data to
other parts of the program instead of only displaying a message. This makes
functions easy to combine and test.

```js
function calculateTotal(price, tax) {
    return price + tax;
}

const total = calculateTotal(100, 18);
console.log(total); // 118
```

Code after `return` does not execute:

```js
function getMessage() {
    return "Hello";

    console.log("This never runs");
}
```

If a function has no `return` statement, JavaScript returns `undefined`.
`console.log()` displays a value; it does not return that value.

```js
function showMessage() {
    console.log("Hello");
}

const result = showMessage();
console.log(result); // undefined
```

## 4. Calling vs. Referencing a Function

**What is the difference?** `logout` is a function reference. `logout()` is a
function call and runs the function immediately.

**Why do we need this distinction?** Callbacks must be passed as references so
another function can decide when to run them. Calling one too early may pass its
return value, often `undefined`, instead.

```js
function logout() {
    console.log("Logged out");
}

function runTask(callback) {
    console.log("Task completed");
    callback();
}

runTask(logout);     // pass the function; it runs inside runTask
// runTask(logout()); // call logout now, then pass its return value
```

## 5. Default Parameters

**What is it?** A default parameter is a fallback value used when an argument
is missing or `undefined`.

**Why do we need it?** It prevents avoidable errors such as `NaN` and makes
optional arguments easier for callers to use.

```js
function calculate(a = 0, b = 0) {
    return 2 * (a + b);
}

console.log(calculate());     // 0
console.log(calculate(5));    // 10
console.log(calculate(5, 3)); // 16
```

## 6. Rest Parameters

**What is it?** A rest parameter, written with `...`, gathers remaining
arguments into an array.

**Why do we need it?** It allows a function to accept a variable number of
values. It must be the last parameter, and a function can have only one rest
parameter.

```js
function collectThings(firstThing, ...remainingThings) {
    console.log(firstThing);
    console.log(remainingThings);
}

collectThings(1, 2, 3, 4);
// 1
// [2, 3, 4]
```

## 7. Function Expressions

**What is it?** A function expression creates a function and assigns it to a
variable.

**Why do we need it?** Functions are values in JavaScript, so they can be
stored, passed as arguments, replaced, or returned from other functions.

```js
const add = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};

console.log(add(2, 3)); // 5
```

## 8. Arrow Functions

**What is it?** An arrow function is shorter syntax for a function expression.

**Why do we need it?** It reduces boilerplate, especially for small callbacks
used by array methods and event handlers.

```js
const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};

const multiply = (firstNumber, secondNumber) =>
    firstNumber * secondNumber;
```

For a single expression, braces and `return` can be omitted:

```js
const double = number => number * 2;
```

## 9. Nested Functions and Scope

**What is it?** A nested function is defined inside another function. Scope
defines where variables can be accessed.

**Why do we need it?** Nesting keeps helper logic private and lets inner
functions use data from their surrounding function without exposing that data
globally.

```js
function outer() {
    const message = "Hello from outer";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();
```

Variables declared inside a function cannot be accessed from outside that
function.

## 10. Closures

**What is it?** A closure is a function bundled with access to variables from
the scope where it was created.

**Why do we need it?** Closures preserve private state after the outer function
finishes. They are useful for counters, factories, configuration, and data
encapsulation.

```js
function createAdder(firstNumber) {
    return function (secondNumber) {
        return firstNumber + secondNumber;
    };
}

const addTen = createAdder(10);
console.log(addTen(2)); // 12
```

`addTen` remembers `firstNumber` because the returned function forms a closure.

## 11. Callback Functions

**What is it?** A callback is a function passed to another function so it can
be called later.

**Why do we need callbacks?** They allow code to continue after an operation
finishes, such as running payment after login or logout after payment. They are
also used by event handlers and asynchronous JavaScript.

```js
function processUser(name, callback) {
    console.log(`Processing ${name}`);
    callback();
}

function finish() {
    console.log("Finished");
}

processUser("Alex", finish);
```

### Callback Chain

Each function receives the next function and calls it when its work is complete:

```js
function login(username, password, callback) {
    console.log("Logged in");
    callback();
}

function proceedToPayment(callback) {
    console.log("Payment page opened");
    callback();
}

function logout() {
    console.log("Logged out");
}

login("Alex", "Password", function () {
    proceedToPayment(logout);
});
```

Do not write `proceedToPayment(logout())` when passing callbacks. The `()` calls
`logout` immediately and passes its return value instead of passing the function.

## 12. Higher-Order Functions

**What is it?** A higher-order function accepts a function, returns a function,
or does both.

**Why do we need it?** It lets us build flexible, reusable operations. Array
methods such as `map`, `filter`, `find`, and `reduce` are common examples.

```js
function runCallback(callback) {
    callback();
}

function createGreeting() {
    return function () {
        console.log("Hello");
    };
}

runCallback(() => console.log("Callback executed"));

const greeting = createGreeting();
greeting();
```

## 13. Pure and Impure Functions

**What are they?** A pure function depends only on its inputs and has no
observable side effects. An impure function reads or changes state outside
itself.

**Why do we need this distinction?** Pure functions are predictable and easier
to test. Impure functions are sometimes necessary for logging, updating a
screen, or making a network request, but their side effects should be
intentional.

```js
function greet(name) {
    return `Hello, ${name}`;
}
```

```js
let greeting = "Hello";

function greetWithExternalState(name) {
    return `${greeting}, ${name}`;
}
```

Changing `greeting` changes the result for the same input.

## 14. IIFE

**What is it?** An IIFE, or Immediately Invoked Function Expression, is a
function expression that runs immediately after it is created.

**Why do we need it?** It runs setup code once and creates a private scope,
preventing temporary variables from becoming globally accessible.

```js
(function () {
    console.log("Runs immediately");
})();
```

Arrow-function form:

```js
(() => {
    console.log("Runs immediately");
})();
```

IIFEs were commonly used for private scope before `let` and `const` were
introduced.

## 15. Call Stack

**What is it?** The call stack is JavaScript's last-in, first-out record of
currently executing functions.

**Why do we need it?** It tracks where execution should return after a function
finishes. Understanding it helps explain nested calls, debugging stack traces,
and stack overflow errors.

```js
function first() {
    console.log("First");
}

function second() {
    first();
    console.log("Second");
}

second();
```

`second` is placed on the stack first, then `first`. JavaScript completes
`first`, removes it, and then finishes `second`.

## 16. Recursion

**What is it?** Recursion is a technique where a function calls itself with a
smaller or simpler input.

**Why do we need it?** Recursion can express naturally repeating or nested
problems, such as traversing folders or calculating a factorial. Every
recursive function needs a base condition to stop.

```js
function countDown(number) {
    if (number === 0) {
        console.log("Done");
        return;
    }

    console.log(number);
    countDown(number - 1);
}

countDown(3);
```

Without a base condition, the function keeps calling itself until JavaScript
throws a `Maximum call stack size exceeded` error.

## Quick Revision

| Concept | Meaning |
| --- | --- |
| Function | Reusable block of code |
| Parameter | Variable in a function definition |
| Argument | Value passed during a function call |
| `return` | Sends a value back and stops execution |
| Callback | Function passed to another function |
| Higher-order function | Accepts or returns a function |
| Closure | Function that remembers its outer scope |
| Recursion | Function calling itself |
| `name()` | Execute the function now |
| `name` | Pass or reference the function |
