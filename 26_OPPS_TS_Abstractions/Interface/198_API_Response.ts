// Interfaces are used in API Testing

interface APIResponse{
    statusCode: number,
    body: string,
    header?: object, // ? represented optional struture
    responseTime: number
}

let resposeData: APIResponse = {
    statusCode: 200,
    body: "{}",
    responseTime: 200
    // header is optional in APIResponse structure so, not mandatory to follow the structure
}

console.log("Status:", resposeData.statusCode);
console.log("Boday:", resposeData.body);


let responseData2: APIResponse = {
    statusCode: 200,
    body: "{}",
    header: {},
    responseTime: 300
}

