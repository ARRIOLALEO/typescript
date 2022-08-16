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
