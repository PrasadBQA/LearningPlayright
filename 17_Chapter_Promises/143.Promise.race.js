// Promise.race() waits for the FIRST promise to complete (success or failure)
// It takes an array of promises and returns immediately after the first one finishes
// Use when you only need the fastest result and don't care about the rest
// Unlike Promise.all() which waits for all, race() stops at the first completion

// The winner can be either success or failure - whichever comes first
// All other promises are ignored after the winner is determined
// This is useful for timeouts, fallback servers, or picking the fastest response

// Real-world use: Try multiple servers and use whoever responds first
// Example: Fetch from Server A or Server B, use whichever responds faster


let fastServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast 100ms")
    }), 100         // Completes in 100 milliseconds
});

let slowServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast 500ms")
    }), 500        // Completes in 500 milliseconds
});

Promise.race([fastServer, slowServer]).then(function (winner) {
    console.log("Winner:", winner);
})

// OUTPUT: Winner: Fast 100ms
// Explanation: fastServer finishes first (100ms), so it wins
// slowServer is ignored even though it would have resolved successfully