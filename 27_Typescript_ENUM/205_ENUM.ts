// An enum (enumeration) is a set of **named constants.**
// nstead of using magic strings like `"pass"`, `"fail"`, `"skip"` scattered throughout -
// -your test code, you define them **ONCE in an enum and use them everywhere.** 
//Numeric enums auto-assign numbers starting from 0: Low=0, Medium=1, High=2 -
// -String enums have explicit values: Pass="PASS", Fail="FAIL"
// Prevent typos -> `TestStatus.PASS`  causes a compile error.

enum TestStatus{
    Pass = "PASS",
    Fail = "FAIL",
    Skip = "SKIP",
    Pending = "PENDING",
    Blocked = "BLOCKED"
}

console.log(TestStatus.Pass);