import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import crmImage from "../../Dataset/crm3.jpg";
import crmImage1 from "../../Dataset/dynamics customers.png";
import crmImage2 from "../../Dataset/zoho.png";
import crmImage3 from "../../Dataset/Salesforce.jpeg";
import crmImage4 from "../../Dataset/ODOO.jpeg";
import styles from "../../Components/crm.module.css";
import backgroundImage from '../../Dataset/bac3.jpg'; // Import your background image
import backgroundImage1 from '../../Dataset/bac4.jpg'; // Import your background image
import customerManagementIcon from '../../Dataset/customer-managementcrm.svg';
import analyticsIcon from '../../Dataset/reports-crm.svg';
import tasksIcon from '../../Dataset/activity-managemencrm.svg';
import salesIcon from '../../Dataset/saleserp.svg';
import UniqueSVG from '../../Components/UniqueSVG';



const Crm = () => {


    const iconPaths = {
        CustomerManagementIcon: customerManagementIcon,
        AnalyticsIcon: analyticsIcon,
        TasksIcon: tasksIcon,
        SalesIcon: salesIcon,
    };

    const crmFeatures = [
        {
            title: "Customer Management",
            icon: "CustomerManagementIcon",
            iconColor: "#FF5733"
        },
        {
            title: "Analytics and Insights",
            icon: "AnalyticsIcon",
            iconColor: "#1ABC9C"
        },
        {
            title: "Task and Activity Management",
            icon: "TasksIcon",
            iconColor: "#D35400"
        },
        {
            title: "Sales and Pipeline Management",
            icon: "SalesIcon",
            iconColor: "#2ECC71"
        }
    ];
    

    const crmBenefits = [
        "Customer Management: Centralize customer data, track interactions, and personalize customer experiences for improved engagement.",
        "Analytics and Insights: Gain actionable insights, analyze customer behavior, and make data-driven decisions to optimize sales and marketing strategies.",
        "Task and Activity Management: Streamline task assignments, automate workflows, and improve team collaboration for enhanced productivity.",
        "Sales and Pipeline Management: Manage sales processes, track leads, and forecast sales performance for better revenue generation.",
    ];

    const crmPartners = [
        { name: "Microsoft Dynamics", image: crmImage1 },
        { name: "Zoho CRM", image: crmImage2 },
        { name: "Salesforce", image: crmImage3 },
        { name: "Odoo", image: crmImage4 },
    ];

    return (
        <div className={styles.app}>
            <Navbar />
            <AboutUs1 mainHeading="Customer Relationship Management" subHeading="Home » Services" />
            <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
            <main className={styles.main}
            
            >
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1>CRM Solutions</h1>
                        <p>Enhance customer relationships and drive sales with customized CRM solutions.</p>
                    </div>
                    <img src={crmImage} alt="CRM Solutions" className={styles.heroImage} />
                </section>

                <section className={styles.features}>
                        {crmFeatures.map((feature, index) => (
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
                        Customer Relationship Management systems centralize customer data, provide actionable insights, and streamline sales and marketing processes for improved customer satisfaction and business growth.
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
                        {crmBenefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                </section>

                <section className={styles.partners}>
                    <h2>Our CRM Partners</h2>
                    <div className={styles.partnerLogos}>
                        {crmPartners.map((partner, index) => (
                            <div key={index} className={styles.partnerLogo}>
                                <img src={partner.image} alt={partner.name} />
                                <p>{partner.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.callToAction}>
                    <h2>Ready to Transform Your Customer Relationships?</h2>
                    <p>
                        At Savannah Inc, we specialize in designing and implementing tailored CRM solutions to help you build lasting customer relationships and drive business success.
                    </p>
                    <button className={styles.ctaButton}>Get Started</button>
                </section>
            </main>
            </div>

            <Footer />
        </div>
    );
};

export default Crm;