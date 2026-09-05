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
const Ritika = {
    status: "pending",
    amount: 10000,
};
const Halwi = {
    status: "failed",
    amount: 300,
    reason: "AD2F28340",
};
for (const payment of [Subham, Ritika, Halwi]) {
    console.log(describePayment(payment));
}
//# sourceMappingURL=project_3.js.map