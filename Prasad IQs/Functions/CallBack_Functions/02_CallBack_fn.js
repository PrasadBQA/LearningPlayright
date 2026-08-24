function fn(arg){
    arg();
}

fn(function() {
    console.log("Hello JS!");
    
});

// ----------------
console.log("--------------:");

// CALLBACK Helps you for doing the asynchronous programming -> It is not straightaway TRUE
// CALLBACK is a greate mechanish to handle "RESULT OF an ASYCHRONOUS OPERATION".


// Just CALLBACK
function greet(name, callback){
    console.log(`Hi ${name}`);
   callback();
}

function sayBye(){
    console.log("Bye");
}

greet("JS!", sayBye);

console.log("--------------:");

// ASYNCHRONOUS CALLBACK

function greet2(name, callback1){
    console.log(`Hi ${name}`);

    setTimeout(() =>{
        callback1();
    }, 2000);
   console.log("I'm Still Hanging here: ");
}

function sayBye2(){
    console.log("Bye");
}

greet2("JS!", sayBye2);

