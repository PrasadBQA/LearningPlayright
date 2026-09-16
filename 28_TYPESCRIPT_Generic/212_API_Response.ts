// This program creates API responses with a status code and different data types.
// It uses a generic function and prints string and boolean responses.

function wrapResponse<GeniricResponseData>(statusCode: number, data: GeniricResponseData): { statusCode: number; data: GeniricResponseData } {
    return { statusCode: statusCode, data: data };
}

let userResp = wrapResponse<string>(200, "admin");
console.log(userResp);


let flagResp = wrapResponse<boolean>(200, true);
console.log(flagResp);