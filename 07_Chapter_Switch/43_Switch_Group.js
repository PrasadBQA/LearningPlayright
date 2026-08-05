let browser = "Firefox";

switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium based browser");
        break;
    case "Firefox":
        console.log("Firefox based browser");
        break;
    case "Safari":
        console.log("Safari based browser");
        break;
    default:
        console.log("No such browser exists");
}