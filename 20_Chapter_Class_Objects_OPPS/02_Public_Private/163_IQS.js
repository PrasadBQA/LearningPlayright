class APIClient{

    constructor(baseURL){
        this.baseURL = baseURL;
    }
    get(endpoint){
        return this.baseURL + endpoint;
    }

}

let staging = new APIClient("https://staging.api.com");
let production = new APIClient("https://production.api.com");

console.log(staging.get("/users")); // https://staging.api.com/users
console.log(production.get("/prod/users")); // https://production.api.com/prod/users
