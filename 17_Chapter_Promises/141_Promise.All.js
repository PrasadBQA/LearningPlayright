// Promise.all() waits for ALL promises to complete before proceeding
// It takes an array of promises and returns a single promise
// Use when you have multiple independent async tasks that can run simultaneously

// SCENARIO 1: All Promises Succeed
// When all promises in the array resolve, Promise.all() collects all values into a results array
// The .then() block executes with the results array in the same order as input
// This is faster than running tasks one-by-one sequentially

let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");

Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All checks:", results);
    // OUTPUT: All checks: ["Auth Ok", "DB OK", "Cache OK"]
})

// SCENARIO 2: One Promise Fails
// If ANY promise in the array rejects, Promise.all() immediately stops and rejects
// The .then() block is SKIPPED entirely
// The .catch() block executes with the error from the first failed promise
// Any remaining promises are ignored

Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"), // This failure stops everything
    Promise.resolve("OK")      // This is never checked
])
    .then(function (r) { console.log(r); })     // SKIPPED - never runs
    .catch(function (err) { console.log("Failed:", err); });

    // OUTPUT: Failed: DB DOWN