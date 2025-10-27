class Person {
    #age;

    constructor(name, age) {
        this.name = name;
        this.#age = age; // private field
    }

    celebrateBirthday() {
        this.#age += 1;
        console.log(`Happy ${this.#age}th Birthday, ${this.name}!`);
    }
}

const person = new Person('Alice', 30);
person.celebrateBirthday(); // Output: Happy 31th Birthday, Alice!
