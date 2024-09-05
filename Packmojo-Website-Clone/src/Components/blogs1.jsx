import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './blogs1.module.css';
import hrmsImage from '../Dataset/future2.png';
import accountingImage from '../Dataset/future3.png';
import backgroundImage from '../Dataset/future.png';

const NewsGrid = () => {
  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent default behavior
    alert('Coming Soon!');
  };

  return (
    <div className={styles.caseStudiesContainer}>
      <h2 className={styles.caseStudiesHeading}>Feature News and Innovation</h2>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.mainNews}>
            <img src={backgroundImage} alt="Automation" className={styles.mainImage} />
            <div className={styles.mainContent}>
              <span className={styles.tag}>AUTOMATION</span>
              <h2 className={styles.mainTitle}>
                How automation and machine learning are changing the business dynamics in Kenya.
              </h2>
              <Link to="#" className={styles.readMore} onClick={handleLinkClick}>
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className={styles.sideNews}>
            <div className={styles.newsItem}>
              <img src={hrmsImage} alt="HRMS" className={styles.sideImage} />
              <div className={styles.sideContent}>
                <span className={styles.tag}>ERP</span>
                <h3 className={styles.sideTitle}>
                  Top 5 Ways a Robust ERP Software Can Deliver a World-Class Employee Experience.
                </h3>
                <Link to="#" className={styles.readMore} onClick={handleLinkClick}>
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className={styles.newsItem}>
              <img src={accountingImage} alt="CRM" className={styles.sideImage} />
              <div className={styles.sideContent}>
                <span className={styles.tag}>CRM</span>
                <h3 className={styles.sideTitle}>
                  A Checklist for Choosing the Right CRM Software for your Business in Kenya.
                </h3>
                <Link to="#" className={styles.readMore} onClick={handleLinkClick}>
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.viewAllButton} onClick={handleLinkClick}>
            View all News
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsGrid;
