import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import styles from "../../Components/crm.module.css";
import recommendationImage from "../../Dataset/reccomend3.jpeg";
import backgroundImage from '../../Dataset/bac1.jpg'; // Import a background image if needed
import backgroundImage1 from '../../Dataset/bac4.jpg'; // Import a background image if needed

const RecommendationSystems = () => {
    const recommendationFeatures = [
        { icon: "fas fa-star", title: "Personalized Recommendations" },
        { icon: "fas fa-search", title: "Content Discovery" },
        { icon: "fas fa-chart-line", title: "Behavioral Analysis" },
        { icon: "fas fa-comments", title: "Feedback Integration" },
    ];

    const recommendationSolutions = [
        "Personalized Recommendations: Provide tailored content recommendations based on user preferences and behavior.",
        "Content Discovery: Improve content discovery and user engagement through intelligent recommendation algorithms.",
        "Behavioral Analysis: Analyze user behavior and interactions to enhance recommendation accuracy and relevance.",
        "Feedback Integration: Integrate user feedback and preferences into recommendation models for continuous improvement.",
    ];

    return (
        <div className={styles.app}>
            <Navbar />
            <AboutUs1 mainHeading="Recommendation Systems" subHeading="Home &raquo; Services" />
            
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
                            <h1>Recommendation System Solutions</h1>
                            <p>
                                Enhance user experience and engagement with personalized recommendation systems. Our solutions cover personalized recommendations, content discovery, behavioral analysis, and feedback integration for improved user satisfaction.
                            </p>
                        </div>
                        <img src={recommendationImage} alt="Recommendation Systems" className={styles.heroImage} />
                    </section>

                    <section className={styles.features}>
                        {recommendationFeatures.map((feature, index) => (
                            <div key={index} className={styles.featureCard}>
                                <i className={`${feature.icon} ${styles.featureIcon}`}></i>
                                <h3>{feature.title}</h3>
                            </div>
                        ))}
                    </section>

                    <section className={styles.description}>
                        <p>
                        Our solutions help you harness the power of recommendation engines to deliver personalized experiences to your customers. By analyzing user behavior and preferences, we enable you to provide tailored content, products, or services that resonate with each individual..
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
                        <h2>Advantages of Recommendation Systems solutions include:</h2>
                        <ul>
                            {recommendationSolutions.map((solution, index) => (
                                <li key={index}>{solution}</li>
                            ))}
                        </ul>
                    </section>

                    <section className={styles.callToAction}>
                        <p>
                            At Savannah Inc, we build Recommendation Systems Solutions that boost user engagement and drive business growth. Let us help you deliver personalized experiences that keep users coming back.
                        </p>
                        <button className={styles.ctaButton}>Get Started</button>
                    </section>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default RecommendationSystems;
