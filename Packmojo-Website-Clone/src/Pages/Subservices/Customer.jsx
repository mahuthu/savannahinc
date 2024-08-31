import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import styles from "../../Components/crm.module.css";
import erpImage from "../../Dataset/customer2.png";
import backgroundImage from '../../Dataset/bac3.jpg'; // Import your background image
import backgroundImage1 from '../../Dataset/bac4.jpg'; // Import your background image


const ERP = () => {
    const analyticsFeatures = [
        { icon: "fas fa-users", title: "Customer Segmentation" },
        { icon: "fas fa-chart-pie", title: "Behavioral Analysis" },
        { icon: "fas fa-chart-line", title: "Predictive Modeling" },
        { icon: "fas fa-chart-bar", title: "Customer Insights" },
    ];

    const analyticsSolutions = [
        "Customer Segmentation: Divide customers into segments based on demographics, behavior, and preferences for personalized marketing.",
        "Behavioral Analysis: Analyze customer interactions, purchasing patterns, and engagement metrics for actionable insights.",
        "Predictive Modeling: Forecast customer behavior, predict churn rates, and identify cross-selling opportunities using advanced analytics.",
        "Customer Insights: Gain deep insights into customer needs, preferences, and sentiment to tailor marketing campaigns and improve customer experience.",
    ];

    return (
        <div className={styles.app}>
            <Navbar />
            <AboutUs1 mainHeading="Customer Analytics" subHeading="Home &raquo; Services" />
            
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
                            <h1>Customer Analytics Solutions</h1>
                            <p>Utilize customer analytics solutions for in-depth customer segmentation, behavioral analysis, and predictive modeling.</p>
                        </div>
                        <img src={erpImage} alt="Customer Analytics Solutions" className={styles.heroImage} />
                    </section>

                    <section className={styles.features}>
                        {analyticsFeatures.map((feature, index) => (
                            <div key={index} className={styles.featureCard}>
                                <i className={`${feature.icon} ${styles.featureIcon}`}></i>
                                <h3>{feature.title}</h3>
                            </div>
                        ))}
                    </section>

                    <section className={styles.description}>
                        <p>
                            Our solutions help you understand customer behavior, preferences, and needs for targeted marketing strategies.
                        </p>
                    </section>

                    <section className={styles.benefits}
                    style={{
                        backgroundImage: `url(${backgroundImage1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                        >
                        <h2>Customer Analytics Solutions Include:</h2>
                        <ul>
                            {analyticsSolutions.map((solution, index) => (
                                <li key={index}>{solution}</li>
                            ))}
                        </ul>
                    </section>

                    <section className={styles.callToAction}>
                        <p>
                            At Savannah Inc, we offer Customer Analytics Solutions designed to enhance your customer understanding and drive strategic marketing decisions. Let us help you unlock valuable customer insights for business growth.
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
