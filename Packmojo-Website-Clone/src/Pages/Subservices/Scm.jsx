import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import styles from "../../Components/crm.module.css";
import scmImage from "../../Dataset/scm.jpeg";
import scmPartnerImage from "../../Dataset/scm2.png";
import backgroundImage from '../../Dataset/bac3.jpg'; // Import your background image
import backgroundImage1 from '../../Dataset/bac4.jpg'; // Import your background image
import inventorymanagement from '../../Dataset/shipping-logisticsscm.svg';
import suppliercollaboration from '../../Dataset/supplier-managementscm.svg';
import logisticsdistribution from '../../Dataset/supply-chain-analyticsscm.svg';
import supplychainvisibility from '../../Dataset/quality-controlscm.svg';
import UniqueSVG from '../../Components/UniqueSVG';


const Model = () => {
    const iconPaths = {
        InventoryManagement: inventorymanagement,
        SupplierCollaboration: suppliercollaboration,
        LogisticsDistribution: logisticsdistribution,
        SupplyChainVisibility: supplychainvisibility,
    };

    const scmFeatures = [
        { title: "Inventory Management", icon: "InventoryManagement", iconColor: "#FF5733" },
        { title: "Supplier Collaboration", icon: "SupplierCollaboration", iconColor: "#1ABC9C" },
        { title: "Logistics and Distribution", icon: "LogisticsDistribution", iconColor: "#D35400" },
        { title: "Supply Chain Visibility", icon: "SupplyChainVisibility", iconColor: "#2ECC71" },
    ];

    const scmBenefits = [
        "Improved Efficiency: Reduce lead times, minimize inventory holding costs, and optimize resource utilization for increased operational efficiency",
        "Enhanced Collaboration: Foster collaboration among supply chain partners, improve communication, and reduce delays and disruptions",
        "Customer Satisfaction: Ensure on-time deliveries, reduce order errors, and enhance overall customer satisfaction through streamlined supply chain processes",
        "Cost Savings: Identify cost-saving opportunities, optimize supply chain networks, and negotiate better terms with suppliers for cost reduction",
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
                            SCM systems optimize inventory levels, improve supplier collaboration, and reduce lead times, resulting in a more agile and efficient supply chain.
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
