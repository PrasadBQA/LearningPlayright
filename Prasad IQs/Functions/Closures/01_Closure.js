// What is Closure?: The nested/inner-function is a closure.

// Closure provides an environment to the outer-world,So this nested function can live-longer 
// for execution, and can perform all the required operations even the outer-function 
// execution is completed.

function outer(x){
    function inner(y){
        return x + y;
    }
    return inner;
}

const outerReturn = outer(10);
console.log(outerReturn(2));