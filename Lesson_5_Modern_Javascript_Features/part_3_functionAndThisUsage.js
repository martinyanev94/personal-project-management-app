// Traditional function
const traditionalFunction = function(a, b) {
    return a + b;
};

// Arrow function
const arrowFunction = (a, b) => a + b;

console.log(traditionalFunction(3, 4)); // 7
console.log(arrowFunction(3, 4)); // 7
class Timer {
    constructor() {
        this.seconds = 0;
    }

    start() {
        setInterval(function() {
            this.seconds++; // `this` refers to the global object
            console.log(this.seconds);
        }, 1000);
    }
}

const timer = new Timer();
timer.start(); // NaN or unexpected results
class Timer {
    constructor() {
        this.seconds = 0;
    }

    start() {
        setInterval(() => {
            this.seconds++; // Now `this` refers to the Timer instance
            console.log(this.seconds);
        }, 1000);
    }
}

const timer = new Timer();
timer.start(); // Counts seconds correctly
