let status = 0;
console.log(typeof  status);
switch (status) {
    case false:
        console.log("false is matched");
        break;
    case 0:
        console.log("0 is matched");
        break;
}

// this is strict comparison, so 0 is not equal to false, 
// so it will not match with false, but it will match with 0.