import React from 'react';
import styles from './Services1.module.css'; // Import CSS file for styling
import backgroundImage from "../../Dataset/nairobi2.jpg"; // Import your background image
import landingPagesImage from "../../Dataset/initiateafrica.png"; // Import image for landing pages
import socialMediaImage from "../../Dataset/kofiake.png"; // Import image for social media management

const Services = () => {
    const services = [
        
        {
            title: "Custom solutions and Intergrations",
            description: "Let us handle your social media presence while you focus on growing your business. From content creation to community engagement, we help you build a strong brand presence on social platforms.",
            image: socialMediaImage,
        },

        {
            title: "Training and Consultation",
            description: "Our landing page designs are crafted to convert visitors into customers. With compelling visuals and persuasive copywriting, we help you make a lasting impression and drive conversions.",
            image: landingPagesImage,
        },
    ];

     
    return (
        <div className={styles.servicesContainer} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className = {styles.servicesOverlay}>
            <h2 className={styles.servicesHeading}>Business Solution Services</h2>
            <div className={styles.serviceInfo}>
                {services.map((service, index) => (
                        <div key={index} className={`${styles.serviceSection} ${index % 2 === 0 ? `${styles.bgLight} ${styles.textDark}` : styles.bgDark}`}>
                        <div className="service-image">
                        <img src={service.image} alt={service.title} className={styles.serviceImage} />
                        </div>
                        <div className="service-details">
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
    
export default Services;