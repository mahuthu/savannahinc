import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './solutions.module.css';
import backgroundImage from '../Dataset/bac2.jpg'; // Import your background image
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// import sme from "../Dataset/sme.jpeg";


const ERPLanding = () => {
  return (
    <div className={styles.caseStudiesContainer}
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    >
    <h2 className={styles.caseStudiesHeading}>Solutions Built for Scalability</h2>
    <div className={styles.container}>
      <div className={styles.mainCard}>
        <div className={styles.cardContent}>
          <h2 className={styles.title}>Business Solution Services</h2>
          <p className={styles.description}>
          Empower your business with integrated solutions like CRM, ERP, IMS, LMS and more to streamline operations and enhance productivity
          </p>
          <button className={styles.button}>
              <Link to="/business" className={styles.buttonLink}>
                Learn More <ArrowRight size={16} />
              </Link>
            </button>
        </div>
        {/* <div className={styles.imageContainer}>
          <img src={sme} alt="ERP Dashboard" className={styles.image} />
        </div> */}
        <div className={styles.forSMEs}>For SMEs</div>
      </div>
      <div className={styles.smallCardsContainer}>
        <div className={`${styles.smallCard} ${styles.blueCard}`}>
          <h3 className={styles.smallCardTitle}>Digital Prescence Services</h3>
          <p className={styles.smallCardDescription}>
          Boost your online presence with expert website design, development, and social media management to connect with your audience effectively.

          </p>
          <button className={styles.button} style={{ backgroundColor: "#f0f4ff", border: "1px solid #fff", color: "#000" }}>
              <Link to="/digital" className={styles.buttonLink}>
                Learn More <ArrowRight size={16} />
              </Link>
            </button>
        </div>
        <div className={`${styles.smallCard} ${styles.greenCard}`}>
          <h3 className={styles.smallCardTitle} style={{color:"#f0f4ff"}}>Analytics, ML and AI Services</h3>
          <p className={styles.smallCardDescription}style = {{color:"#fff"}}>
          Unlock insights with customer and marketing analytics, and enhance customer interaction with AI-powered chatbots.

          </p>
          <button className={styles.button} style={{ backgroundColor: "#e4ebfe", border: "1px solid #e4ebfe", color: "#000" }}>
              <Link to="/analytics" className={styles.buttonLink}>
                Learn More <ArrowRight size={16} />
              </Link>
            </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ERPLanding;
