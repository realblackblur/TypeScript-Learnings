"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let status = "pending";
status = "active";
console.log(`Current status: ${status}`);
function parseInput(data) {
    if (typeof data === "string") {
        return data;
    }
    else {
        throw new Error("Invalid input: Expected a string.");
    }
}
console.log(parseInput("Hello, World!")); // Valid
console.log(parseInput(42)); // Invalid, will cause a TypeScript error
let point = { x: 10, y: 20 };
console.log(`Point coordinates: (${point.x}, ${point.y})`);
//# sourceMappingURL=index.js.map