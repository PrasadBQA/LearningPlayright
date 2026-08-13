let arr = [1,2,5,6];
console.log(arr);

// Add Element to END
arr.push(7);
console.log(arr);

// Remove last element
arr.pop();
console.log(arr);

// Push multiple elements
arr.push(8, 9);
console.log(arr);

// Add to Begining
arr.unshift(3);
console.log(arr);

// Remove from beginig
arr.shift();
console.log(arr);


// Splice
let arr1 = [1,2,3,4,5,6];
arr1.splice(3,2); // it 3 - index, 2 - number of elements that needs to be removed from index => o/p [1,2,3,6]
console.log(arr1);

// at this point arr1 is [1,2,3,6]

arr1.splice(2, 0, 99); // from 2nd index, remove 0 element/s, add 99 infront of 2nd index => [1,2,99,3,6]
console.log(arr1);

// Splice(where, howManyToRemove, whatToAddMaybe)
// arr1 [1,2,99,3,6]
arr1.splice(2,1,10,20); // remove 1 element at 2nd(99) index and add 10,20
console.log(arr1);

// updated arr1[1,2,10,20,3,6]
arr1.splice(1,0,30,40,50); // at 1st index removes 0 element, adds 30,40,50 before 1st index o/p: [1,30,40,50,2,10,20,3,6]
console.log(arr1);
