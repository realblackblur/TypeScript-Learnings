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
