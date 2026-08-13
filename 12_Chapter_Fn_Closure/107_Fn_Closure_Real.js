function maxRetryTracker(max){
    let attempts = 0;
    function tryAgain(testname){
        attempts++;
        if(attempts > max){
            return`${testname} exceeded max retries ${attempts}`;
        }
    return `Attempt ${attempts}/${max} for ${testname}`;
    }
    return tryAgain;
}


let runTCRetry = maxRetryTracker(3);
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));

console.log(runTCRetry("Login"));