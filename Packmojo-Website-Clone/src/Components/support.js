import React from 'react';
import styles from './support.module.css';
import supportImage from '../Dataset/support1.png'; // Replace with your actual image path
import backgroundImage from '../Dataset/bac3.jpg'; // Import your background image

const Support = () => {
  return (
    <section className={styles.supportSection}
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    >
        <h3 className={styles.supportTextWrapper}>Support</h3> {/* Support text at top-left corner */}

      <div className={styles.container}>
        
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <img src={supportImage} alt="Support Team" className={styles.supportImage} />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.title}>24x7 Assistance</h2>
            <p className={styles.description}>
              From troubleshooting to guidance, our expert team is always on standby, ensuring swift
              resolutions and uninterrupted productivity for your business. With round-the-clock assistance,
              you can navigate challenges seamlessly, maximizing the value of our products at any hour.
            </p>
            <button className={styles.contactButton}>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
