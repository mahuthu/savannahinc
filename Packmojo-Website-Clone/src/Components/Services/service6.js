import React from 'react';
import UniqueSVG from '../UniqueSVG';
import accountingIcon from '../../Dataset/accounting&finance.svg';
import hrmsIcon from '../../Dataset/hrms.svg';
import businessIcon from '../../Dataset/businessICON.svg';
import crmIcon from '../../Dataset/CRMICON.svg';
import erpIcon from '../../Dataset/ERPICON.svg';
import imssIcon from '../../Dataset/ims4.svg';
import logisticsIcon from '../../Dataset/logisticsICON.svg';
import styles from './service6.module.css';
import cardBackground from '../../Dataset/bac4.jpg'; // Import your background image
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
  return (
    <div className={styles.softwareModules}
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    >
      <h2 className={styles.heading}>Software Modules</h2>
      <div className={styles.modulesContainer}>
        <ModuleCard
          title="IMS"
          description="Automate financial tasks for efficient account management"
          iconName="ImssIcon"
          iconColor="#FF5733"
        />
        <ModuleCard
          title="ERP"
          description="Streamline your enterprise resource planning."
          iconName="ErpIcon"
          iconColor="#FF5733"
        />
        <ModuleCard
          title="HRMS"
          description="Optimize performance with strategic decisions based on actionable insights."
          iconName="HrmsIcon"
          iconColor="#3498DB"
        />
        <ModuleCard
          title="CRM"
          description="Enhance customer relationships and improve sales with powerful CRM tools."
          iconName="CrmIcon"
          iconColor="#2ECC71"
        />
        <ModuleCard
          title="Accounting & Finance"
          description="Keep track of finances and manage accounts efficiently."
          iconName="AccountingIcon"
          iconColor="#F1C40F"
        />
        <ModuleCard
          title="Business Management"
          description="Handle business operations with comprehensive tools."
          iconName="BusinessIcon"
          iconColor="#F1C40F"
        />
        <ModuleCard
          title="Logistics Management"
          description="Optimize logistics and supply chain operations."
          iconName="LogisticsIcon"
          iconColor="#F1C40F"
        />
      </div>
    </div>
  );
};

const ModuleCard = ({ title, description, iconName, iconColor }) => {
  // Get the correct icon path
  const svgData = iconPaths[iconName];

  return (
    <div 
      className={styles.moduleCard} 
      
    >
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="/crm" className={styles.readMore}>Read More ↗</a>
      </div>
      <div className={styles.cardIcon}>
        {svgData ? <UniqueSVG svgData={svgData} fillColor={iconColor} /> : null}
      </div>
    </div>
  );
};

export default SoftwareModules;
