import React from 'react';
import styles from './strip.module.css';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactStrip = () => {
  return (
    <div className={styles.contactStrip}>
      <div className={styles.contactInfo}>
        <span className={styles.label}>Get in touch:</span>
        <span className={styles.phoneNumber}>+254-793-704-217</span>
      </div>
      <div className={styles.socialIcons}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
          <Twitter className={`${styles.icon} ${styles.twitterIcon}`} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
          <Instagram className={`${styles.icon} ${styles.instagramIcon}`} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
          <Linkedin className={`${styles.icon} ${styles.linkedinIcon}`} />
        </a>
      </div>
    </div>
  );
};

export default ContactStrip;
