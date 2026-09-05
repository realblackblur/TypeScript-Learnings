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

