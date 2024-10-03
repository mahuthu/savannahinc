import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import styles from "../../Components/crm.module.css";
import lmsImage from "../../Dataset/lms.png";
import backgroundImage from '../../Dataset/bac3.jpg'; // Background image
import backgroundImage1 from '../../Dataset/bac4.jpg'; // Benefits background image
import personalizedLearningIcon from '../../Dataset/procurement-managementscm.svg';
import interactiveContentIcon from '../../Dataset/interactive.svg';
import analyticsIcon from '../../Dataset/performance-analysismarketing.svg';
import complianceIcon from '../../Dataset/compliance.svg';
import UniqueSVG from '../../Components/UniqueSVG';
import { Link } from "react-router-dom";

const Lms = () => {
    const iconPaths = {
        PersonalizedLearning: personalizedLearningIcon,
        InteractiveContent: interactiveContentIcon,
        AnalyticsAndReporting: analyticsIcon,
        ComplianceAndCertification: complianceIcon,
    };

    const lmsFeatures = [
        { title: "Personalized Learning", icon: "PersonalizedLearning", iconColor: "#FF5733" },
        { title: "Interactive Content", icon: "InteractiveContent", iconColor: "#1ABC9C" },
        { title: "Analytics and Reporting", icon: "AnalyticsAndReporting", iconColor: "#D35400" },
        { title: "Compliance and Certification", icon: "ComplianceAndCertification", iconColor: "#2ECC71" },
    ];


    const lmsBenefits = [
        "Enhanced Training: Provide on-demand training, upskilling, and reskilling opportunities to improve knowledge and skills.",
        "Improved Training ROI: Measure training effectiveness, identify areas for improvement, and maximize return on investment (ROI) in training initiatives",
        "Flexible Learning Environments: Offer flexible learning options, including mobile learning, self-paced modules, and virtual classrooms for diverse learner needs.",
        "Comprehensive Learning Analytics: Gain insights into learner engagement, performance trends, and learning outcomes to optimize training strategies",
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
                            <div className={styles.cardIcon}>
                                <UniqueSVG 
                                    svgData={iconPaths[feature.icon]} 
                                    fillColor={feature.iconColor} 
                                />
                            </div>
                            <h3>{feature.title}</h3>
                        </div>
                    ))}
                </section>

                    <section className={styles.description}>
                        <p>
                            Learning Management System solutions offer personalized learning paths, interactive content, and advanced analytics to drive training and development.
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
                        <Link to="/contact" className={styles.ctaButton}>Get Started</Link> {/* Use Link to redirect */}
                    </section>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default Lms;
