console.log("Please enter some input (press enter, then Ctrl+Z and enter to end):");
const data = require('fs').readFileSync(0, 'utf-8');
console.log("User input:", data);
console.log("Initial User Input Type:", typeof data); // This will log 'string' since readFileSync returns a string when encoding is specified

const userinput = data;
const uderinputNumber = Number(userinput);
console.log("User input as number:", uderinputNumber);
console.log("After Conversion Type:", typeof uderinputNumber); // This will log 'number' since we converted the string to a number    