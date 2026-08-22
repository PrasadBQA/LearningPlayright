// --------- RULES ---------
// 1. A Varianle Defined inside a function that cann't be accessable anywhere out-side the function.
// 2. A Function can access all the variables inside the scope(Gloabl scope + function scope) it is defined.
// 3. Outer-Function cann't access anything defined in inner-function, inner can access anything defined in outer-function

let a = 100;
const b = 200;
var c = 300;

function doSomeThing() {
  let x = 10;
  const y = 20;
  var z = 30;
  console.log(x, y, z);
  console.log(a,b,c)
}
doSomeThing();
// console.log(z); // ReferenceError: z is not defined
