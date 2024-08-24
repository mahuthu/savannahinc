import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import AboutUs1 from "../Components/Aboutus/Aboutus6";
import styles from "../Components/social.module.css";
import backgroundImage from '../Dataset/bac3.jpg'; // Import your background image
import backgroundImage1 from '../Dataset/bac4.jpg'; // Import your background image

const Training = () => {
    const services = [
        {
            title: "Social Media Management",
            description: "Enhance your social media presence and engagement across various platforms.",
            platforms: [
                { name: "Facebook", icon: "fab fa-facebook", color: "#4267B2" },
                { name: "Instagram", icon: "fab fa-instagram", color: "#E4405F" },
                { name: "Twitter", icon: "fab fa-twitter", color: "#1DA1F2" },
                { name: "LinkedIn", icon: "fab fa-linkedin", color: "#0077B5" },
            ],
        },
        {
            title: "WhatsApp Business Integration",
            description: "Seamlessly integrate WhatsApp Business into your operations for improved customer support and marketing.",
            features: [
                { name: "Business Setup", icon: "fab fa-whatsapp", color: "#25D366" },
                { name: "Mobile Integration", icon: "fas fa-mobile-alt", color: "#555555" },
                { name: "Automated Messaging", icon: "fas fa-robot", color: "#0099FF" },
                { name: "Analytics", icon: "fas fa-chart-bar", color: "#FF6B6B" },
            ],
        },
    ];

    return (
        <div className={styles.app}>
            <Navbar />
            <AboutUs1 mainHeading="Social Media Management" subHeading="Home » Services" />
            <div
             style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
            <main className={styles.main}>
                {services.map((service, index) => (
                    <section key={index} className={styles.serviceSection}
                    style={{
                        backgroundImage: `url(${backgroundImage1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        <div className={styles.iconGrid}>
                            {(service.platforms || service.features).map((item, idx) => (
                                <div key={idx} className={styles.iconItem}>
                                    <i className={`${item.icon} ${styles.icon}`} style={{ color: item.color }}></i>
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
                
                <section className={styles.ctaSection}>
                    <h2>Ready to Elevate Your Social Media Presence?</h2>
                    <p>Let our experts guide you through the world of social media and WhatsApp Business integration.</p>
                    <button className={styles.ctaButton}>Get Started</button>
                </section>
            </main>
            </div>

            <Footer />
        </div>
    );
};

export default Training;