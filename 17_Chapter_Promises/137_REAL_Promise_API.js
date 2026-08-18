let apiCall = new Promise(function(resolve, reject){
    resolve({status : 200, body : "User Dataa"});

});

// response is the parameter of the then() callback. When the promise resolves,
// resolve({status: 200, body: "User Dataa"}) passes that object into the callback,
// so response receives it — that's why response.status prints 200 and response.body prints "User Dataa".
//  So response is just a placeholder name you chose; the value it holds comes from whatever you pass to
// resolve().

apiCall.then(function(response){
    console.log(response);
    console.log(response.status);
    console.log(response.body);

});

// .then() runs ONLY when the promise resolves successfully.