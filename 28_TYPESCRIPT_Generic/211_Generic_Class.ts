// This program stores different types of test data using a generic class.
// It adds data, gets values, and counts the stored items.

class TestDataStorage<GenericData>{
    private items: GenericData[] = [];
    
    add(item: GenericData): void{
        this.items.push(item);
    }

    getFirst(): GenericData{
        // ! tells TypeScript that the first item is not undefined.
        return this.items[0]!;
    }

    getAll(): GenericData[]{
        return this.items;
    }

    count(): number{
        return this.items.length;
    }

}

// Creating Object to Generic-Class

let statuscodeStore = new TestDataStorage<number>();
let testNameStore = new TestDataStorage<string>();

statuscodeStore.add(200);
statuscodeStore.add(300);
statuscodeStore.add(400);
statuscodeStore.add(500);

testNameStore.add("LogIn");
testNameStore.add("SignUp");
testNameStore.add("LogOut");

console.log("Codes: ", statuscodeStore.getAll());
console.log("FirstCode: ", statuscodeStore.getFirst());
console.log("Test: ", testNameStore.getAll());
console.log("Test Count: ", testNameStore.count());