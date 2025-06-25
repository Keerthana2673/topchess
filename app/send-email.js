import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message, course } = req.body;
  const msg = {
    to: 'secl21it03@sairamtap.edu.in',      // your receiving email
    from: 'akshayapc2673@gmail.com',        // your SendGrid verified sender
    subject: `New Inquiry from ${name}`,
    html: `
      <h3>New Contact Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
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
}