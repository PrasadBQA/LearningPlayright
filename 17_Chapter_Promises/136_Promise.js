//  Promise here is not a keyword — it's a built-in constructor (a global object) that JavaScript provides.
// new Promise(...) calls the built-in Promise constructor to create a promise object,
//  which you're storing in the order variable.
let order = new Promise(function(resolve, reject){

    let foodready = true;
    if(foodready)
    {
        resolve("Pizza is delivered!: ");
    }else{
        reject("Order Cancelled!")
    }

})

console.log(order);