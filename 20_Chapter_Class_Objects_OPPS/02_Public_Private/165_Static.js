class TestRunner{

    static totalTests = 0;
    static passedTests = 0;

    constructor(name, passed){
        this.name = name;
        TestRunner.totalTests++; // TestRunner.totalTests is a static field, it can be accessed using the class name
        if(passed){
            TestRunner.passedTests++; // TestRunner.passedTests is a static field, it can be accessed using the class name
        }
    }
}

let test1 = new TestRunner("LoginTest", true);
let test2 = new TestRunner("SignupTest", false);
let test3 = new TestRunner("dashboardTest", true);
let test4 = new TestRunner("supportTest", true);

console.log(TestRunner.totalTests); // 4, because we have created 4 instances of TestRunner class
console.log(TestRunner.passedTests); // 3, because we have created 3 instances of TestRunner class with passed = true

console.log(test1.name); // LoginTest, because name is a public field and can be accessed outside the class
console.log(test2.name); // SignupTest, because name is a public field and can be accessed outside the class
console.log(test3.name); // dashboardTest, because name is a public field and can be accessed outside the class
console.log(test4.name); // supportTest, because name is a public field and can be accessed outside the class

// name - non static
// totalTests - static
// passedTests - static
// passed - non static