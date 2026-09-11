let a = 10;
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
        // non-static function
        prasad_fun(){
            return this.name;
        }

        // Static Function
        static summary(){
            return TestRunner.passedTests +"/"+ TestRunner.totalTests + "passed";
        }
}

new TestRunner("LoginTest", true);
new TestRunner("SignupTest", false);
new TestRunner("CartTest", true);
new TestRunner("CheckoutTest", true);
console.log(TestRunner.summary()); // 3/4 passed, because we have created 4 instances of TestRunner class and 3 of them have passed = true 
//console.log(TestRunner.prasad_fun()); // TypeError: TestRunner.prasad_fun is not a function, because prasad_fun is a non-static function and cannot be accessed using the class name
// console.log(prasad_fun());