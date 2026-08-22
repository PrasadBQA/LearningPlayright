// Rest Parameter allows a function to accept any number of arguments, as an array.
// 1. A Function defination can have only one rest parameter and it should be last parameter
// func abc(x, ...y, ...z) --> NOT ALLOWED, func abc(...x, y) -> NOT ALLOWED AS WELL
function collectThings(x, ...y){
    console.log(x);
    console.log(y);
}

console.log(collectThings(3, 1,2,4,5,6,7)); // 3, [1, 2, 4, 5, 6, 7]