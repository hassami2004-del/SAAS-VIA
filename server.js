require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/send-email", async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      type,
      budget,
      msg
    } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Free Audit Request",

      text: `
New Free Audit Request

Name: ${name}
WhatsApp Number: ${phone}
Email: ${email || "Not provided"}
Business Type: ${type}
Monthly Budget: ${budget || "Not provided"}

What do they need help with?
${msg}
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Error sending email"
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});