import React from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../Dataset/4.png";
import styles from "./Footer.module.css";

const Footer = () => {
  const iconColors = {
    facebook: '#3b5998',
    instagram: '#e4405f',
    linkedin: '#0077b5',
    twitter: '#1da1f2',
    youtube: '#ff0000',
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className={`col-lg-3 col-md-3 col-12 ${styles.column}`}>
            <ul className={styles.list}>
              <h5 className={styles.heading}>Contact Information</h5>
              <li>Savannah Inc</li>
              <li>Kahawa Sukari, Thika Road,</li>
              <li>Nairobi, Kenya</li>
              <li>Phone1: 0793704217</li>
              <li>Phone2: 0726258462</li>
              <li>Email: info@savannahinc.com</li>
            </ul>
          </div>

          <div className={`col-lg-3 col-md-3 col-12 ${styles.column}`}>
            <ul className={styles.list}>
              <h5 className={styles.heading}>Quick Links</h5>
              <li><NavLink to="/" className={styles.navLink}>Home</NavLink></li>
              <li><NavLink to="/digital" className={styles.navLink}>Digital Presence Services</NavLink></li>
              <li><NavLink to="/business" className={styles.navLink}>Business Solution Services</NavLink></li>
              <li><NavLink to="/analytics" className={styles.navLink}>Analytics, ML and AI Services</NavLink></li>
              <li><NavLink to="/Blog" className={styles.navLink}>Blog</NavLink></li>
            </ul>
          </div>

          <div className={`col-lg-3 col-md-3 col-12 ${styles.column}`}>
            <ul className={styles.list}>
              <h5 className={styles.heading}>Our Solutions</h5>
              <li><NavLink to="/website" className={styles.navLink}>Website Design and Development</NavLink></li>
              <li><NavLink to="/social" className={styles.navLink}>Social Media Management</NavLink></li>
              <li><NavLink to="/business" className={styles.navLink}>Management Softwares</NavLink></li>
              <li><NavLink to="/chatbot" className={styles.navLink}>Chatbots</NavLink></li>
              <li><NavLink to="/recommend" className={styles.navLink}>Recommendation Engines</NavLink></li>
              <li><NavLink to="/collection" className={styles.navLink}>Data collection and annotation</NavLink></li>
              <li><NavLink to="/customer" className={styles.navLink}>Customer Analytics</NavLink></li>
              <li><NavLink to="/marketing" className={styles.navLink}>Marketing Analytics</NavLink></li>
              <li><NavLink to="/training" className={styles.navLink}>Training and Consultation</NavLink></li>
            </ul>
          </div>

          <div className={`col-lg-3 col-md-3 col-12 ${styles.column}`}>
            <img src={logoImage} alt="Logo" className={styles.logo} />
          </div>
        </div>
      </div>

      <div className={styles.bottomFooter}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <p className={styles.copyright}>
                &copy; 2024 Savannah Inc, All Rights Reserved. | Privacy Policy | Terms
              </p>
            </div>

            <div className="col-lg-6 col-12 text-center text-lg-end text-md-end text-sm-center">
              <h4>
                <i className={`fab fa-facebook-f ${styles.socialIcon}`} style={{ color: iconColors.facebook }}></i>
                <i className={`fab fa-instagram ${styles.socialIcon}`} style={{ color: iconColors.instagram }}></i>
                <i className={`fab fa-linkedin ${styles.socialIcon}`} style={{ color: iconColors.linkedin }}></i>
                <i className={`fab fa-twitter-square ${styles.socialIcon}`} style={{ color: iconColors.twitter }}></i>
                <i className={`fab fa-youtube ${styles.socialIcon}`} style={{ color: iconColors.youtube }}></i>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;