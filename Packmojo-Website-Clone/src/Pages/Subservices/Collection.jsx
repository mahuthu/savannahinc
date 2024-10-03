import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import styles from "../../Components/crm.module.css";
import erpImage from "../../Dataset/annot.jpeg";
import backgroundImage from '../../Dataset/bac1.jpg'; // Import your background image
import backgroundImage1 from '../../Dataset/bac4.jpg'; // Import your background image
import { Link } from "react-router-dom";

const DataCollection = () => {
    const dataCollectionFeatures = [
        { icon: "fas fa-database", title: "Data Collection" },
        { icon: "fas fa-pen", title: "Data Annotation" },
        { icon: "fas fa-search", title: "Data Labeling" },
        { icon: "fas fa-chart-line", title: "Data Quality Assurance" },
    ];

    const dataCollectionSolutions = [
        "Data Collection: Gather structured and unstructured data from diverse sources for analysis and modeling.",
        "Data Annotation: Annotate data with accurate labels, tags, and metadata to train machine learning algorithms.",
        "Data Labeling: Label data points for classification, object detection, sentiment analysis, and other AI tasks.",
        "Data Quality Assurance: Ensure data quality through validation, cleaning, and normalization processes for reliable insights.",
    ];

    return (
        <div className={styles.app}>
            <Navbar />
            <AboutUs1 mainHeading="Data Collection and Annotation" subHeading="Home &raquo; Services" />
            
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
                            <h1>Data Collection and Annotation</h1>
                            <p>
                                Leverage our data collection and annotation solutions for accurate data labeling, annotation, and quality assurance.
                                We provide comprehensive services to ensure your data is ready for AI and machine learning applications.
                            </p>
                        </div>
                        <img src={erpImage} alt="Data Collection and Annotation" className={styles.heroImage} />
                    </section>

                    <section className={styles.features}>
                        {dataCollectionFeatures.map((feature, index) => (
                            <div key={index} className={styles.featureCard}>
                                <i className={`${feature.icon} ${styles.featureIcon}`}></i>
                                <h3>{feature.title}</h3>
                            </div>
                        ))}
                    </section>

                    <section className={styles.description}>
                        <p>
                        Our solutions help you streamline data collection and annotation processes, ensuring that your business has access to high-quality, labeled data for AI and machine learning applications. We provide tools and services that enable you to gather accurate data from various sources and annotate it efficiently, whether it's text, images, video, or audio data.
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
                        <h2> Our data collection and annotation solutions include::</h2>
                        <ul>
                            {dataCollectionSolutions.map((solution, index) => (
                                <li key={index}>{solution}</li>
                            ))}
                        </ul>
                    </section>


                    <section className={styles.callToAction}>
                        <p>
                            Savannah Inc offers end-to-end Data Collection and Annotation Solutions to support your AI and machine learning initiatives. 
                            Let us help you unlock the full potential of your data.
                        </p>
                        <Link to="/contact" className={styles.ctaButton}>Get Started</Link> {/* Use Link to redirect */}
                    </section>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default DataCollection;
