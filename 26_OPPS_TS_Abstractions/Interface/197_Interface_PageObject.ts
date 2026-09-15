// An interface defines the SHAPE of an object.
//  what properties it must have and what types those **properties must be.** 
// It's like a contract. If an object says "I follow this interface," it MUST have all the required properties.

// Interfaces don't generate any JavaScript code. 
// They exist ONLY at compile time for type checking. After compilation, interfaces completely disappear from the output.

/*An interface can extend one or more other interfaces, while a class can implement 
one or more interfaces.*/

interface BasePage{
    url: string,
    title: string
}

interface LoginPage extends BasePage{
    usernameSelector: string,
    passwordSelector: string,
    loginButtonSelector: string
}

interface FreeTrailPage extends BasePage{
    usernameSelector: string,
    submitButtonSelector: string
}

let loginPage: LoginPage =  {
    url: "/login",
    title: "Login Page",
    usernameSelector: "#username",
    passwordSelector: "#passcode",
    loginButtonSelector: "#login-btn"
}

let freetrailPage: FreeTrailPage ={
    url: "/free-trial",
    title: "Free Page",
    usernameSelector: "#username",
    submitButtonSelector: "#submit",
}

console.log("URL:", loginPage.url);
console.log("Title:", loginPage.title);
console.log("Username field:", loginPage.usernameSelector);