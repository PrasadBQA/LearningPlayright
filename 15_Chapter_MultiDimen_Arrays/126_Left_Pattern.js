// if n = 5 -> user will provide n value
// *****
// ****
// ***
// **
// *

// let n = 5;



console.log("Please enter n value (press enter, then Ctrl+Z and enter to end):");
const n = require('fs').readFileSync(0, 'UTf-8');

for(let i =n; i>=1; i--)
{
    for(let j = 1;j<=i; j++)
    {
        process.stdout.write(""+ "*");
    }
    console.log("");
}