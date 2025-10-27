class Builder {
    constructor() {
        this.result = '';
    }

    add(value) {
        this.result += value;
        return this; // allow chaining by returning the instance
    }

    build() {
        return this.result;
    }
}

const builtString = new Builder()
    .add('Hello, ')
    .add('world!')
    .build();

console.log(builtString); // Output: Hello, world!
