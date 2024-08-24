import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import styles from "../../Components/crm.module.css";
import pmsImage from "../../Dataset/pms.png";
import pmsPartnerImage from "../../Dataset/project operations.png";
import backgroundImage from '../../Dataset/bac3.jpg'; // Import your background image
import backgroundImage1 from '../../Dataset/bac4.jpg'; // Import your background image


const Pms = () => {
    const pmsFeatures = [
        { icon: "fas fa-tasks", title: "Task Management" },
        { icon: "fas fa-users", title: "Collaboration Tools" },
        { icon: "fas fa-chart-bar", title: "Resource Allocation" },
        { icon: "fas fa-chart-line", title: "Timeline and Gantt Charts" },
    ];

    const pmsBenefits = [
        "Improved Project Efficiency: Streamline workflows, reduce bottlenecks, and enhance project coordination for faster project delivery.",
        "Enhanced Collaboration: Foster team collaboration, improve communication, and ensure everyone stays aligned with project goals.",
        "Resource Optimization: Allocate resources effectively, manage workloads, and optimize resource utilization for cost savings.",
        "Project Tracking and Reporting: Monitor project progress, generate reports, and analyze performance metrics to make data-driven decisions.",
    ];

    const pmsPartners = [
        { name: "Microsoft Dynamics Project Operations", image: pmsPartnerImage },
    ];

    return (
        <div className={styles.app}>
            <Navbar />
            <AboutUs1 mainHeading="Project Management System" subHeading="Home » Services" />
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
                            <h1>PMS Solutions</h1>
                            <p>Efficiently manage projects and tasks with customized project management systems.</p>
                        </div>
                        <img src={pmsImage} alt="PMS Solutions" className={styles.heroImage} />
                    </section>

                    <section className={styles.features}>
                        {pmsFeatures.map((feature, index) => (
                            <div key={index} className={styles.featureCard}>
                                <i className={`${feature.icon} ${styles.featureIcon}`}></i>
                                <h3>{feature.title}</h3>
                            </div>
                        ))}
                    </section>

                    <section className={styles.description}>
                        <p>
                            Project management solutions streamline workflows, enhance collaboration, and ensure timely project delivery with comprehensive project tracking.
                        </p>
                    </section>

                    <section className={styles.benefits}
                        style={{
                            backgroundImage: `url(${backgroundImage1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}>
                        <h2>Business Benefits</h2>
                        <ul>
                            {pmsBenefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                    </section>

                    <section className={styles.partners}>
                        <h2>Our PMS Partners</h2>
                        <div className={styles.partnerLogos}>
                            {pmsPartners.map((partner, index) => (
                                <div key={index} className={styles.partnerLogo}>
                                    <img src={partner.image} alt={partner.name} />
                                    <p>{partner.name}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.callToAction}>
                        <h2>Ready to Enhance Your Project Management?</h2>
                        <p>
                            At Savannah Inc, we specialize in designing and implementing customized Project Management Systems tailored to your project management needs.
                        </p>
                        <button className={styles.ctaButton}>Get Started</button>
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Pms;
