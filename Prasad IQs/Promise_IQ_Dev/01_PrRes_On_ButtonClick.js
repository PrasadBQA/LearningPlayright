// function name(){

// };
// console.log(typeof name); // function

// class Myclass{

// }
// console.log(typeof Myclass); // function







// Promise: is special object representing eventual completion of an asynchronus operation.
// It has 3 states starting with: Pending, Resolve, Reject.

// QUESTION?: Create a Promise and resolve it when button is clicked on webpage.
// You have to create the promis as soon as your file loads.

const myPromise = new Promise((res, rej) => {
    document.getElementById("fetch-res-btn").addEventListener("click", () =>{
    // console.log(res("Promise Pass"));

    res("Promise Passed:");
    });

    document.getElementById("fetch-rej-btn").addEventListener("click", () => {
        rej("Promise Rejected:");
    })

});
myPromise.then(res => console.log(res)).catch(err => {console.log(err)});

// document.getElementById("fetch-res-btn").addEventListener("click", () =>{
//         console.log(Promise.resolve("myPromise"));

// Eventlistner code does not have anything to do with myPromise. Bcz Promis.resolve()
// creates new promise which will be resolved with the value we pass inside the resolve().

// });



// Create a Promise, without using new Promise().

async function myfn(){
    return "Prasad";
}

const promis = myfn();
console.log(promis);

