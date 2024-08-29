import React from 'react';
import styles from './case.module.css'; // Assuming you're using CSS Modules
import logo1 from "../Dataset/logo1.png";
import logo2 from "../Dataset/logo2.png";
import logo3 from "../Dataset/logo3.jpeg";
import logo4 from "../Dataset/logo4.jpg";
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
          company="KICC"
          title="ERP System Migration"
          description="Migrated legacy ERP to Microsoft Business Central, enhancing scalability and efficiency."
        />
         <CaseStudyCard 
          logo={logo4}
          company="Slimways Hardware"
          title="IMS Integration and Website Development"
          description="Integrated an Inventory Management System (IMS) and developed a custom website to enhance visibility and operational efficiency."
        />
       
        <CaseStudyCard 
          logo={logo3}
          company="Thika Road Christian School"
          title="Learning Management System Integration"
          description="Implemented an LMS to enhance student performance tracking and support digital learning."
        />
        <CaseStudyCard 
          logo={logo2}
          company="Bidhaa Sasa"
          title="Salesforce CRM Integration"
          description="Integrated Salesforce CRM including platform customization, data migrations and workflow setup."
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
