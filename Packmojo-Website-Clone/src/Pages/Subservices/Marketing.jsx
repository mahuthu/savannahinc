import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import styles from "../../Components/crm.module.css";
import erpImage from "../../Dataset/tableau1.jpg";
import backgroundImage from '../../Dataset/bac1.jpg'; // Import your background image
import backgroundImage1 from '../../Dataset/bac4.jpg'; // Import your background image


const MarketingAnalytics = () => {
    const analyticsFeatures = [
        { icon: "fas fa-chart-line", title: "Data Visualization" },
        { icon: "fas fa-chart-line", title: "Trend Analysis" },
        { icon: "fas fa-database", title: "Data Integration" },
        { icon: "fas fa-chart-bar", title: "Performance Metrics" },
    ];

    const analyticsSolutions = [
        "Data Visualization: Create interactive dashboards, charts, and graphs to visualize marketing data and trends.",
        "Trend Analysis: Identify patterns, analyze customer behavior, and predict market trends for strategic decision-making.",
        "Data Integration: Integrate marketing data sources for comprehensive insights and holistic view of marketing performance.",
        "Performance Metrics: Track key performance indicators (KPIs), measure campaign effectiveness, and optimize marketing strategies.",
    ];

    return (
        <div className={styles.app}>
            <Navbar />
            <AboutUs1 mainHeading="Marketing Analytics" subHeading="Home &raquo; Services" />
            
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
                            <h1>Marketing Analytics Solutions</h1>
                            <p>
                                Leverage marketing analytics solutions for data-driven insights, trend analysis, and performance metrics visualization.
                                Our solutions empower you to make informed marketing decisions and optimize campaign effectiveness.
                            </p>
                        </div>
                        <img src={erpImage} alt="Marketing Analytics Solutions" className={styles.heroImage} />
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
                            Our solutions help you understand the market by providing insights into customer behavior, market trends, and campaign effectiveness.
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
                        <h2>Marketing Analytics Solutions Include:</h2>
                        <ul>
                            {analyticsSolutions.map((solution, index) => (
                                <li key={index}>{solution}</li>
                            ))}
                        </ul>
                    </section>

                    <section className={styles.callToAction}>
                        <p>
                            Savannah Inc delivers Marketing Analytics Solutions tailored to your business needs. Let us help you unlock actionable insights and drive marketing success.
                        </p>
                        <button className={styles.ctaButton}>Get Started</button>
                    </section>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default MarketingAnalytics;
