//   *
//  ***
// ***** 

console.log("Please enter n value (press enter, then Ctrl+Z and enter to end):");
const n = Number(require('fs').readFileSync(0, 'utf-8').trim());

console.log("Pyramid Pattern:-----------------:");
for(let i = 1;i<=n; i++)
{
    let row = ""; // Empty
    for(let j = 1;j<=n-i; j++)
    {
        row += " ";
    }
    for(let k = 1; k<=2*i-1; k++)
    {
        row += "*";
    }
    console.log(row);
}

console.log("----------------------------:");


for(let i = 1; i <= n; i++)
{
    let row = "";

    if(i<n)
    {
        for(let j = 1;j <= n-i; j++)
    {
        row += " "
    }
    }
    for(let k = 1; k <= i; k++)
    {
        row += "*";
    }
    console.log(row);
}