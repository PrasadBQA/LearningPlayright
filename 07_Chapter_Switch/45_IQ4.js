let testscore = 85;

switch (true) {
    case (testscore >= 95):
        console.log("A grade - Outstanding Performance");
        break;
    case (testscore >= 85):
        console.log("B grade - Exceeds Expectations");
        break;
    case (testscore >= 70):
        console.log("C grade - Meets Expectations");
        break;
    case (testscore >= 50):
        console.log("D grade - Needs Improvement");
        break;
    default:
        console.log("F grade - Failing Performance");
}