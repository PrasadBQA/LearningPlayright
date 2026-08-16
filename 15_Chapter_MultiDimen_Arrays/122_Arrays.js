// 1D Array, list -> duplicate elements

let results = ['Pass','Fail','Pass'];



// 2D - array of arrays (like a table/grid)
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


let mad = [
    [1,2,3,4] // 1x4
];


let grid = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let i = 0; i<3; i++)
{
    for(let j = 0; j<3; j++)
    {
        process.stdout.write(grid[i][j]+"");
        //process.stdout.write(String(grid[i][j])); // both are same
        // It is a Node.js API call. process.stdout.write(...) writes to the terminal and expects a string or Buffer. 
        // in a browser or some JS environment that is not Node, then 'process' does not exist:
    }
    console.log("");
}

//console.log(grid);