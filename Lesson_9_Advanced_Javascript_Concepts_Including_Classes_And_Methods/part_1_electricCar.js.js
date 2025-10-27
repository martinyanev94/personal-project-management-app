class ElectricCar extends Car {
    constructor(make, model, year, batteryCapacity) {
        super(make, model, year);
        this.batteryCapacity = batteryCapacity;
    }

    displayInfo() {
        return `${super.displayInfo()} with a battery capacity of ${this.batteryCapacity} kWh`;
    }
}

const myElectricCar = new ElectricCar('Tesla', 'Model S', 2021, 100);
console.log(myElectricCar.displayInfo()); // Output: 2021 Tesla Model S with a battery capacity of 100 kWh
