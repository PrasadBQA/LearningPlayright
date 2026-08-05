let num = prompt("Enter a number:");
num = Number(num);

if (num % 2 === 0) {
    console.log(num + " is an even number");
}else {
    console.log(num + " is an odd number");
}

// Will get reference error because prompt is a browser specific function
//  and will not work in nodejs environment.