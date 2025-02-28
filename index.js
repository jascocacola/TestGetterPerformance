class TestClass {
    constructor(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    getValue () {
        return this._value;
    }
}

const iterations = 1000000;
const testInstance = new TestClass(42);

// Measure property access time
let start = performance.now();
for (let i = 0; i < iterations; i++) {
    let temp = testInstance._value;
}
let propertyAccessTime = performance.now() - start;

// Measure getter access time
start = performance.now();
for (let i = 0; i < iterations; i++) {
    let temp = testInstance.value;
}
let getterAccessTime = performance.now() - start;

// Measure getter access time
start = performance.now();
for (let i = 0; i < iterations; i++) {
    let temp = testInstance.getValue();
}
let getMethodAccessTime = performance.now() - start;

console.log(`Property access time: ${propertyAccessTime} ms`);
console.log(`Getter access time: ${getterAccessTime} ms`);
console.log(`Get method access time: ${getMethodAccessTime} ms`);