import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Only POST requests are allowed" });
    }

    const { name, email, serviceType, details } = req.body;

    console.log("Received data:", req.body); // Debugging incoming request

    if (!name || !email || !serviceType || !details) {
        return res.status(400).send({ message: "All fields are required." });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, // Sender email
        to: process.env.RECIPIENT_EMAIL, // Recipient email
        subject: `New Service Request: ${serviceType}`,
        text: `
            You have a new service request:
            ---------------------------------
            Name: ${name}
            Email: ${email}
            Service Type: ${serviceType}
            Details: ${details}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send email." });
    }
}
