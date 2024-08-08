// pages/api/test-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Test Email',
      text: 'This is a test email from Nodemailer.',
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Test email sent successfully!' });
    } catch (error) {
      console.error('Error sending test email:', error);
      res.status(500).json({ message: `Failed to send test email. Error: ${error.message}` });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
