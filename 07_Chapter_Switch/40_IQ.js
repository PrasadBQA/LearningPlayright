// switch
// 0 - Sunday
// 1 - Monday
// 2 - Tuesday

let day = 2;

switch (day) {
    case 0:
        console.log("Sunday - Rest day");
    case 1:
        console.log("Monday - Sprint planning");
    case 2:
        console.log("Tuesday - Development");
    case 3:
        console.log("Wednesday - Code review");
    case 4:
        console.log("Thursday - Testing");
    case 5:
        console.log("Friday - Deployment & Retrospective");
    case 6:
        console.log("Saturday - Rest day");
    default:
        console.log("No such day exists");
}

// From Tuesday to Saturday, all the cases will be executed because there is no break statement 
// after each case.


/** 
 * This is known as "fall-through" behavior in switch statements. When a case matches, 
 * the code will continue to execute all subsequent cases until a break statement is 
 * encountered or the switch statement ends.
*/