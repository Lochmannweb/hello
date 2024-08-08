'use client'

// components/ContactForm.js
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto border-2 border-gray-700 p-6 rounded-lg shadow-md space-y-4">
      <div>
        <label className="block text-sm font-medium text-white" htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full text-white border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white" htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full text-white border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white" htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full text-black border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white" htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full text-black border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;



