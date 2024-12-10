import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = 2000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Nodemailer function
const sendEmail = ({ recipient_email, subject, message }) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "gebeyawbereket8@gmail.com", // Replace with your email
                pass: "bzajnsdvjgnzcxyu", // Replace with your app-specific password
            },
        });

        const mailOptions = {
            from: "gebeyawbereket8@gmail.com", // Sender email
            to: recipient_email, // Recipient email
            subject,
            text: message,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
                return reject({ message: "Failed to send email." });
            }
            return resolve({ message: "Email sent successfully!" });
        });
    });
};

// API routes
app.post("/send_email", async (req, res) => {
    const { name, email, serviceType, details } = req.body;

    // Log incoming request data for debugging
    console.log("Received data:", req.body);

    // Validate request body
    if (!name || !email || !serviceType || !details) {
        return res.status(400).send({ message: "All fields are required." });
    }

    try {
        const subject = `New Service Request: ${serviceType}`;
        const message = `
            You have a new service request:
            ---------------------------------
            Name: ${name}
            Email: ${email}
            Service Type: ${serviceType}
            Details: ${details}
        `;

        // Sending email
        await sendEmail({
            recipient_email: "gebeyawbereket8@gmail.com", // Replace with your recipient email
            subject,
            message,
        });

        res.status(200).send({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error in /send_email:", error);
        res.status(500).send({ message: "Error sending email." });
    }
});

// Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
