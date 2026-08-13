function validationStatusCode(status)
{
    if (status >= 200 && status <=300)
    {
        console.log("Request is fine!: ");
    }
}

const validateStatusCode_Exp = function(status){

    if(status >= 200 && status <= 300)
    {
        console.log("Request is fine!: ")
    }
}

const validateStatusCode_Arrow = (status) => {

    if(status >= 200 && status <= 300)
    {
        console.log("Request is fine: ");
    }
}

validationStatusCode(200)
validateStatusCode_Exp(200);
validateStatusCode_Arrow(200);
