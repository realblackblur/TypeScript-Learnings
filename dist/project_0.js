"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//-----------------------Basic Types & Inference--------------------------------
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
//------------------------------Basic Function----------------------------------
function user(name, age) {
    return `Name: ${name}, Age: ${age}`;
}
console.log(user("Blur", 20));
function formatPrice(amount, currency = "USD") {
    return `${amount} ${currency}`;
}
console.log(formatPrice(20, "USD"));
console.log(formatPrice(10));
function applyDiscount(price, discountFn) {
    return discountFn(price);
}
console.log(applyDiscount(50, (p) => p * 0.8));
//# sourceMappingURL=project_0.js.map