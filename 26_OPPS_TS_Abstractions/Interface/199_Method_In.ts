interface Calculator{
    add(a:number, b:number): number;
    substract(a:number, b:number): number;
}

const calc: Calculator = {
    add: (a,b) => a+b,
    substract: (a,b) => a-b,
}

const calc2: Calculator ={
    
    add: (a,b) => a+b,
    substract: (a,b) => a-b,
}

calc.add(3,4);
console.log(calc.add(5,3));

interface India{
    standUpNationalAnthem(a:string):string;
}

const vash:India = {
    standUpNationalAnthem: (a) => ""
}
