import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import SubService from "../../Components/SubService";
import styles from "../../Components/crm.module.css";
import erpImage from "../../Dataset/infobip.png";
import backgroundImage from '../../Dataset/bac1.jpg'; // Import your background image

const ChatbotDevelopment = () => {
    const chatbotFeatures = [
        { icon: "fas fa-robot", title: "Chatbot Design" },
        { icon: "fas fa-code", title: "Chatbot Development" },
        { icon: "fas fa-cogs", title: "Integration" },
        { icon: "fas fa-lightbulb", title: "AI-Powered Solutions" },
    ];

    const chatbotSolutions = [
        "Chatbot Design: Create intuitive and user-friendly chatbot interfaces for enhanced user experience.",
        "Chatbot Development: Build custom chatbot solutions tailored to your business needs and customer requirements.",
        "Integration: Integrate chatbots seamlessly with your existing systems and platforms for unified communication.",
        "AI-Powered Solutions: Implement AI and machine learning capabilities for intelligent chatbot responses and decision-making.",
    ];

    return (
        <div className={styles.app}>
            <Navbar />
            <AboutUs1 mainHeading="Chatbot Development" subHeading="Home &raquo; Services" />
            
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <main className={styles.main}>
                    <section className={styles.hero}>
                        <div className={styles.heroContent}>
                            <h1>Chatbot Development</h1>
                            <p>
                                Transform customer interactions with intelligent chatbot solutions. Our chatbot development services cover design, development, integration, and AI-powered solutions for seamless customer engagement and support.
                            </p>
                        </div>
                        <img src={erpImage} alt="Chatbot Development" className={styles.heroImage} />
                    </section>

                    <section className={styles.features}>
                        {chatbotFeatures.map((feature, index) => (
                            <div key={index} className={styles.featureCard}>
                                <i className={`${feature.icon} ${styles.featureIcon}`}></i>
                                <h3>{feature.title}</h3>
                            </div>
                        ))}
                    </section>

                    <section className={styles.description}>
                        <p>
                            Chatbot Development solutions include:
                        </p>
                        <ul>
                            {chatbotSolutions.map((solution, index) => (
                                <li key={index}>{solution}</li>
                            ))}
                        </ul>
                    </section>

                    <section className={styles.callToAction}>
                        <p>
                            Savannah Inc specializes in Chatbot Development Solutions that enhance customer interactions and drive business growth. Let us create conversational experiences that delight your customers.
                        </p>
                        <button className={styles.ctaButton}>Get Started</button>
                    </section>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default ChatbotDevelopment;
