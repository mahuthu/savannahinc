import React from 'react';
import styles from './case.module.css'; // Assuming you're using CSS Modules
import logo1 from "../Dataset/logo1.png";
import logo2 from "../Dataset/logo2.png";
import logo3 from "../Dataset/logo3.jpeg";
import logo4 from "../Dataset/logo4.jpg";
import cardBackground from '../Dataset/bac4.jpg'; // Import your background image
import backgroundImage from '../Dataset/bac3.jpg'; // Import your background image

const CaseStudies = () => {
  return (
    <div className={styles.caseStudiesContainer}
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    >
      <h2 className={styles.caseStudiesHeading}>Case Studies</h2>
      <div className={styles.caseStudiesGrid}>
        <CaseStudyCard 
          logo={logo1}
          company="Company Name 1"
          title="Project Title 1"
          description="Brief description of the project or solution."
          techDetails="Technical details or methodologies used."
        />
        <CaseStudyCard 
          logo={logo2}
          company="Company Name 2"
          title="Project Title 2"
          description="Brief description of the project or solution."
          techDetails="Technical details or methodologies used."
        />
        <CaseStudyCard 
          logo={logo3}
          company="Company Name 3"
          title="Project Title 3"
          description="Brief description of the project or solution."
          techDetails="Technical details or methodologies used."
        />
        <CaseStudyCard 
          logo={logo4}
          company="Company Name 4"
          title="Project Title 4"
          description="Brief description of the project or solution."
          techDetails="Technical details or methodologies used."
        />
      </div>
    </div>
  );
};

const CaseStudyCard = ({ logo, company, title, description, techDetails }) => {
  return (
    <div 
      className={styles.caseStudyCard} 
      
    >
      <img src={logo} alt={`${company} logo`} className={styles.companyLogo} />
      <h3 className={styles.title}>{company}</h3>
      <h4 className={styles.title1}>{title}</h4>
      <p className={styles.description}>{description}</p>
      <p className={styles.techDetails}>{techDetails}</p>
    </div>
  );
};

export default CaseStudies;
