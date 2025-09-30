const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail", // Or use SMTP
    auth: {
      user: process.env.EMAIL_USER, // set in environment variables
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Contact: ${subject}`,
      text: `From: ${name} (${email})\n\n${message}`
    });
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error sending message." });
  }
});

// Newsletter endpoint
app.post("/api/newsletter", (req, res) => {
  const { email } = req.body;
  console.log("New subscriber:", email);
  res.json({ success: true, message: "Subscribed successfully!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
