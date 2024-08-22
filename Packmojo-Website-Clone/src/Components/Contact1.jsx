import React, { useState } from 'react';
import styles from './contact1.module.css';
import meetingImage from '../Dataset/contact1.jpeg';
import backgroundImage from '../Dataset/bac7.jpg'; // Import your background image


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className={styles.contactSection}
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.scheduleSection}>
          <h2>Schedule a Call or Meeting</h2>
          <img src={meetingImage} alt="Team meeting" className={styles.meetingImage} />
          <p>Have questions about pricing plans or Savannah Inc?</p>
          <p>Fill out the form and we will be in touch.</p>
          <div className={styles.location}>
            <h3>Kenya, Nairobi</h3>
            <p><i className="fas fa-map-marker-alt"></i> Office 14, 2nd Floor, Three Sails Complex Kahawa Sukari, Kenya</p>
            <p><i className="fas fa-phone"></i> +254 793 704217</p>
            <p><i className="fas fa-envelope"></i> info@savannahinc.com</p>
            <p><i className="fas fa-clock"></i> Monday - Friday: 9:00 AM - 5:00 PM</p>
          </div>
        </div>
        <div className={styles.formSection}>
          <h2>Get in Touch</h2>
          <p>Please fill in your details below, and our sales manager will contact you.</p>
          <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="company">Company Name*</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter the company name"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number*</label>
            <div className={styles.phoneInput}>
            <select name="countryCode" value={formData.countryCode} onChange={handleChange}>
                  <option value="+254">🇰🇪 +254</option>
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+86">🇨🇳 +86</option>
                  <option value="+234">🇳🇬 +234</option>
                  <option value="+27">🇿🇦 +27</option>
                  {/* Add more country options as needed */}
                </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
        </div>
      </div>
      <div className={styles.mapContainer}>
        <h2 className={styles.mapHeading}>Find Us Here</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.529362042036!2d36.82332131475668!3d-1.2868839990559196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f18a0d6e5b0f7%3A0x2b6d5a6f6f8e9b5e!2sSavannah%20Builders!5e0!3m2!1sen!2ske!4v1634392388359!5m2!1sen!2ske"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
          className={styles.mapIframe}
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;