// Read-Only

interface Point{
    readonly x: number;
    readonly y: number;
    z: number;
}

const point: Point = {
    x: 10,
    y: 20,
    z: 30
}

//point.x = 15; // Cannot assign to 'x' because it is a read-only property.

console.log("Z before updating: "+point.z);
point.z = 60;
console.log("Z after updating: "+point.z);