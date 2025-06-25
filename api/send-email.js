import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  console.log("API handler triggered");
  console.log("Request method:", req.method);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  console.log("Received body:", req.body);
  if (!process.env.SENDGRID_API_KEY) {
    console.error("Missing SendGrid API key in environment variables");
    return res.status(500).json({ message: 'Server misconfiguration: missing API key' });
  }

  const { name, email, message, course } = req.body;

  if (!name || !email || !message) {
    console.error("Missing required fields");
    return res.status(400).json({ message: 'Name, email, and message are required' });
  }

  const msg = {
    to: 'secl21it03@sairamtap.edu.in',
    from: 'akshayapc2673@gmail.com',
    subject: `New Inquiry from ${name}`,
    html: `
      <h3>New Contact Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Course:</strong> ${course || '(not specified)'}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  };

  try {
    const sgResponse = await sgMail.send(msg);
    console.log("SendGrid response:", sgResponse);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('SendGrid error:', error.response?.body || error.message || error);
    return res.status(500).json({
      message: 'Email failed',
      error: error.response?.body || error.message || 'Unknown error'
    });
  }
}