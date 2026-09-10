class Browser{

    constructor(name){
        this.name = name;
        this.version = "1.0"; // version is a property of the object, initialized to "1.0" when the object is created.
        this.isOpen = true; // isOpen is a property of the object, initialized to true when the object is created.
        // isOpen is not passed as a parameter to the constructor, it is initialized to true when the object is created.

        console.log(name + " Browser is launched");
    }

    startBrowser(){
        console.log("Starting Browser");
    }

    closeBrowser(){
        console.log("Closing Browser");
    }

}

let chrome = new Browser("Chrome"); // object is created from class Browser, constructor is called when object is created
let firefox = new Browser("Firefox");

console.log(chrome.isOpen);
console.log(firefox.isOpen);
chrome.closeBrowser();
chrome.startBrowser();