class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

const myCar = new Car('Ford', 'Mustang', 2021);
console.log(myCar.displayInfo()); // Output: 2021 Ford Mustang
