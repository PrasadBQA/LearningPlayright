class Student{
    static collegeName = "ABC College";

    constructor(name){
        this.name = name;
    }
    static display(){
        return this.name + " is studying in " + Student.collegeName;
    }
    // Non-Static Function
    nsf(){
     console.log(this.name);
    }
}

let John = new Student("John");
let Alice = new Student("Alice");
let summu = new Student("summu");
let Bob = new Student("Bob");

console.log(Student.collegeName);
console.log(Alice.name);
console.log(Bob.name);