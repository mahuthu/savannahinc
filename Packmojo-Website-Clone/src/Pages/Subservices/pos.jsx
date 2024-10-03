import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import posImage from "../../Dataset/pos2.png"; // Replace with POS image
import posImage4 from "../../Dataset/ODOO.jpeg"; // Replace with POS image
import styles from "../../Components/crm.module.css";
import backgroundImage from '../../Dataset/bac3.jpg'; 
import backgroundImage1 from '../../Dataset/bac4.jpg'; 
import inventoryIcon from '../../Dataset/inventoryims.svg'; // Replace with POS icons
import salesIcon from '../../Dataset/saleserp.svg';
import customerIcon from '../../Dataset/customer-managementcrm.svg';
import paymentsIcon from '../../Dataset/bankingerp.svg';
import UniqueSVG from '../../Components/UniqueSVG';
import { Link } from "react-router-dom";

const POS = () => {

    const iconPaths = {
        InventoryIcon: inventoryIcon,
        SalesIcon: salesIcon,
        CustomerIcon: customerIcon,
        PaymentsIcon: paymentsIcon,
    };

    const posFeatures = [
        {
            title: "Inventory Management",
            icon: "InventoryIcon",
            iconColor: "#FF5733"
        },
        {
            title: "Sales Reporting",
            icon: "SalesIcon",
            iconColor: "#1ABC9C"
        },
        {
            title: "Customer Management",
            icon: "CustomerIcon",
            iconColor: "#D35400"
        },
        {
            title: "Payments and Billing",
            icon: "PaymentsIcon",
            iconColor: "#2ECC71"
        }
    ];

    const posBenefits = [
        "Inventory Management: Keep track of stock levels, manage product categories, and receive real-time updates to avoid stockouts or overstocking.",
        "Sales Reporting: Generate detailed sales reports, track performance, and gain insights to make informed business decisions.",
        "Customer Management: Record customer information, track purchase history, and offer personalized promotions to improve loyalty.",
        "Payments and Billing: Process transactions quickly and securely, manage multiple payment methods, and issue digital receipts.",
    ];

    const posPartners = [
        { name: "Odoo POS", image: posImage4 },
    ];

    return (
        <div className={styles.app}>
            <Navbar />
            <AboutUs1 mainHeading="Point of Sale Solutions" subHeading="Home » Services" />
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
                        <h1>POS Solutions</h1>
                        <p>Streamline your sales, inventory, and customer management with powerful Point of Sale systems.</p>
                    </div>
                    <img src={posImage} alt="POS Solutions" className={styles.heroImage} />
                </section>

                <section className={styles.features}>
                    {posFeatures.map((feature, index) => (
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
                        Point of Sale systems centralize your inventory, manage customer data, and process transactions, making business operations more efficient and boosting sales growth.
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
                        {posBenefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                </section>

                <section className={styles.partners}>
                    <h2>Our POS Partners</h2>
                    <div className={styles.partnerLogos}>
                        {posPartners.map((partner, index) => (
                            <div key={index} className={styles.partnerLogo}>
                                <img src={partner.image} alt={partner.name} />
                                <p>{partner.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.callToAction}>
                    <h2>Ready to Optimize Your Business with POS Solutions?</h2>
                    <p>
                        At Savannah Inc, we specialize in implementing tailored Point of Sale systems to help you streamline your sales processes and manage inventory effectively.
                    </p>
                    <Link to="/contact" className={styles.ctaButton}>Get Started</Link> {/* Use Link to redirect */}
                    </section>
            </main>
            </div>

            <Footer />
        </div>
    );
};

export default POS;
