export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyzYZNzCzRPHZRiJ1IpNtfPzzczXdFWOMD9Vm1YmDl7ErQ2kviE9GNDE8ZCXLwuj8bZMw/exec';
    
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
      redirect: 'follow'
    });

    const data = await response.text();
    res.status(response.status).send(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}