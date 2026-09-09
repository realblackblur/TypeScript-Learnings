//-----------------------Basic Types & Inference--------------------------------
let status: "pending" | "active" | "closed" = "pending";
status = "active";
console.log(`Current status: ${status}`);

function parseInput(data: unknown): string {
  if (typeof data === "string") {
    return data;
  }
  throw new Error("Invalid input: Expected a string.");
}
console.log(parseInput("Hello, World!"));

let point: [x: number, y: number] = [10, 20];
console.log(`Point coordinates: (${point[0]}, ${point[1]})`);

//------------------------------Basic Function----------------------------------
function user(name: string, age: number): string {
  return `Name: ${name}, Age: ${age}`;
}
console.log(user("Blur", 20));

function formatPrice(amount: number, currency: string = "USD"): string {
  return `${amount} ${currency}`;
}
console.log(formatPrice(20, "USD"));
console.log(formatPrice(10));

function applyDiscount(
  price: number,
  discountFn: (p: number) => number,): number {
  return discountFn(price);
}
console.log(applyDiscount(50, (p) => p * 0.8));

//---------------------------------Generic--------------------------------------
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

const numberResult = getFirst([10, 20, 30]);

if (numberResult !== undefined) {
  console.log("First number:", numberResult);
} else {
  console.log("No number found");
}

const stringResult = getFirst(["Apple", "Banana"]);

if (stringResult !== undefined) {
  console.log("First string:", stringResult);
} else {
  console.log("No string found");
}

const emptyResult = getFirst([]);

if (emptyResult !== undefined) {
  console.log("First item:", emptyResult);
} else {
  console.log("Nothing here");
}

//Generic Constrains
// Non-generic
function tagItem(item: { id: number }): { id: number } {
  item.id = item.id + 1000;
  return item;
}

// Generic
function tagGenericItem<T extends { id: number }>(item: T): T {
  item.id = item.id + 1000;
  return item;
}

const userNonGeneric = {
  id: 5,
  name: "Blur",
  role: "admin"
};

const userGeneric = {
  id: 5,
  name: "Blur",
  role: "admin"
};

// Non-generic
const result1 = tagItem(userNonGeneric);

console.log(result1.id);   // Works
// console.log(result1.name);   // Compilation Error

// Generic
const result2 = tagGenericItem(userGeneric);

console.log(result2.id);   // Works
console.log(result2.name); // Works
console.log(result2.role); // Works

//Generic Interfaces
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

interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

const payment1: ApiResponse<SuccessPayment> = {
  success: true,
  data: Subham
}

const payment2: ApiResponse<string[]> = {
  success: false,
  data: [],
  error: "Payment Failed"
}

console.log(payment1);
console.log(payment2);
