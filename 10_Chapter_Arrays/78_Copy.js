// Shallow Copy
// Original array will not change if you change the copy.

let original = [1,2,3];
let copy1 = [...original]; // using spread
console.log(original);
console.log(copy1);

let copy2 = original.slice();
console.log(copy2);

let copy3 = Array.from(original); 
console.log(copy3);

let copy4 = original.concat();
console.log(copy4);

console.log(" ---- ");
copy1.push(99);
console.log(original);
console.log(copy1);

console.log(" Deep Copy---- ");
// deep copay
let deep_copy = original;
console.log(deep_copy);
// Deep Copy

deep_copy.push(99);
console.log(deep_copy);
console.log(original);