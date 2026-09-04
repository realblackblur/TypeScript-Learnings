//Basic Function
function user(name: string, age: number): string {
  return `Name: ${name}, Age: ${age}`;
}
console.log(user("Blur", 20));

//2ND Test
function formatPrice(amount: number, currency: string = "USD"): string {
  return `${amount} ${currency}`;
}
console.log(formatPrice(20, "USD"));
console.log(formatPrice(10));

//3RD Test
function applyDiscount(
  price: number,
  discountFn: (p: number) => number,
): number {
  return discountFn(price);
}
console.log(applyDiscount(50, (p) => p * 0.8)); // Output: 40
