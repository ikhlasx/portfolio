export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Here you would typically send an email or store the contact message
    // For example, using a service like SendGrid, Mailgun, or storing in a database

    // For demonstration purposes, we'll just return a success response
    // In a real app, you would add the actual email sending logic here

    // Mock success
    return res.status(200).json({ message: 'Message sent successfully!' });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
}