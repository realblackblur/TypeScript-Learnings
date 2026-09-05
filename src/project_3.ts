//Project: Payment Status Handler
type SuccessPayment = {
  status: "success";
  amount: number;
  transactionId: string;
};

type PendingPayment = {
  status: "pending";
  amount: number;
};

type FailedPayment = {
  status: "failed";
  amount: number;
  reason: string;
};

type Payment = PendingPayment | SuccessPayment | FailedPayment;

function describePayment(payment: Payment): string {
  if (payment.status === "success") {
    return `Success: $${payment.amount}, ID: ${payment.transactionId}`;
  } else if (payment.status === "pending") {
    return `Pending: $${payment.amount}`;
  } else {
    return `Failed: $${payment.amount}, Reason: ${payment.reason}`;
  }
}

const Subham: Payment = {
  status: "success",
  amount: 5000,
  transactionId: "AD2F28340",
};

const Ritika: Payment = {
  status: "pending",
  amount: 10000,
};
const Halwi: Payment = {
  status: "failed",
  amount: 300,
  reason: "AD2F28340",
};

for (const payment of [Subham, Ritika, Halwi]) {
  console.log(describePayment(payment));
}
