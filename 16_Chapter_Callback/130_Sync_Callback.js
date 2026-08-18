let testResult = ["PASS", "FAIL", "PASS", "SKIP"];

testResult.forEach(function(result, index){
    console.log("Test" + index + "->" + result);
});

// "All done" prints LAST because forEach is synchronous - it finishes 4 iterations first, then moves on.

