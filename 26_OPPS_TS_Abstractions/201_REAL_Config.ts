interface TestConfig{
    browser: string;
    headless: boolean;
    baseUrl: string;
    timeout?: number;
    retries?: number;
}

let localConfig: TestConfig ={
    browser: "chrome",
    headless: true,
    baseUrl: "https://staging.app.com"
}

let ciConfig : TestConfig = {
    browser: "Firefox",
    headless: false,
    baseUrl: "http://localhost:3000",
    timeout: 10000,
    retries: 3
};

console.log("CI:", ciConfig.browser, "| timeout:", ciConfig.timeout);
console.log("Local:", localConfig.browser, "| timeout:", localConfig.timeout);
// will get undefined if value of property is not defined