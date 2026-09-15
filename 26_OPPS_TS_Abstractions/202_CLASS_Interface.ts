interface Excetable{
    name: string;
    run(): void;
    getStatus(): string;
}
// If a class implements an iterface it must follow/have the same structure/properties of interface
class TestCase implements Excetable{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    run(): void {
        console.log("[RUN] " +this.name);
    }
    getStatus(): string {
        return "PASS";
    }
}

let tc = new TestCase("JS!");
tc.run();
tc.getStatus();
console.log(tc.getStatus());