class ICICI{
    #balance;
    constructor(name, balance){
        this.#balance = balance;
        this.name = name;
    }
    getBalance(){
        return this.#balance;
    }
    setBalance(balance, isCashier){
        if(isCashier){
            this.#balance = balance;
        }else{
            console.log("Not Allowed");
        }
    }
}

let babbu = new ICICI("Babbu", 10000);
console.log(babbu.getBalance());
babbu.setBalance(1000000, false);
console.log(babbu.getBalance());

let babbu_father = new ICICI("Babbu", 10001);
console.log(babbu_father.getBalance());
babbu_father.setBalance(1000000, true);
console.log(babbu_father.getBalance());