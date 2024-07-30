import React from 'react';
import './Contact.css'; // Import CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-section">
        <i className="fas fa-phone fa-3x contact-icon"></i>
        <p className="contact-text">+254793704217</p>
      </div>
      <div className="contact-divider"></div>
      <div className="contact-section">
        <i className="fas fa-envelope fa-3x contact-icon"></i>
        <p className="contact-text">info@savannahinc.com</p>
      </div>
      <div className="contact-divider"></div>
      <div className="contact-section">
        <i className="fas fa-map-marker fa-3x contact-icon"></i>
        <p className="contact-text">Nairobi, Kenya</p>
      </div>
    </div>
  );
};

export default Contact;
