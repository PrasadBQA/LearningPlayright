# Abstraction in JavaScript vs TypeScript

## 1. What Is Abstraction?

**Abstraction** means showing only what is necessary while hiding internal implementation details.

### Simple Example

When we use an ATM, we select **Withdraw Money**. The ATM handles account checks, PIN validation, and transaction processing internally.

We only use the necessary interface:

```text
withdraw()
```

---

## 2. Can JavaScript Achieve Abstraction?

Yes. JavaScript can achieve the concept of abstraction by hiding implementation details with:

- Functions
- Closures
- Classes and methods
- Private fields and methods using `#`
- Modules using `export` and `import`

### Example

```javascript
class Car {
    start() {
        this.#startEngine();
        console.log("Car started");
    }

    #startEngine() {
        // Complex internal logic
    }
}
```

The user only needs to call:

```javascript
const car = new Car();
car.start();
```

The implementation of `#startEngine()` remains hidden.

JavaScript can therefore implement abstraction, but it does not provide an `abstract` keyword in plain JavaScript.

---

## 3. Abstraction in JavaScript

### Key Idea

**Abstraction** means exposing what the user needs and hiding the implementation details.

JavaScript does not have a built-in `abstract` keyword, but strong abstraction can be achieved using:

1. **Functions**
2. **Closures**
3. **Classes and methods**
4. **Private `#` fields and methods**
5. **Modules using `export` and `import`**

### How Each Mechanism Helps Abstraction

| Mechanism | How it helps abstraction |
|---|---|
| **Functions** | Hide complex logic behind a simple function call |
| **Closures** | Hide internal variables and state |
| **Classes and methods** | Expose a clean public API |
| **Private `#` fields and methods** | Hide implementation details from outside code |
| **Modules** | Hide internal implementation and expose only selected functionality |

### Example: Abstraction Using JavaScript

#### `bankAccount.js`

```javascript
class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#validateAmount(amount);
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#validateAmount(amount);

        if (amount > this.#balance) {
            throw new Error("Insufficient balance");
        }

        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }

    #validateAmount(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
    }
}

export default BankAccount;
```

The public methods expose the required operations, while `#balance` and `#validateAmount()` hide the internal implementation details.

---

## 4. Why Does TypeScript Have Abstraction Features?

TypeScript did not introduce the concept of abstraction. Abstraction already existed in JavaScript and object-oriented programming.

TypeScript adds explicit language features such as:

- `interface`
- `abstract class`
- `abstract` methods

These features help define and enforce abstraction contracts at compile time.

---

## 5. The Problem with JavaScript

Suppose every payment type must provide a `pay()` method. In JavaScript, we might write:

```javascript
class Payment {
    pay() {
        // Payment logic
    }
}
```

However, JavaScript does not provide an `abstract` keyword to enforce the requirement that every child class must implement `pay()`.

---

## 6. TypeScript `abstract` Class

TypeScript allows us to explicitly define this requirement:

```typescript
abstract class Payment {
    abstract pay(): void;
}
```

This means that `Payment` cannot be instantiated directly, and every concrete child class must implement `pay()`.

```typescript
class CreditCardPayment extends Payment {
    pay(): void {
        console.log("Paid using credit card");
    }
}
```

This is valid because `CreditCardPayment` implements `pay()`.

If a concrete child class does not implement `pay()`, TypeScript reports a compile-time error.

---

## 7. TypeScript `interface`

An interface defines a contract. It describes what members a class or object must provide, but it does not define how those members work.

An interface defines the **shape of an object**: which properties it must have and what types those properties must use. It is like a contract. If an object follows an interface, it must have all of the interface's required properties.

Interfaces do not generate JavaScript code. They exist only at compile time for type checking and completely disappear from the output after compilation.

```typescript
interface Payment {
    pay(): void;
}
```

A class can implement the interface:

```typescript
class CreditCardPayment implements Payment {
    pay(): void {
        console.log("Credit card payment");
    }
}
```

The interface defines **what should exist**:

```text
Interface
    -> What should exist?
    -> pay()
```

The class defines **how it should work**:

```text
Class
    -> How should it work?
    -> Actual implementation
```

### `extends` and `implements`

An interface can extend one or more other interfaces, while a class can implement one or more interfaces.

```typescript
interface User {
    name: string;
}

interface Admin extends User {
    role: string;
}

class Manager implements Admin {
    name: string = "Prasad";
    role: string = "Manager";
}
```

Here, `Admin extends User`, so `Admin` inherits the contract from `User`. `Manager implements Admin`, so it must provide the properties required by both `Admin` and `User`.

---

## 8. JavaScript vs TypeScript

### JavaScript

JavaScript can hide implementation details using private members, classes, functions, closures, and modules.

```javascript
class Payment {
    #validatePayment() {
        // Hidden validation logic
    }

    pay() {
        this.#validatePayment();
        console.log("Payment completed");
    }
}
```

JavaScript can achieve abstraction, but it does not have built-in constructs such as:

```text
abstract class
abstract method
interface
```

for formally defining and enforcing abstraction contracts.

### TypeScript

TypeScript adds the following explicit abstraction features:

```text
interface
abstract class
abstract method
```

These features allow developers to define what a class must provide. TypeScript checks these rules during development and compilation.

---

## 9. Compile Time vs Runtime

TypeScript is a superset of JavaScript. TypeScript code is eventually converted into JavaScript.

For example:

```typescript
interface Payment {
    pay(): void;
}
```

The `interface` is used for compile-time checking and does not exist in the final JavaScript runtime.

```text
TypeScript
    -> Compile-time checking
    -> JavaScript
    -> Runtime
```

---

## 10. Main Difference

### JavaScript

JavaScript can achieve abstraction through programming techniques such as:

```text
Functions
Closures
Private members
Classes
Modules
```

### TypeScript

TypeScript provides explicit constructs to define and enforce abstraction contracts at compile time:

```text
interface
abstract class
abstract method
```

---

## 11. Interview Takeaway

### Incorrect Understanding

> JavaScript does not have abstraction, so TypeScript introduced abstraction.

### Correct Understanding

> JavaScript already supports the concept of abstraction, but it does not provide explicit constructs such as interfaces and abstract classes. TypeScript adds these constructs to define and enforce abstraction contracts at compile time.

---

## Quick Revision

```text
                         ABSTRACTION
                              |
              +---------------+---------------+
              |                               |
         JavaScript                      TypeScript
              |                               |
   Can achieve abstraction          Explicit abstraction
              |                         constructs
    +---------+---------+          +-----+------+------+
    |         |         |          |            |      |
 Functions  Closures  Classes   Interface  Abstract  Abstract
                                      Class     Method
              |                               |
              +---------------+---------------+
                              |
                Hide implementation details
                  and expose what is needed
```

### One-Line Takeaway

> JavaScript provides ways to implement abstraction, while TypeScript provides explicit tools to define and enforce abstraction contracts.
