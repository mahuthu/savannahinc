import React from 'react';
import styles from './Services1.module.css'; // Import CSS module for styling
import backgroundImage from "../../Dataset/nairobi2.jpg"; // Import your background image
import crmImage from "../../Dataset/Salesforce.jpeg"; // Import image for CRM solutions
import erpImage from "../../Dataset/dyamics.jpg"; // Import image for ERP solutions
import apiImage from "../../Dataset/PesaPal2.jpeg"; // Import image for Third party API integrations
import inventoryImage from "../../Dataset/ims.jpeg"; // Import image for Custom Inventory Management Systems
import projectImage from "../../Dataset/pms.png"; // Import image for Custom Project Management Systems
import learningImage from "../../Dataset/lms.png"; // Import image for Custom Learning Management Systems
import supplyChainImage from "../../Dataset/scm.jpeg"; // Import image for Custom Supply Chain Management Systems
import trainingImage from "../../Dataset/training.png"; // Import image for Training and Consultation

const Services2 = () => {
    const services = [
        {
            title: "CRM Solutions",
            description: "Experience seamless customer relationship management with solutions like Salesforce, ZOHO, Odoo and Microsoft Dynamics. CRM solutions empower businesses to build strong customer relationships, streamline sales processes, and drive growth.",
            image: crmImage,
        },
        {
            title: "ERP Solutions",
            description: "Enhance business operations and efficiency with Microsoft Dynamics ERP solutions. ERP solutions integrate seamlessly with your existing systems, providing real-time insights, automating processes, and optimizing resource allocation.",
            image: erpImage,
        },
        {
            title: "Third Party API Integrations",
            description: "Integrate third-party APIs like Pesapal payment gateway for enhanced functionality. Our API integration services ensure smooth data exchange, improved system interoperability, and expanded feature sets for your applications.",
            image: apiImage,
        },
        {
            title: "Custom Inventory Management Systems (IMS)",
            description: "Optimize inventory management with customized solutions tailored to your business needs. IMS solutions offer real-time inventory tracking, demand forecasting, and inventory optimization, reducing costs and improving efficiency.",
            image: inventoryImage,
        },
        {
            title: "Project Management Systems",
            description: "Efficiently manage projects and tasks with customized project management systems. Project management solutions streamline workflows, enhance collaboration, and ensure timely project delivery with comprehensive project tracking.",
            image: projectImage,
        },
        {
            title: "Learning Management Systems (LMS)",
            description: "Create engaging and effective learning experiences with custom learning management systems. LMS solutions offer personalized learning paths, interactive content, and advanced analytics to drive employee training and development.",
            image: learningImage,
        },
        {
            title: "Supply Chain Management (SCM) Systems",
            description: "Streamline supply chain processes and logistics with customized SCM solutions. SCM systems optimize inventory levels, improve supplier collaboration, and reduce lead times, resulting in a more agile and efficient supply chain.",
            image: supplyChainImage,
        },
        {
            title: "Training and Consultation",
            description: "Get expert training and consultation services on various IT and business topics. Our training programs cover a range of technologies and best practices, empowering your team with the knowledge and skills to drive business growth.",
            image: trainingImage,
        },
    ];

    return (
        <div className={styles.servicesContainer} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles.servicesOverlay}>
                <h2 className={styles.servicesHeading}>Our Solutions</h2>
                <div className={styles.serviceInfo}>
                    {services.map((service, index) => (
                        <div key={index} className={`${styles.serviceSection} ${index % 2 === 0 ? `${styles.bgLight} ${styles.textDark}` : styles.bgDark}`}>
                            <img src={service.image} alt={service.title} className={styles.serviceImage} />
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services2;
