let score = [45, 82, 91, 60, 73];

let grades = score.map(item_score=>item_score>70 ? 'Pass' : 'Fail');
console.log(grades); // prints transformed array, here o/p ['fail','pass','pass','fail','pass']
// map is generally used whenever we want to 
// transform the array into a new array of the same size.



// Filter - you will not get same size array, might get different size array

let passing = score.filter(s => s >= 70); // 
console.log(passing);
