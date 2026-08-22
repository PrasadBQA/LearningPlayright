# Returning Values From Functions

## Why Use `return`?

Functions can produce a value and send it back to the code that called them.
That value can be:

- stored in a variable;
- passed to another function; or
- used directly in an expression.

Applications rely on multiple functions passing data to each other rather than operating in isolation.

A return value allows you to capture a function’s output and store it in a variable (e.g., let p = x()).

This variable can then be passed as an argument to other functions or used elsewhere in your code.


## Execution vs. Function Reference
With Parentheses x(): Executes (invokes/calls) the function and evaluates to its return value.

Without Parentheses x: References the function itself (returns its string representation/definition), rather than executing it.

## Default Return Behavior (undefined)

If a function performs operations (like console.log) but lacks an explicit return statement, JavaScript automatically returns undefined.

Direct Return (Recommended for simple calculations)

Note: Direct return is generally preferred for simple logic to keep code concise.

```js
function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

const result = sum(2, 3);
console.log(result); // 5
```

## `return` Stops the Function

When JavaScript reaches a `return` statement, the function ends immediately.
Any code after it does not run.

```js
function getMessage() {
    return "Hello";

    console.log("This never runs");
}
```

## Direct Return vs. Intermediate Variable

Both examples return the same value. The direct version is usually clearer for
simple calculations.

### Direct return

```js
function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
```

### Intermediate variable

```js
function sum(firstNumber, secondNumber) {
    const total = firstNumber + secondNumber;
    return total;
}
```

## Function Call vs. Function Reference

This distinction is especially important when working with callbacks.

| Syntax | Meaning |
| --- | --- |
| `logout()` | Call `logout` now and use its return value |
| `logout` | Pass a reference to `logout` so another function can call it later |

```js
function logout() {
    console.log("Logged out");
}

function runAfterPayment(callback) {
    console.log("Payment completed");
    callback();
}

runAfterPayment(logout);   // Pass the function; logout runs later
// runAfterPayment(logout()); // Calls logout immediately and passes its result
```

## Default Return Value: `undefined`

If a function does not have a `return` statement, JavaScript automatically
returns `undefined`.

if a function performs operations (like console.log) but lacks an explicit return statement, JavaScript automatically returns undefined.

```js
function showMessage() {
    console.log("Hello");
}

const result = showMessage();
console.log(result); // undefined
```

`console.log()` displays a value, but it does not return that value.

## Key Takeaways

1. Use `return` to send a value back from a function.
2. A `return` statement immediately stops function execution.
3. `functionName()` executes a function now.
4. `functionName` passes the function itself for later use.
5. A function without `return` produces `undefined`.