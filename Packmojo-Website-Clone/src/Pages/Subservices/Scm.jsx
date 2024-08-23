import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import SubService from "../../Components/SubService";
import styles from "../../Components/crm.module.css";
import scmImage from "../../Dataset/scm.jpeg";
import scmPartnerImage from "../../Dataset/scm2.png";
import backgroundImage from '../../Dataset/bac3.jpg'; // Import your background image

const Model = () => {
    const scmFeatures = [
        { icon: "fas fa-boxes", title: "Inventory Optimization" },
        { icon: "fas fa-truck", title: "Supplier Collaboration" },
        { icon: "fas fa-shipping-fast", title: "Logistics and Distribution" },
        { icon: "fas fa-eye", title: "Supply Chain Visibility" },
    ];

    const scmBenefits = [
        "Improved Efficiency",
        "Enhanced Collaboration",
        "Customer Satisfaction",
        "Cost Savings",
    ];

    const scmPartners = [
        { name: "Microsoft Supply Chain Management", image: scmPartnerImage },
    ];

    return (
        <div className={styles.app}>
            <Navbar />
            <AboutUs1 mainHeading="Supply Chain Management Solutions" subHeading="Home » Services" />
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
                            <h1>SCM Solutions</h1>
                            <p>Streamline supply chain processes and logistics with customized SCM solutions.</p>
                        </div>
                        <img src={scmImage} alt="SCM Solutions" className={styles.heroImage} />
                    </section>

                    <section className={styles.features}>
                        {scmFeatures.map((feature, index) => (
                            <div key={index} className={styles.featureCard}>
                                <i className={`${feature.icon} ${styles.featureIcon}`}></i>
                                <h3>{feature.title}</h3>
                            </div>
                        ))}
                    </section>

                    <section className={styles.description}>
                        <p>
                            SCM systems optimize inventory levels, improve supplier collaboration, and reduce lead times, resulting in a more agile and efficient supply chain.
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
                            {scmBenefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                    </section>

                    <section className={styles.partners}>
                        <h2>Our SCM Partners</h2>
                        <div className={styles.partnerLogos}>
                            {scmPartners.map((partner, index) => (
                                <div key={index} className={styles.partnerLogo}>
                                    <img src={partner.image} alt={partner.name} />
                                    <p>{partner.name}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.callToAction}>
                        <h2>Ready to Optimize Your Supply Chain?</h2>
                        <p>
                            At Savannah Inc, we specialize in designing and implementing tailored SCM solutions to streamline your supply chain operations and drive business success.
                        </p>
                        <button className={styles.ctaButton}>Get Started</button>
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Model;
