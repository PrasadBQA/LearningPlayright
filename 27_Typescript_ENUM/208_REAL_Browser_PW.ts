enum Browsers{
    Firefox = "firefox",
    Chrome = "chrome",
    Edge = "edge",
    Safari = "safari"
}

function LaunchBrowser(browsers: Browsers){
    switch(browsers){
        case Browsers.Firefox:
            console.log("Launching Firefox browser");
            break;

        case Browsers.Chrome:
            console.log("Launching Chrome browser");
            break;

        case Browsers.Edge:
            console.log("Launching Edge browser");
            break;

        case Browsers.Safari:
            console.log("Launching Safari browser");
            break;
    }
}

LaunchBrowser(Browsers.Chrome);