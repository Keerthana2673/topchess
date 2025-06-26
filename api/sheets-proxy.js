export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbyzYZNzCzRPHZRiJ1IpNtfPzzczXdFWOMD9Vm1YmDl7ErQ2kviE9GNDE8ZCXLwuj8bZMw/exec", {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json' }
    });

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { success: false, raw: text };
    }
    res.status(response.status).json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}