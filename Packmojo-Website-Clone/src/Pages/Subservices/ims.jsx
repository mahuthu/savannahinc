import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import imsImage from "../../Dataset/ims.jpeg";
import styles from "../../Components/crm.module.css";
import backgroundImage from '../../Dataset/bac3.jpg';
import backgroundImage1 from '../../Dataset/bac4.jpg';
import realTimeTracking from '../../Dataset/reports-crm.svg';
import demandForecasting from '../../Dataset/saleserp.svg';
import inventoryOptimization from '../../Dataset/reorder-ims.svg';
import dataDrivenInsights from '../../Dataset/inventory-analyticsims.svg';
import UniqueSVG from '../../Components/UniqueSVG';


const Ims = () => {

    const iconPaths = {
        RealTimeTracking: realTimeTracking,
        DemandForecasting: demandForecasting,
        InventoryOptimization: inventoryOptimization,
        DataDrivenInsights: dataDrivenInsights,
    };

    const imsFeatures = [
        { title: "Real-time Inventory Tracking", icon: "RealTimeTracking", iconColor: "#3498DB" },
        { title: "Demand Forecasting", icon: "DemandForecasting", iconColor: "#9B59B6" },
        { title: "Inventory Optimization", icon: "InventoryOptimization", iconColor: "#E67E22" },
        { title: "Data-driven Insights", icon: "DataDrivenInsights", iconColor: "#16A085" },
    ];

    const imsBenefits = [
        "Cost Reduction: Reduce inventory holding costs, minimize stockouts, and improve inventory turnover to optimize working capital.",
        "Improved Efficiency: Streamline inventory processes, automate replenishment, and enhance supply chain visibility for efficient operations.",
        "Enhanced Customer Service: Ensure product availability, fulfill orders promptly, and meet customer demand with accurate inventory management.",
        "Scalability: Scale your inventory management system as your business grows, accommodating new products, locations, and sales channels.",
    ];


    
    return (
        <div className={styles.app}>
            <Navbar />
            <AboutUs1 mainHeading="Inventory Management System" subHeading="Home » Services" />
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
                            <h1>IMS Solutions</h1>
                            <p>Optimize inventory management with customized solutions tailored to your business needs.</p>
                        </div>
                        <img src={imsImage} alt="IMS Solutions" className={styles.heroImage} />
                    </section>

                    <section className={styles.features}>
                    {imsFeatures.map((feature, index) => (
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
                            Inventory Management System solutions offer real-time inventory tracking, demand forecasting, and inventory optimization, reducing costs and improving efficiency.
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
                            {imsBenefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                    </section>

                    <section className={styles.callToAction}>
                        <h2>Ready to Streamline Your Inventory Management?</h2>
                        <p>
                            At Savannah Inc, we specialize in designing and implementing customized Inventory Management Systems tailored to your business requirements. Let us help you streamline your inventory processes and achieve operational excellence.
                        </p>
                        <button className={styles.ctaButton}>Get Started</button>
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Ims;
