// Contact form submission to Formspree
export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;
      
      // Replace with your actual Formspree form ID
      const formspreeUrl = 'https://formspree.io/f/your-form-id';
      
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      
      if (response.ok) {
        res.status(200).json({ message: 'Message sent successfully!' });
      } else {
        res.status(400).json({ error: 'Failed to send message' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
