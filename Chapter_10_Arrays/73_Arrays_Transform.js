let score = [45, 82, 91, 60, 73];

let grades = score.map(item_score=>item_score>70 ? 'Pass' : 'Fail');
console.log(grades);

// Map My app is generally used whenever we want to 
// transform the array into a new array of the same size.



// Filter

let passing = score.filter(s => s >= 70);
console.log(passing);