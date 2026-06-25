import "../config/env.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  // family: 4,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async ({ name, email, subject, message }) => {
  return transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,

    subject: subject || `New message from ${name}`,

    html: `
      <div>
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "No subject provided"}</p>

        <p>${message}</p>
      </div>
    `,
  });
};
