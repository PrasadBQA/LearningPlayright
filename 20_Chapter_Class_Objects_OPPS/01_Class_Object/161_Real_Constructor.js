class TestCase{

    constructor(name, status, priority, description){ // name, status, priority, description are parameters of the constructor method

        this.cname = name;  // cname is a property of the object, name is a parameter passed to the constructor when creating an instance of the class.
        this.status = status;
        this.priority = priority;
        this.description = description;
    }

    display(){ // is a method of class TestCase

        console.log(this.cname +"->" + this.status +"->"+ this.priority +"->"+ this.description);

    }

}

let login_ref = new TestCase("Login", "Pass", "High", "Login functionality is working fine");
    // object is created from class TestCase, constructor is called when object is created
let sign_ref = new TestCase("SignUp", "Fail", "Medium", "SignUp functionality is not working");
sign_ref.display();
login_ref.display();

console.log(login_ref.name); // undefined, because name is not a property of the object, cname is a property of the object
console.log(login_ref.cname); // Login, because cname is a property of the object