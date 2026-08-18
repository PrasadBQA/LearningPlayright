function openBrowser(callback){
    console.log("Opening the Browser: ");
    setTimeout(function(){
        console.log("Step 1: Browser starting: ");
        callback();
    }, 5000);
}

function goToLoginPage(callback){
    setTimeout(function(){
        console.log("Step 2: Login page Loaded: ");
        callback();
    }, 5000);
}

function enterCredentials(callback){
    setTimeout(function(){
        console.log("Step 3: Credentials Entered: ");
        callback();
    }, 5000);
}

function clickLogin(callback){
    setTimeout(function(){
        console.log("Step 4: Login Button Clicked");
        callback();
    }, 5000);
}


// THIS IS CALLBACK HELL

openBrowser(function(){
    goToLoginPage(function(){
        enterCredentials(function(){
            clickLogin(function(){
                console.log("Test is Completed! ")
            })
        })
    })
})