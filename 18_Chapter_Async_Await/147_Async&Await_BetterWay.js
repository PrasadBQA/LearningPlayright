// // Promise Chainig V/s Async Await (Better Way)

// // Promise Chaining
function openBrowser(){
    return new Promise(function(resolve){
        resolve("Browser opened!");
    });
}

function goToLogin(){
    return new Promise(function (resolve){
        resolve("Login Page Loaded");
    });
}

function enterCredentials() {
    return new Promise(function (resolve){
        resolve("Credentials are entered");
    });
    
}

function clickOnLoginButton(){
    return new Promise(function (resolve){
        resolve("Logged in Successfully");
    });
}

// openBrowser()
// .then(function (msg){
//     console.log("Step 1:", msg);
//     return goToLogin();
// })
// .then(function (msg){
//     console.log("Step 2: ", msg);
//     return enterCredentials();
// })
// .then(function (msg){
//     console.log("Stpe 3: ", msg);
//     return clickOnLoginButton();
// })
// .then(function (msg){
//     console.log("Step 4: ", msg);
// })
// .catch(function (error){
//     console.log("Error", error);
// })
// .finally(function (){
    
//     console.log("Done execution!");
    
// });

// Better Way - async and await

async function runLoginFlow(){
    try {
        let msg1 = await openBrowser();
        console.log("Step 1: ", msg1);

        let msg2 = await goToLogin();
        console.log("Step 2: ", msg2);

        let msg3 = await enterCredentials();
        console.log("Step 3: ", msg3);

        let msg4 = await clickOnLoginButton();
        console.log("Step 4: ", msg4);
    }
    catch(error){
        console.log("Error: ", error);
    }
    finally {
        console.log("Done execution!");
    }
}

// Call the async function
runLoginFlow();