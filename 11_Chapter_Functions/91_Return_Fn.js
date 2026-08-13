function getStatusCode(code){
    if(code >= 200 && code < 300) return "Success";
    if(code >= 400 && code < 500) return "Client error";
    if(code >= 500) return "Server error";

    // this is not multiple return, it's a one return

}

getStatusCode(200);
getStatusCode(404);
getStatusCode(500);

// Returns nothing -> Undefined
function logTest(name){
    console.log(`Running ${name}`);
    // no return statement
}

logTest("Hi this is a log")


// array return
function aaa(){
    return [1,2,3,4,5];
    // return  - object
}