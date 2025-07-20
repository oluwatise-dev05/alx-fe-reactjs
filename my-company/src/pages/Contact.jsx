import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Contact Us</h2>
      {submitted ? (
        <p style={{ color: 'green' }}>Thank you for your message, {formData.name}!</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.75rem' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.75rem' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{ width: '100%', padding: '0.75rem' }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#007bff',
OBOBOBOB              color: '#fff',
OB              border: 'none',
              cursor: 'pointer',
OBOB            }}
OBOBOBOBOBOBOB          >
OBOBOBOBOBOB            Send Message
          </button>
OBOB        </form>
OBOBOBOBOBOBOB      )}
OB    </div>
  );
OBOB};

export default Contact;

