// class constructor is a special method that is called when an object is created from 
// a class. It is used to initialize the object's properties and set up any necessary 
// state. In JavaScript, the constructor method is defined using the "constructor" keyword within the class definition.

// Constructor value is defined by from where we are calling the constructor.
// But not from where we are defining the constructor. Constructor is called when 
// we create an object of class. Constructor is called only once when we create an 
// object of class. Constructor is used to initialize the properties of the object. 
// Constructor is used to set the initial state of the object. Constructor is used to 
// perform any setup or initialization tasks that are required for the object to function properly.


class Car{
    // constructor() {
    //     // this is default constructor, // if we don't write constructor, JS will create default constructor for us
    // }

    // Parameterized Constructor
    constructor(assigned_name){
        this.name = assigned_name;
        // here name is a property of the object, and assigned_name is a parameter passed to the constructor when creating an instance of the class.
        // this.name is used to refer to the name property of the current object, and it is assigned the value of the assigned_name parameter.
        // this keyword is used to refer to the current instance of the class, and it allows us to access and modify the properties of that instance.
        // In this case, we are using the constructor to initialize the name property of the Car object with the value passed as assigned_name when creating a new instance of the Car class.
        // 
        
    }
}