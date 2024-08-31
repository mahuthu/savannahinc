import React from 'react';
import styles from './Services1.module.css'; // Import CSS file for styling
import backgroundImage from "../../Dataset/nairobi2.jpg"; // Import your background image
import ecommerceImage from "../../Dataset/website.png"; // Import image for e-commerce
import socialMediaImage from "../../Dataset/whatsapp.png"; 
// Import image for social media management

const Services = () => {
    const services = [
        {
            title: "Website Design and Development",
            description: "We specialize in creating robust e-commerce solutions tailored to your business needs. From user-friendly shopping carts to secure payment gateways, we ensure a seamless online shopping experience. Our landing page designs also are crafted to convert visitors into customers. With compelling visuals and persuasive copywriting, we help you make a lasting impression and drive conversions",
            image: ecommerceImage,
        },
        
        {
            title: "Social Media Management",
            description: "Let us handle your social media presence while you focus on growing your business. From content creation to community engagement, We help you build a strong brand presence on social platforms. we also specialize in integrating WhatsApp Business into your marketing strategy. WhatsApp Business offers a direct and personal communication channel with customers.",
            image: socialMediaImage,
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

    
export default Services;