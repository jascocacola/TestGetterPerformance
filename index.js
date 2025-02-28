class TestClass {
    _value = 'test';

    get value () {
        return this._value;
    }

    getValue () {
        return this._value;
    }
}

const iterations = 100000000;
const testInstance = new TestClass();

let getterAccessTime = 0, getMethodAccessTime = 0, propertyAccessTime = 0;
let propertyAccessTimeIterations = 0, getterAccessTimeIterations = 0, getMethodAccessTimeIterations = 0;
let start;

// Measure getter access time
const measureGetterAccessTime = () => {
    start = performance.now();
    for (let i = 0; i < iterations; i++) {
        const temp = testInstance.value;
    }
    getterAccessTime += performance.now() - start;
    getterAccessTimeIterations += iterations;
};

const measureGetMethodAccessTime = () => {
    start = performance.now();
    for (let i = 0; i < iterations; i++) {
        const temp = testInstance.getValue();
    }
    getMethodAccessTime += performance.now() - start;
    getMethodAccessTimeIterations += iterations;
};

const measurePropertyAccessTime = () => {
    start = performance.now();
    for (let i = 0; i < iterations; i++) {
        const temp = testInstance._value;
    }
    propertyAccessTime += performance.now() - start;
    propertyAccessTimeIterations += iterations;
};

const measures = [measureGetterAccessTime, measureGetMethodAccessTime, measurePropertyAccessTime];

function shuffle (array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

for (let i = 0; i < 100; i++) {
    shuffle(measures);

    measures.forEach(measure => measure());
}

console.log(`Property access time: ${propertyAccessTime / propertyAccessTimeIterations} ms`);
console.log(`Getter access time: ${getterAccessTime / getterAccessTimeIterations} ms`);
console.log(`Get method access time: ${getMethodAccessTime / getMethodAccessTimeIterations} ms`);