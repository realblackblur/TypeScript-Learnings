"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Basic Function
function user(name, age) {
    return `Name: ${name}, Age: ${age}`;
}
console.log(user("Blur", 20));
//2ND Test
function formatPrice(amount, currency = "USD") {
    return `${amount} ${currency}`;
}
console.log(formatPrice(20, "USD"));
console.log(formatPrice(10));
//3RD Test
function applyDiscount(price, discountFn) {
    return discountFn(price);
}
console.log(applyDiscount(50, (p) => p * 0.8)); // Output: 40
//# sourceMappingURL=2_function.js.map