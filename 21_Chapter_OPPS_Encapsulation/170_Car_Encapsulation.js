class Car{
    #engine; // Private

    constructor(name, engineName){
        this.name = name;
        this.#engine = engineName;
    }
    getEngine(){
        return this.#engine;
    }
    setEngine(nameEngine){
        this.#engine = nameEngine;
    }
}

let mustang = new Car("Mustang", "V8");
console.log(mustang.getEngine());
mustang.setEngine("V9");
console.log(mustang.getEngine());