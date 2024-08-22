import React from 'react';
import styles from './Insights.module.css';

// Import your images here
import automationImage from "../Dataset/future.png";
import hrmsImage from '../Dataset/future2.png';
import accountingImage from '../Dataset/future3.png';
import backgroundImage from '../Dataset/bac3.jpg'; // Import your background image


const insightsData = [
  {
    image: automationImage,
    category: 'AUTOMATION',
    title: 'How automation and machine learning is changing the business dynamics in KSA',
    link: '#'
  },
  {
    image: hrmsImage,
    category: 'HRMS',
    title: 'Empowering Employees: Unveiling the Transformative Potential of HRMS Software',
    link: '#'
  },
  {
    image: accountingImage,
    category: 'ACCOUNTING',
    title: 'How can Accounting Software Help You Enhance Financial Performance in Saudi Arabia?',
    link: '#'
  }
];

const Insights = () => {
  return (
    <section className={styles.insightsSection}
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.sectionHeading}>
        <h2>Blogs</h2>
      </div>
      <div className={styles.insightsContainer}>
        {insightsData.map((insight, index) => (
          <div key={index} className={styles.insightCard}>
            <img src={insight.image} alt={insight.category} className={styles.insightImage} />
            <div className={styles.insightContent}>
              <p className={styles.category}>{insight.category}</p>
              <h3 className={styles.title}>{insight.title}</h3>
              <a href={insight.link} className={styles.readMore}>Read More ↗</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insights;