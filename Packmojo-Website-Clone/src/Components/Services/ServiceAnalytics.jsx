import React from 'react';
import styles from './Services1.module.css'; // Import CSS module for styling
import backgroundImage from "../../Dataset/nairobi2.jpg"; // Import your background image
import chatbotImage from "../../Dataset/chatbot.jpeg"; // Import image for Chatbot Development
import dataCollectionImage from "../../Dataset/microsoft azure.png"; // Import image for Data collection and annotation Services
import recommendationImage from "../../Dataset/microsoft azure.png"; // Import image for Recommendation Engines
import customerAnalyticsImage from "../../Dataset/tableau1.jpg"; // Import image for Customer Analytics
import marketingAnalyticsImage from "../../Dataset/tableau1.jpg"; // Import image for Marketing Analytics
import trainingImage from "../../Dataset/training.png"; // Import image for Training and Consultation

const Services = () => {
    const services = [
        {
            title: "Chatbot Development",
            description: "Build AI-powered chatbots tailored to your business needs using advanced NLP techniques. Savannah Inc utilizes tools such as IBM Watson Chatbot, Infobip and Microsoft Azure to create conversational interfaces that enhance customer engagement and support.",
            image: chatbotImage,
        },
        {
            title: "Data Collection and Annotation Services",
            description: "Efficiently collect and annotate data for machine learning and AI projects. Savannah Inc leverages various data annotation tools for accurate labeling and preprocessing, ensuring high-quality datasets for AI model training.",
            image: dataCollectionImage,
        },
        {
            title: "Recommendation Engines",
            description: "Create personalized recommendation systems to enhance user experience. Savannah Inc utilizes tools like Microsoft Azure to analyze user behavior and preferences, enabling accurate and targeted recommendations that improve customer satisfaction.",
            image: recommendationImage,
        },
        {
            title: "Customer Analytics",
            description: "Analyze customer data to gain insights and improve customer satisfaction. Savannah Inc uses analytics tools such as Tableau to visualize and interpret customer behavior, enabling data-driven decision-making and personalized customer experiences.",
            image: customerAnalyticsImage,
        },
        {
            title: "Marketing Analytics",
            description: "Utilize data-driven marketing strategies for better campaign performance. Savannah Inc leverages tools like Tableau for comprehensive marketing analytics and reporting, optimizing marketing efforts and driving business growth.",
            image: marketingAnalyticsImage,
        },
        {
            title: "Training and Consultation",
            description: "Provide training and consultation services on AI, ML, and data science. Savannah Inc offers expertise and guidance using industry-standard tools and technologies, empowering businesses to harness the full potential of AI-driven solutions.",
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


export default Services;
