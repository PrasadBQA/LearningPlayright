// ENCAPSULATION:
// Hides internal implementation details from external code.
// Protects object data from direct access and modification.
// Can be achieved using closures, classes, and private fields (#).

class Person{
    // hide your childs
    #child1;
    #child2;

    // Private
    constructor(name, ch1, ch2){
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }

    getchild1(){
        return this.#child1;
    }

    setchild1(changed_name){
        this.#child1 = changed_name;
    }
}

let p = new Person("Prasad", "Babbu", "Benny");
//console.log(p.#child1); // Property '#child1' is not accessible outside class 'Person' because it has a private identifier
console.log(p.getchild1());
p.setchild1("VIRAD"); // Changing/Setting the #child1 name Babbu -> VIRAD
console.log(p.getchild1());