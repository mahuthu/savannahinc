import React from 'react';
import styles from './services2.module.css'; // Import CSS module for styling
import backgroundImage from "../../Dataset/nairobi2.jpg"; // Import your background image
import { Link } from "react-router-dom";

const Services = () => {
    const services = [
        { icon: <i className="fa-solid fa-code"></i>, title: " Website Design and Development", route: "/website" },
        { icon: <i className="fab fa-instagram"></i>, title: " Social Media Management", route: "/social" },
        { icon: <i className="fas fa-project-diagram"></i>, title: "Management Information Systems", route: "/business" },
        { icon: <i className="fa-solid fa-robot"></i>, title: "Chatbot Development", route: "/chatbot" },
        { icon: <i className="fas fa-database"></i>, title: "Data collection and annotation", route: "/collection" },
        { icon: <i className="fas fa-thumbs-up"></i>, title: "Recommendation Engines", route: "/recommend" },
        { icon: <i className="fas fa-chart-line"></i>, title: "Analytics", route: "/analytics" },
        { icon: <i className="fas fa-chalkboard-teacher"></i>, title: "Training and Consultation", route: "/consult" },
    ];

    return (
        <div className={styles.servicesContainer} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})` }}>
            <div className={styles.servicesOverlay}>
                <h2 className={styles.servicesHeading}>Our Solutions</h2>
                <p className={styles.servicesHead}>Our solutions are designed to help you achieve your business goals. Our culture is to satisfy our client's needs by offering customized solutions that are in line with the latest technology and best IT practices.</p>
                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <Link key={index} to={service.route} className={styles.serviceIconContainer}>
                            <div className={styles.serviceIcon}>{service.icon}</div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
