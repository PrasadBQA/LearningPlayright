// CALLBACK HELL / PROMISE CHAIN (Old Way - Hard to Read)
// This uses .then() chaining which creates nested callbacks
// Hard to follow the logic flow - looks messy and hard to maintain
// Each .then() waits for the previous one to complete (sequential)

getToken.then(function(token){
    return getUser(token); // Pass token to next step
}).then(function(user){
    console.log(user);  // Final result
});


// ASYNC/AWAIT (Modern Way - Clean & Easy to Read)
// async function makes the function return a promise automatically
// await pauses execution until the promise resolves
// Code looks like synchronous code but runs asynchronously
// Much easier to read, understand, and maintain
// Looks like normal step-by-step instructions instead of nested callbacks

async function run(){
    let token = await getToken();   // Step 1: Wait for token
    let user = await getUser();     // Step 2: Wait for user (using token)
    console.log(user);              // Step 3: Print the result
}


// Key Advantages of Async/Await:
// 1. Reads top-to-bottom like regular code
// 2. No nested .then() chains (no callback hell)
// 3. Easier error handling with try/catch
// 4. Better for debugging - clearer stack traces
// 5. Variable scope is clearer (no extra function scopes)

// How to run it:
// run();  // Call the async function