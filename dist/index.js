"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumbers = void 0;
/**
 * create a promise that resolves after some time
 * @param n number of milliseconds before promise  resolves
 */
function timeout(n) {
    return new Promise((res) => setTimeout(res, n));
}
async function addNumbers(a, b) {
    await timeout(500);
    return a + b;
}
exports.addNumbers = addNumbers;
//== Run the program ==//
;
(async () => {
    console.log(await addNumbers(3, 4));
})();
const age = 6;
// between 500 and 1000
const RANDOM_WAIT_TIME = Math.round(Math.random() * 500) + 500;
let startTime = new Date();
let endTime;
setTimeout(() => {
    endTime = 0;
    endTime = new Date();
}, RANDOM_WAIT_TIME);
function displayCar(car) {
    let str = `${car.brand} ${car.year}`;
    if (car.battery !== undefined) {
        str += car.battery;
    }
    return str;
}
console.log(displayCar({ brand: "toyota", year: 2002, color: "red" }));
const car = ["hello", "world", 100];
const cars = [];
cars.push("mario");
function data(information) {
    if (information instanceof Error) {
        console.log(information);
    }
    else {
        console.log(information);
    }
}
function sums(a, b) {
    const c = (a + b);
    return c;
}
const myNewButton = document.createElement("button");
function addClickHandler(ev) {
    this.disabled = false;
}
myNewButton.addEventListener("click", addClickHandler);
class Car {
    constructor(name, type, vimNumber) {
        this.name = name;
        this.type = type;
        this.vimNumber = vimNumber;
        this.name = name;
        this.type = type;
        this.vimNumber = vimNumber;
    }
    openTheDoorNow() {
        console.log(`the car ${this.name} , is the type ${this.type}`);
    }
}
const newCar = new Car("12", "45", 155);
console.log(newCar);
// newCar.openTheDoorNow(); this one is not accessible here because is privateKey
class Boat {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    float() {
        console.log("im floatting");
    }
}
class Truck {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
class Plain {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
const newTransport = new Plain("jose");
if (newTransport instanceof Boat) {
    newTransport.float();
}
else if (newTransport instanceof Plain) {
    console.log("this is a new one");
}
else if (newTransport instanceof Truck) {
    console.log("this is a new data");
}
else {
    const notExist = newTransport;
}
// we need to exhausts all the possibilities before to use never method.
