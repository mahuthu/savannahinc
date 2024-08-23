import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import erpImage from "../../Dataset/erp1.jpg";
import crmImage1 from "../../Dataset/_BusinessCentral2.png";
import crmImage2 from "../../Dataset/ODOO.jpeg";
import styles from "../../Components/crm.module.css"; // Reusing crm.module.css for consistency
import backgroundImage from '../../Dataset/bac3.jpg'; // Import your background image
import backgroundImage1 from '../../Dataset/bac4.jpg'; // Import your background image

const ERP = () => {
    const erpFeatures = [
        { icon: "fas fa-cogs", title: "Streamlined Operations" },
        { icon: "fas fa-chart-line", title: "Real-time Insights" },
        { icon: "fas fa-sitemap", title: "Integrated Systems" },
        { icon: "fas fa-balance-scale", title: "Scalability" },
    ];

    const erpBenefits = [
        "Enhance business operations and efficiency with Microsoft Dynamics ERP solutions.",
        "ERP solutions integrate seamlessly with your existing systems, providing real-time insights, automating processes, and optimizing resource allocation.",
        "Savannah Inc specializes in ERP implementation, customization, and optimization tailored to your business goals.",
    ];

    const erpPartners = [
        { name: "Microsoft Business Central", image: crmImage1 },
        { name: "ODOO ERP", image: crmImage2 },
    ];

    return (
        <div className={styles.app}>
            <Navbar />
            <AboutUs1 mainHeading="Enterprise Resource Planning" subHeading="Home » Services" />
            
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
                        <h1>ERP Solutions</h1>
                        <p>Enhance business operations and efficiency with customized ERP solutions.</p>
                    </div>
                    <img src={erpImage} alt="ERP Solutions" className={styles.heroImage} />
                </section>

                <section className={styles.features}>
                    {erpFeatures.map((feature, index) => (
                        <div key={index} className={styles.featureCard}>
                            <i className={`${feature.icon} ${styles.featureIcon}`}></i>
                            <h3>{feature.title}</h3>
                        </div>
                    ))}
                </section>

                <section className={styles.description}>
                    {erpBenefits.map((benefit, index) => (
                        <p key={index}>{benefit}</p>
                    ))}
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
                        <li>Streamlined Operations: Consolidate and automate business processes, reduce manual tasks, and improve operational efficiency across departments.</li>
                        <li>Real-time Insights: Access up-to-date data and analytics for informed decision-making, resource allocation, and performance tracking.</li>
                        <li>Integrated Systems: Connect different business functions and departments, ensuring data consistency, collaboration, and seamless workflows.</li>
                        <li>Scalability: Adapt and scale your ERP system as your business grows, accommodating new processes, users, and functionalities.</li>
                    </ul>
                </section>

                <section className={styles.partners}>
                    <h2>Our ERP Partners</h2>
                    <div className={styles.partnerLogos}>
                        {erpPartners.map((partner, index) => (
                            <div key={index} className={styles.partnerLogo}>
                                <img src={partner.image} alt={partner.name} />
                                <p>{partner.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.callToAction}>
                    <h2>Ready to Transform Your Business Operations?</h2>
                    <p>
                        At Savannah Inc, we specialize in designing and implementing tailored ERP solutions to help you streamline operations and drive business success.
                    </p>
                    <button className={styles.ctaButton}>Get Started</button>
                </section>
            </main>
            </div>

            <Footer />
        </div>
    );
};

export default ERP;
