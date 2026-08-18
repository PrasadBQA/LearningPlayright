// Callback function
function placeOrder(item, callback){
    console.log("Order Placed...");
    callback();
}


// Define 
function print()
{
    console.log("Normal Function - Done with order");
}

placeOrder("Burger", print);

// Second way by using the anonymous function
// calling the function
placeOrder("Burger", function(){
    console.log("Order is readu, Pick it up!");
})


// Third Way - Arrow Fn - Playwright uses this way

placeOrder("Burger", () => {
    console.log("Arrow Fn, I am also functio without name");
});