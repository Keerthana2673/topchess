const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');

dotenv.config();
console.log("API Key Loaded:", process.env.SENDGRID_API_KEY ? "Yes" : "No");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/send-email', async (req, res) => {
  const { name, email, message, course } = req.body;

  const msg = {
    to: 'secl21it03@sairamtap.edu.in',
    from: 'akshayapc2673@gmail.com',
    subject: `New Inquiry from ${name}`,
    html: `
      <h3>New Contact Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  };

  try {
    console.log("Sending message with data:", msg);
    const response = await sgMail.send(msg);
    console.log("SendGrid response:", response);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error("SendGrid Error:", error.response?.body || error.message);
    res.status(500).json({
      message: 'Failed to send email.',
      error: error.response?.body || error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});