// JavaScript does not support traditional multiple inheritance—a class cannot directly inherit from more than one parent class using the extends keyword
// class Child extends Parent1, Parent2 is invalid syntax

// Multiple Inheritance can be achived in JS by Using:
// 1. Mixins, 2. Class Factory / Function Composition, 3. Composition via Object Delegation

// Mixin 1: Adds logging ability

let LoggerMixin = function(Base){
    return class extends Base{
        log(msg){
            console.log("[Log]" + msg);
        }
    }
}

let ScreenshotMixin = function(Base){
    return class extends Base{
        takeScreenshot(){
            console.log("[SCREENSHOT] captured");
        }
    };

};

// Base Class

class TestCase{
    constructor(name){
        this.name = name;
    }

    run(){
        console.log("Runnin: "+ this.name);
    }
}


// Apply Both MIXINS

class smartTest extends ScreenshotMixin(LoggerMixin(TestCase)){
    constructor(name){
        super(name);
    }
}


let t = new smartTest("Login Flow");
t.run();
t.log("Test Started");
t.takeScreenshot();
