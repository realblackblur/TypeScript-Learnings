interface BaseNotification {
  message: string;
  recipient: string;
}

interface SmsNotification extends BaseNotification {}

interface EmailNotification extends BaseNotification {
  subject: string;
}

type NotificationType = "sms" | "email";

function sendNotification(
  type: NotificationType,
  notification: BaseNotification,
): void {
  console.log(
    `Sending ${type} to ${notification.recipient}: ${notification.message}`,
  );
}

sendNotification("email", {
  message: "Your order shipped",
  recipient: "blur@example.com",
});
sendNotification("sms", {
  message: "Your OTP is 4821",
  recipient: "+91xxxxxxxxxx",
});
