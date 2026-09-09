"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describePayment(payment) {
    if (payment.status === "success") {
        return `Success: $${payment.amount}, ID: ${payment.transactionId}`;
    }
    else if (payment.status === "pending") {
        return `Pending: $${payment.amount}`;
    }
    else {
        return `Failed: $${payment.amount}, Reason: ${payment.reason}`;
    }
}
const Subham = {
    status: "success",
    amount: 5000,
    transactionId: "AD2F28340",
};
const payment1 = {
    success: true,
    data: Subham
};
const payment2 = {
    success: false,
    data: [],
    error: "Payment Failed"
};
console.log(payment1);
console.log(payment2);
//# sourceMappingURL=project_8.js.map