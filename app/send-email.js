import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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
    await sgMail.send(msg);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('SendGrid error:', error.response?.body || error.message);
    return res.status(500).json({ message: 'Email failed', error: error.response?.body || error.message });
  }
}