import React from 'react';
import styles from './Services1.module.css';
import backgroundImage from "../../Dataset/nairobi2.jpg";
import crmImage from "../../Dataset/crm2.jpg";
import erpImage from "../../Dataset/erp2.png";
import apiImage from "../../Dataset/PesaPal2.jpeg";
import inventoryImage from "../../Dataset/ims.jpeg";
import projectImage from "../../Dataset/pms1.png";
import learningImage from "../../Dataset/lms.png";
import supplyChainImage from "../../Dataset/scm1.jpg";
import trainingImage from "../../Dataset/training.png";
import posImage from "../../Dataset/pos2.png";

const Services2 = () => {
    const services = [
        {
            title: "CRM Solutions",
            description: "Experience seamless customer relationship management with solutions like Salesforce, ZOHO, Odoo and Microsoft Dynamics.",
            image: crmImage,
        },
        {
            title: "ERP Solutions",
            description: "Enhance business operations and efficiency with ERP solutions.",
            image: erpImage,
        },
        {
            title: "Third Party API Integrations",
            description: "Integrate third-party APIs like Pesapal payment gateway for enhanced functionality.",
            image: apiImage,
        },
        {
            title: "Inventory Management Systems",
            description: "Optimize inventory management with customized solutions tailored to your business needs.",
            image: inventoryImage,
        },

        {
            title: "POS Solutions", // New POS service
            description: "Streamline sales and transaction processes with tailored Point of Sale systems for your business.",
            image: posImage,
        },

        {
            title: "Project Management Systems",
            description: "Efficiently manage projects and tasks with customized project management systems.",
            image: projectImage,
        },
        {
            title: "Learning Management Systems",
            description: "Create engaging and effective learning experiences with custom learning management systems.",
            image: learningImage,
        },
        {
            title: "Supply Chain Management Systems",
            description: "Streamline supply chain processes and logistics with customized SCM solutions.",
            image: supplyChainImage,
        },
        {
            title: "Training and Consultation",
            description: "Get expert training and consultation services on various IT and business solutions.",
            image: trainingImage,
        },
    ];

    return (
        <div className={styles.servicesContainer} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles.servicesOverlay}>
                <h2 className={styles.servicesHeading}>Our Solutions</h2>
                <div className={styles.serviceGrid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <div className={styles.serviceImageWrapper}>
                                <img src={service.image} alt={service.title} className={styles.serviceImage} />
                            </div>
                            <div className={styles.serviceContent}>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDescription}>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services2;