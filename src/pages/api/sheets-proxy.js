export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyzYZNzCzRPHZRiJ1IpNtfPzzczXdFWOMD9Vm1YmDl7ErQ2kviE9GNDE8ZCXLwuj8bZMw/exec';
    
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });

    // Handle Google Script response
    const data = await response.json();
    return res.status(response.status).json(data);
    
  } catch (error) {
    console.error('Proxy error:', error);
    return res.status(500).json({ 
      error: 'Internal Server Error',
      details: error.message 
    });
  }
}