// api/submit-inquiry.js - CommonJS format
module.exports = async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, company, message } = req.body;

    console.log('Received form data:', { name, email, company });

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Get access key from environment variable
    const accessKey = process.env.WEB3FORMS_BE_ACCESS_KEY;
    console.log('API key exists:', !!accessKey);

    if (!accessKey) {
      return res
        .status(500)
        .json({ message: 'Server configuration error - API key missing' });
    }

    // Create the payload for Web3Forms
    const formData = {
      access_key: accessKey,
      name,
      email,
      company,
      message,
      subject: `Domain Inquiry: BuiltEnvirons.com - Qualified Inquiry`,
      from_name: 'BuiltEnvirons.com Form',
      to_email: 'builtenvirons@proton.me',
    };

    // Import node-fetch for Vercel serverless functions
    const fetch = (await import('node-fetch')).default;

    console.log('Submitting to Web3Forms...');

    // Submit to Web3Forms API
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log('Web3Forms response:', data);

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res
        .status(400)
        .json({ message: data.message || 'Form submission failed' });
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return res
      .status(500)
      .json({ message: 'Internal server error', error: error.toString() });
  }
};
