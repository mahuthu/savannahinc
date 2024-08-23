import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import SubService from "../../Components/SubService";
import styles from "../../Components/crm.module.css";
import lmsImage from "../../Dataset/lms.png";
import backgroundImage from '../../Dataset/bac3.jpg'; // Background image
import backgroundImage1 from '../../Dataset/bac4.jpg'; // Benefits background image

const Lms = () => {
    const lmsFeatures = [
        { icon: "fas fa-user-graduate", title: "Personalized Learning" },
        { icon: "fas fa-play-circle", title: "Interactive Content" },
        { icon: "fas fa-chart-line", title: "Analytics and Reporting" },
        { icon: "fas fa-check-circle", title: "Compliance and Certification" },
    ];

    const lmsBenefits = [
        "Enhanced Training",
        "Improved Training ROI",
        "Flexible Learning Environments",
        "Comprehensive Learning Analytics",
    ];

    return (
        <div className={styles.app}>
            <Navbar />
            <AboutUs1 mainHeading="Learning Management System" subHeading="Home » Services" />
            
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
                            <h1>LMS Solutions</h1>
                            <p>Create engaging and effective learning experiences with custom learning management systems.</p>
                        </div>
                        <img src={lmsImage} alt="LMS Solutions" className={styles.heroImage} />
                    </section>

                    <section className={styles.features}>
                        {lmsFeatures.map((feature, index) => (
                            <div key={index} className={styles.featureCard}>
                                <i className={`${feature.icon} ${styles.featureIcon}`}></i>
                                <h3>{feature.title}</h3>
                            </div>
                        ))}
                    </section>

                    <section className={styles.description}>
                        <p>
                            LMS solutions offer personalized learning paths, interactive content, and advanced analytics to drive training and development.
                        </p>
                    </section>

                    <section
                        className={styles.benefits}
                        style={{
                            backgroundImage: `url(${backgroundImage1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <h2>Business Benefits</h2>
                        <ul>
                            {lmsBenefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                    </section>

                    <section className={styles.callToAction}>
                        <h2>Ready to Empower Your Learners?</h2>
                        <p>
                            At Savannah Inc, we design and implement customized Learning Management Systems tailored to your training and development goals. Let us empower your learners with engaging and impactful learning experiences.
                        </p>
                        <button className={styles.ctaButton}>Get Started</button>
                    </section>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default Lms;
