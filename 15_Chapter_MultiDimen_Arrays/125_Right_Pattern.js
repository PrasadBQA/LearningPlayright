// if n = 3 -> user will provide n value
// *
// * *
// * * *

// let n = 3;

console.log("Please enter n value (press enter, then Ctrl+Z and enter to end):");
const n = require('fs').readFileSync(0, 'utf-8');
console.log(`User inputted value is: ${n}`);


for(let i = 0; i<n; i++)
{
    for(let j = 0; j<=i; j++)
    {
        process.stdout.write("*"+" ");
    }
    console.log(""); // for new line
}