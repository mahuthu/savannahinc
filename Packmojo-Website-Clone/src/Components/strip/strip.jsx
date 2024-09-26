import React from 'react';
import styles from './strip.module.css';
import { Twitter, Facebook, Linkedin, Phone } from 'lucide-react';

const ContactStrip = () => {
  return (
    <div className={styles.contactStrip}>
      <div className={styles.contactInfo}>
        <Phone className={styles.phoneIcon} />
        <span className={styles.phoneNumber}>+254-793-704-217</span>  
      </div>
      <div className={styles.socialIcons}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
          <Twitter className={`${styles.icon} ${styles.twitterIcon}`} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
          <Facebook className={`${styles.icon} ${styles.facebookIcon}`} />
        </a>
        <a href="https://www.linkedin.com/company/savannahinc" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
          <Linkedin className={`${styles.icon} ${styles.linkedinIcon}`} />
        </a>
      </div>
    </div>
  );
};

export default ContactStrip;