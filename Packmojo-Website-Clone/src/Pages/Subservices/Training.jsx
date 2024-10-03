import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import styles from "../../Components/crm.module.css";
import trainingImage from "../../Dataset/training.png";
import backgroundImage from "../../Dataset/bac1.jpg"; // Import your background image
import { Link } from "react-router-dom";

const Training = () => {
    const trainingFeatures = [
        { icon: "fas fa-lightbulb", title: "Ideation Workshops" },
        { icon: "fas fa-chalkboard-teacher", title: "AI Training Programs" },
        { icon: "fas fa-briefcase", title: "Business Integration" },
        { icon: "fas fa-cogs", title: "Workflow Optimization" },
    ];

    const trainingBenefits = [
        "Enhanced Business Productivity",
        "Effective AI Integration",
        "Increased Employee Skills",
        "Optimized Workflow",
    ];

    return (
        <div className={styles.app}>
            <Navbar />
            <AboutUs1 mainHeading="Training and Consultation" subHeading="Home » Services" />
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
                            <h1>Training and Consultation</h1>
                            <p>Empower your team with expert training and consultation services to drive business growth.</p>
                        </div>
                        <img src={trainingImage} alt="Training and Consultation" className={styles.heroImage} />
                    </section>

                    <section className={styles.features}>
                        {trainingFeatures.map((feature, index) => (
                            <div key={index} className={styles.featureCard}>
                                <i className={`${feature.icon} ${styles.featureIcon}`}></i>
                                <h3>{feature.title}</h3>
                            </div>
                        ))}
                    </section>

                    <section className={styles.description}>
                        <p>
                            Get expert training and consultation services on various IT and business topics. Our training programs cover a range of technologies and best practices, empowering your team with the knowledge and skills to drive business growth.
                        </p>
                    </section>

                    <section className={styles.benefits}
                        style={{
                            backgroundImage: `url(${backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}>
                        <h2>Business Benefits</h2>
                        <ul>
                            {trainingBenefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                    </section>

                    <section className={styles.callToAction}>
                        <h2>Ready to Enhance Your Skills?</h2>
                        <p>
                            At Savannah Inc, we offer comprehensive training and consultation services to empower your workforce and drive business growth through technology and expertise.
                        </p>
                        <Link to="/contact" className={styles.ctaButton}>Get Started</Link> {/* Use Link to redirect */}
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Training;
