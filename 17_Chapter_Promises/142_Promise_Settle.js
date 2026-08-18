// Promise.allSettled() waits for ALL promises to complete regardless of success or failure
// It takes an array of promises and returns a single promise that always resolves
// Use when you need complete information even if some tasks fail
// Unlike Promise.all() which stops at first failure, allSettled() continues and collects everything

// Each result has a status: "fulfilled" (success) or "rejected" (failure)
// For fulfilled promises, access the value with r.value
// For rejected promises, access the error reason with r.reason
// The .then() block ALWAYS executes - it never rejects

// Real-world use: Running multiple tests or checks where you want a complete report
// This is like a test report — you want results for ALL tests, not just stop at the first failure

Promise.allSettled([
    Promise.resolve("Test A Passed!"),  // ✅ Success
    Promise.reject("Test B failed"),    // ❌ Failure
    Promise.resolve("Test C passed")    // ✅ Success
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
    });
})
// This is like a test report — you want results for ALL tests, not just stop at the first failure.


// OUTPUT:
// Test 1: fulfilled - Test A Passed!
// Test 2: rejected - Test B failed
// Test 3: fulfilled - Test C passed