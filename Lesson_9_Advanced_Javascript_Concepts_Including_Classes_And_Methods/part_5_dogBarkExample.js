class Dog {
    constructor(name) {
        this.name = name;
    }
}

Dog.prototype.bark = function() {
    console.log(`${this.name} says Woof!`);
};

const myDog = new Dog('Rex');
myDog.bark(); // Output: Rex says Woof!
