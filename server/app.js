import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export default async function handler(req, res) {
    // Allow only POST requests
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Only POST requests are allowed" });
    }

    const { name, email, serviceType, details } = req.body;

    console.log("Received data:", req.body); // Debugging incoming request

    // Ensure all fields are provided
    if (!name || !email || !serviceType || !details) {
        return res.status(400).send({ message: "All fields are required." });
    }

    // Check if the environment variables are loaded correctly
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
    console.log("RECIPIENT_EMAIL:", process.env.RECIPIENT_EMAIL);

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465, // Use SSL (port 465)
        secure: true, // Enable SSL
        auth: {
            user: process.env.EMAIL_USER, // Email sender
            pass: process.env.EMAIL_PASS, // App password
        },
    });

    // Email content
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
        // Attempt to send the email
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!"); // Log for confirmation
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        // Log the error for debugging
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send email." });
    }
}
