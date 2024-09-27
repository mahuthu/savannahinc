import React, { useState } from 'react';
import axios from 'axios';
import styles from './contact1.module.css';
import meetingImage from '../Dataset/contact1.jpeg';
import backgroundImage from '../Dataset/bac7.jpg'; // Import your background image

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    comment: '', // Updated field name
    countryCode: '+254' // Default country code
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Combine country code and phone number
    const fullPhoneNumber = `${formData.countryCode}${formData.phone}`;
    
    // Create the final data object to send to the backend
    const dataToSubmit = {
      ...formData,
      phone: fullPhoneNumber,
      countryCode: undefined, // Remove countryCode from the final data object
    };

    try {
      const response = await axios.post('https://savannahinc.co.ke/api/feedback/', dataToSubmit);
      console.log(response.data);
      alert('Feedback submitted successfully');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        comment: '', // Reset comment field
        countryCode: '+254' // Reset countryCode to default
      });
    } catch (error) {
      console.error('There was an error submitting the feedback:', error);
      alert('Error submitting feedback');
    }
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
            <p><span role="img" aria-label="map marker">📍</span> Office 14, 2nd Floor, Three Sails Complex Kahawa Sukari, Kenya</p>
            <p><span role="img" aria-label="phone">📞</span> +254 793 704217</p>
            <p><span role="img" aria-label="email">📧</span> info@savannahinc.co.ke</p>
            <p><span role="img" aria-label="clock">🕒</span> Monday - Friday: 9:00 AM - 5:00 PM</p>
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
                <option value="+254">Kenya (+254)</option>
                <option value="+256">Uganda (+256)</option>
                <option value="+255">Tanzania (+255)</option>
                <option value="+250">Rwanda (+250)</option>
                <option value="+257">Burundi (+257)</option>
                <option value="+251">Ethiopia (+251)</option>
                <option value="+211">South Sudan (+211)</option>
                <option value="+27">South Africa (+27)</option>
                <option value="+234">Nigeria (+234)</option>
                <option value="+20">Egypt (+20)</option>
                <option value="+971">UAE (+971)</option>
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
              <label htmlFor="comment">Message*</label> {/* Updated field name */}
              <textarea
                id="comment"
                name="comment" // Updated field name
                value={formData.comment} // Updated field name
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
