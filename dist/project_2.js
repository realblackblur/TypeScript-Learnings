"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sendNotification(type, notification) {
    console.log(`Sending ${type} to ${notification.recipient}: ${notification.message}`);
}
sendNotification("email", {
    message: "Your order shipped",
    recipient: "blur@example.com",
});
sendNotification("sms", {
    message: "Your OTP is 4821",
    recipient: "+91xxxxxxxxxx",
});
//# sourceMappingURL=project_2.js.map