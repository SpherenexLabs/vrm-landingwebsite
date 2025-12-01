import React, { useState } from 'react';
import './ContactCTA.css';

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact-cta">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p className="contact-subtitle">
            Ready to start your project? Contact us today for a free consultation and quotation.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Visit Us</h4>
                <p>15th Cross, A Block No.27<br/>Ground Floor, Bhuvaneshwari Nagar<br/>Magadi Main Road, Bangalore - 560091</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Call Us</h4>
                <p>+91 9900315454</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email Us</h4>
                <p>info@vrmgroups.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">⏰</div>
              <div>
                <h4>Working Hours</h4>
                <p>Mon - Sat: 9:00 AM - 6:00 PM<br/>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Request a Quote</h3>
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Project Details"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary btn-full">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
