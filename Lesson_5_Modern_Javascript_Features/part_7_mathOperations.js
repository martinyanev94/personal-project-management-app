// math.js
export const add = (x, y) => x + y;
export const subtract = (x, y) => x - y;
// main.js
import { add, subtract } from './math.js';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
