// Project: Order Scheduler
var Priority;
(function (Priority) {
    Priority["Low"] = "Low";
    Priority["Medium"] = "Medium";
    Priority["High"] = "High";
    Priority["Urgent"] = "Urgent";
})(Priority || (Priority = {}));
const describeOrder = (priority, window) => {
    return `${priority} priority order: deliver between ${window[0]}:00 and ${window[1]}:00`;
};
console.log(describeOrder(Priority.High, [9, 12]));
console.log(describeOrder(Priority.Urgent, [14, 18]));
export {};
//# sourceMappingURL=project_4.js.map