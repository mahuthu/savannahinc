import React from 'react';
import styles from './strip.module.css';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactStrip = () => {
  return (
    <div className={styles.contactStrip}>
      <div className={styles.contactInfo}>
        <span>Get in touch:</span>
        <span className={styles.phoneNumber}>+254-793-704-217</span>
      </div>
      <div className={styles.socialIcons}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className={styles.icon} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className={styles.icon} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default ContactStrip;

