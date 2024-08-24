import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import styles from "../../Components/crm.module.css";
import crmImage from "../../Dataset/training.png";
import backgroundImage from '../../Dataset/bac1.jpg'; // Import your background image
import backgroundImage1 from '../../Dataset/bac4.jpg'; // Import your background image

const Training = () => {
    const trainingFeatures = [
        { icon: "fas fa-lightbulb", title: "Ideation Workshops" },
        { icon: "fas fa-chalkboard-teacher", title: "AI Training Programs" },
        { icon: "fas fa-briefcase", title: "Business Integration" },
        { icon: "fas fa-cogs", title: "Workflow Optimization" },
    ];

    const trainingSolutions = [
        "Ideation Workshops: Collaborative sessions to brainstorm AI solutions and strategies for business improvement.",
        "AI Training Programs: Tailored training programs to upskill employees and leverage AI technologies effectively.",
        "Business Integration: Seamless integration of AI solutions into existing business processes and workflows.",
        "Workflow Optimization: Optimization of workflows and automation of tasks using AI for enhanced productivity.",
    ];

    return (
        <div className={styles.app}>
            <Navbar />
            <AboutUs1 mainHeading="Training and Consultation" subHeading="Home &raquo; Services" />
            
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
                            <h1>AI Training and Consultation</h1>
                            <p>
                                Enhance business productivity with AI training and consultation services. Our offerings include ideation workshops, AI training programs, business integration, and workflow optimization for leveraging AI effectively in your organization.
                            </p>
                        </div>
                        <img src={crmImage} alt="AI Training and Consultation" className={styles.heroImage} />
                    </section>

                    <section className={styles.features}>
                        {trainingFeatures.map((feature, index) => (
                            <div key={index} className={styles.featureCard}>
                                <i className={`${feature.icon} ${styles.featureIcon}`}></i>
                                <h3>{feature.title}</h3>
                            </div>
                        ))}
                    </section>
                    <section className={styles.description}>
                        <p>
                        Our solutions help you leverage AI to its fullest potential through comprehensive training and consultation services. We offer expert guidance on implementing AI technologies tailored to your specific business needs.
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
                        <h2> Our AI Training and Consultation services provide:</h2>
                        <ul>
                            {trainingSolutions.map((solution, index) => (
                                <li key={index}>{solution}</li>
                            ))}
                        </ul>
                    </section>

                    <section className={styles.callToAction}>
                        <p>
                            At Savannah Inc, we offer comprehensive AI Training and Consultation services to empower your workforce and drive business growth through AI innovation. Let us help you unlock the full potential of AI for improved productivity and efficiency.
                        </p>
                        <button className={styles.ctaButton}>Get Started</button>
                    </section>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default Training;
