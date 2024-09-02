import React from 'react';
import styles from './data.module.css';
import supportImage from '../Dataset/data1.png'; // Replace with your actual image path
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
        <h3 className={styles.supportTextWrapper}>Data Protection</h3> {/* Support text at top-left corner */}

      <div className={styles.container}>
        
        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <img src={supportImage} alt="Support Team" className={styles.supportImage} />
          </div>
          <div className={styles.textContent}>
          <h2 className={styles.title}>How do we safeguard your data?</h2>

            <p className={styles.description}>
            Built on a foundation of unwavering commitment to data protection, Savannah Inc employs cutting-edge security measures to safeguard your valuable information. With stringent encryption, meticulous access controls, and adherence to regulatory standards, we provide peace of mind, allowing you to focus on driving your business forward with confidence in the security of your data.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
