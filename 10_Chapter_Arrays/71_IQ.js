// find() returns the value of the 1st element in an array where predicate is true.
let nums = [10,25,30,45];
let result = nums.find(temp => temp > 20);
console.log(result); // 25

// findIndex

let index = nums.findIndex( temp => temp > 20);
console.log(index);


nums.findLast(n => n > 20); // 45
nums.findLastIndex(n => n > 20); // 3

