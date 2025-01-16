import React, { useEffect, useRef } from 'react';
import UniqueSVG from '../UniqueSVG';
import accountingIcon from '../../Dataset/accounting&finance.svg';
import hrmsIcon from '../../Dataset/hrms.svg';
import businessIcon from '../../Dataset/businessICON.svg';
import crmIcon from '../../Dataset/CRMICON.svg';
import erpIcon from '../../Dataset/ERPICON.svg';
import imssIcon from '../../Dataset/ims4.svg';
import logisticsIcon from '../../Dataset/logisticsICON.svg';
import styles from './service6.module.css';
import backgroundImage from '../../Dataset/bac3.jpg'; // Import your background image

// Map icon names to their respective paths
const iconPaths = {
  ImssIcon: imssIcon,
  ErpIcon: erpIcon,
  HrmsIcon: hrmsIcon,
  CrmIcon: crmIcon,
  AccountingIcon: accountingIcon,
  BusinessIcon: businessIcon,
  LogisticsIcon: logisticsIcon,
};

const SoftwareModules = () => {
  const modulesRef = useRef(null);

  useEffect(() => {
    const targetElement = modulesRef.current;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.getElementsByClassName(styles.moduleCard);
          Array.from(cards).forEach(card => {
            card.classList.add(styles.visible);
          });
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  return (
    <div 
      className={styles.softwareModules}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 className={styles.heading}>Software Modules</h2>
      <div className={styles.modulesContainer} ref={modulesRef}>
        <ModuleCard
          title="IMS"
          description="Automate inventory tracking and management for streamlined operations."
          iconName="ImssIcon"
          iconColor="#FF5733"
          link="/ims"
        />
        <ModuleCard
          title="ERP"
          description="Streamline your enterprise resource planning to integrate and automate business processes."
          iconName="ErpIcon"
          iconColor="#1ABC9C"
          link= "/erp"
        />
        <ModuleCard
          title="LMS"
          description=" Optimize training and educational performance with strategic insights and tools."
          iconName="HrmsIcon"
          iconColor="#D35400"
          link= "/lms"
        />
        <ModuleCard
          title="CRM"
          description="Enhance customer relationships and improve sales with powerful CRM tools."
          iconName="CrmIcon"
          iconColor="#2ECC71"
          link= "/crm"
        />
        
        <ModuleCard
          title="PMS"
          description="Handle business operations with comprehensive project management tools."
          iconName="BusinessIcon"
          iconColor="#F1C40F"
          link="/pms"
        />
        <ModuleCard
          title="Logistics Management"
          description="Optimize logistics and supply chain operations for efficient delivery and distribution."
          iconName="LogisticsIcon"
          iconColor="#9B59B6"
          link="/scm"
        />
      </div>
    </div>
  );
};

const ModuleCard = ({ title, description, iconName, iconColor, link }) => {
  // Get the correct icon path
  const svgData = iconPaths[iconName];

  return (
    <div className={styles.moduleCard}>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className={styles.readMore}>Read More ↗</a>
      </div>
      <div className={styles.cardIcon}>
        {svgData ? <UniqueSVG svgData={svgData} fillColor={iconColor} /> : null}
      </div>
    </div>
  );
};

export default SoftwareModules;
