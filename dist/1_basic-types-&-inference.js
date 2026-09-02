"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let status = "pending";
status = "active";
console.log(`Current status: ${status}`);
function parseInput(data) {
    if (typeof data === "string") {
        return data;
    }
    throw new Error("Invalid input: Expected a string.");
}
console.log(parseInput("Hello, World!"));
let point = [10, 20];
console.log(`Point coordinates: (${point[0]}, ${point[1]})`);
//# sourceMappingURL=1_basic-types-&-inference.js.map