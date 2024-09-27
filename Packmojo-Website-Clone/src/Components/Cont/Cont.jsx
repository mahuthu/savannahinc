import React, { useState } from "react";
import axios from "axios";
import classes from "./Cont.module.css";
import { MapPinned, PhoneCall, MailOpen } from "lucide-react";
import backgroundImage from "../../Dataset/nairobi2.jpg";

const Cont = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://savannahinc.co.ke/api/feedback/', formData);
      console.log(response.data);
      alert('Feedback submitted successfully');
      setFormData({
        name: "",
        email: "",
        comment: "",
      });
    } catch (error) {
      console.error('There was an error submitting the feedback:', error);
      alert('Error submitting feedback');
    }
  };

  return (
    <>
      <div className={classes.contactContainer}>
        <div className={classes.contactSection1}>
          <PhoneCall size={50} />
          <p className={classes.contactInfo}>+254793704217</p>
        </div>
        <hr className={classes.contactDivider} />
        <div className={classes.contactSection1}>
          <MailOpen size={50} color="#41e096" />
          <p className={classes.contactInfo}>info@savannahinc.com</p>
        </div>
        <hr className={classes.contactDivider} />
        <div className={classes.contactSection1}>
          <MapPinned size={50}/>
          <p className={classes.contactInfo}> Kahawa Sukari, Nairobi</p>
        </div>
      </div>

      <div className={classes.formContainer} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className={classes.contactSection}>
          <h2 className={classes.formHeading}>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className={classes.formGroup}>
              <label htmlFor="name" className={classes.formLabel}>
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={classes.formInput}
                required
              />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor="email" className={classes.formLabel}>
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={classes.formInput}
                required
              />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor="comment" className={classes.formLabel}>
                Comment:
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className={classes.formTextarea}
                required
              ></textarea>
            </div>
            <button type="submit" className={classes.formButton}>Submit</button>
          </form>
        </div>
      </div>

      <div className={classes.mapContainer}>
        <h2 className={classes.mapHeading}>Find Us Here</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.529362042036!2d36.82332131475668!3d-1.2868839990559196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f18a0d6e5b0f7%3A0x2b6d5a6f6f8e9b5e!2sSavannah%20Builders!5e0!3m2!1sen!2ske!4v1634392388359!5m2!1sen!2ske"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
          className={classes.mapIframe}
        ></iframe>
      </div>
    </>
  );
};

export default Cont;
