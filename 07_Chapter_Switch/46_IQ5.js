let x = 10;

switch (x) {
    case 10:
        let b1 = 1;
        console.log(b1);
        break;
    case 10:
        let b2 = 2;
        console.log(b2);
        break;
    default:
        console.log("No such value exists");
}

// This is not a good practice to have same case values in switch statement. 
// It will only execute the first case and ignore the rest even if they have same value.

// This is not possible in Java
