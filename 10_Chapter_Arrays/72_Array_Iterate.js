let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) 
    {
        console.log(i, tests[i]);
    
    }
console.log("-----------");
// for...of (cleanest for values)
for (let test of tests)
{
    console.log(test); // value
}

console.log("-----------------");

// forEach (no return value)
tests.forEach((test, index) => 
{
    console.log(`${index}: ${test}`); // it'll have indexation

})

console.log("---------------");


let students = ["Ben", "John", "Om", "Prasad"];
for(let student in students)
{
    console.log(student, "->",students[student] );
}