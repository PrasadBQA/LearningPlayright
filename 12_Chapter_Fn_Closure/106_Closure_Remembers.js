function makeCounter(start = 0){
    let count = start;
    
    return{
        increment(){count++;},
        decrement(){count--;},
        get(){return count;}
    }

}

let counter = makeCounter(0); // makeCounter() returning another function(inner function) increment (return increment;), which is a closure
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());

// increment(); // not allowed. ReferenceError: incrment not defined
// decrement()  // not allowed. ReferenceError: incrment not defined

/**Closure: So, we can't access inner functions directly, 
 * but we can access using outer/parent function. */