function login(username, password, callback){
    console.log("Inside Login Function: ");
    callback();
}

function proceedToPayment(callback){
    console.log("Inside Payment function");
    callback();
}
function logout(){
    console.log("Logged out");
}
// function makePayment(){
//     console.log("Payment Completed: ")
// }

login("Alex", "Password", function(){
    proceedToPayment(logout);
});

// here why we wrapped proceestopayment and logout inside a function. 
// can't we directly pass them lke:
// login("Alex", "Password", proceedtopayment(logout));



// Because proceedToPayment(logout) calls proceedToPayment immediately. 
// It does not pass it as a callback.
// JavaScript evaluates function arguments first:

// When you need to run multiple steps in sequence, wrap them in one callback:
// A wrapper is not required solely because there are multiple functions, 
// but it is useful when you need to control their order.