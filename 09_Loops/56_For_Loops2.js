// for(let _1 = 0; _1 <= 10; _1++)
// {
//     console.log("Value of _1:", _1); // _1 is valid variable name, but not a good practice to use numbers in variable names
// }

// for(let pramod = 0; pramod > 1; pramod++)
// {
//     console.log("Value of pramod:", pramod); // will not execute as the condition is false
// }


// for(let js = 0; ;  js++)
// {
//     console.log("Value of js:", js); // This is valid and will execute infinitely as the condition is missing, which is treated as true
// }

for (let student = 0; student < 18; student++)
{
    if(student >= 15)
    {
        console.log("Student is eligible for voting:", student); // will execute for student values 15, 16 and 17
    }
    else
    {
        console.log("Student is not eligible for voting:", student);
    }
    
}