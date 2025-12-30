import nodemailer from "nodemailer";

export async function sendBookingEmail({ to, bookingData }) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Booking App" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Booking Confirmed",
    html: `
      <h2>Your booking is confirmed</h2>
      <p><strong>Name:</strong> ${bookingData.name}</p>
      <p><strong>Date:</strong> ${bookingData.bookedAt}</p>
      <p><strong>Service:</strong> ${bookingData.serviceTitle}</p>
      <p><strong>Amount:</strong> ${bookingData.cost}</p>
      <p><strong>Address:</strong> ${bookingData.address}, ${bookingData.serviceArea}, ${bookingData.district}</p>
      <p>Thank you for booking with us!</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
