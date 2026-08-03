
// Rules for the Identifier for the Javascript
/**
 * Must begin with a letter (a–z, A–Z), underscore (_), or dollar sign ($).
 * Subsequent characters may also include digits (0–9).
 * Cannot start with a digit.
 * Cannot be a reserved keyword.
 * Are case-sensitive.
 * May contain Unicode letters and Unicode escape sequences.
 * Cannot contain spaces, hyphens, or special characters (except _ and $).
 * **/



let age = "pramod"; //  String Lietal
let isStudent = true; // This is a boolean literal assigned to the variable 'isStudent'.
let pi = 3.14; // This is a numeric literal assigned to the variable 'pi'.
let name = 'Alice'; // This is a string literal assigned to the variable 'name'.
let nullValue = null; // This is a null literal assigned to the variable 'nullValue'.
let undefinedValue; // This variable is declared but not assigned, so it has the value 'undefined'.
let pi2 = 3; // numeric literal 

// Numric Literal - Numeric
// 1. int
// 2. float

// typeof - operatr - It will tell you what is a data type that it has. 
console.log(typeof age);
console.log(typeof pi);
console.log(typeof pi2);
console.log(typeof isStudent);
console.log(typeof nullValue);
console.log(typeof undefinedValue);


var name = "Pramod";

var firstName = "Pramod";
var This_is_a_very_long_name_variable = "Pramod";
var lastName = "Dutta"; // CamelCase

// Naming Conventions (Cases)
// ============================================
// 1. camelCase (standard for JS variables and functions)
let userName = "camelCase";
let totalPrice = 99.99;
let isLoggedIn = true;

// 2. PascalCase (standard for JS classes and constructors)
let UserProfile = "PascalCase";
let ShoppingCart = "class name style";


// 3. snake_case (underscore separated)
let user_name = "snake_case";
let total_price = 49.99;
let is_logged_in = false;


// 4. SCREAMING_SNAKE_CASE (constants)
const MAX_SIZE = 100;
const API_KEY = "abc123";
const DATABASE_URL = "localhost";


// 5. Hungarian Notation (prefix with type - older style)
let strName = "string prefix";
let bActive = true;       // boolean
let nCount = 5;           // number
let arrItems = [];        // array


let strFirstName = "pramod";



// =============================================
// ### 2. Code Examples FOR NAMING CONVENTIONS
// =============================================


// ```javascript
// Global Constants (Hardcoded config values)
const API_BASE_URL = "[https://api.example.com/v1](https://api.example.com/v1)";
const MAX_ATTEMPTS = 3;

// Classes (PascalCase)
class UserProfile {
  // Private class field (ES2022+)
  #authTokens;

  // Constructor & Methods (camelCase)
  constructor(userId, initialRole) {
    this.userId = userId;            // Property (camelCase)
    this.userRole = initialRole;
    this.#authTokens = [];
  }

  // Method (camelCase, verb-first)
  updateEmail(newEmail) {
    this.email = newEmail;
  }
}

// Variables & Functions (camelCase)
let activeUserCount = 42;
let isPaymentCompleted = true; // Booleans typically start with is/has/should

function fetchOrdersByUserId(userId) {
  // Function body...
}