// Project: Order Scheduler
enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
  Urgent = "Urgent",
}

const describeOrder = (
  priority: Priority,
  window: [number, number],
): string => {
  return `${priority} priority order: deliver between ${window[0]}:00 and ${window[1]}:00`;
};

console.log(describeOrder(Priority.High, [9, 12]));
console.log(describeOrder(Priority.Urgent, [14, 18]));
