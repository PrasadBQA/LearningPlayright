// It will throw -> ReferenceError: Cannot access 'username' before initialization
// let username is in Temporal Dead Zone at line 3 (console.log(username)) accessing before initialization
console.log(username);
let username = "Dutta";
console.log(username);
