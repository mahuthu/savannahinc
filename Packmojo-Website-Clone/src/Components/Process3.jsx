import React from "react";
import styles from "./process1.module.css";
import backgroundImage from '../Dataset/bac3.jpg'; // Import your background image


const processSteps = [
  {
    logo: <i className="fas fa-code"></i>,
    title: "Web Design and Development",
    description: "We create eCommerce solutions tailored to your business needs, ensuring a seamless online shopping experience. We also offer various website development services including portfolios, blog, business, and corporate websites.",
  },
  {
    logo: <i className="fas fa-globe"></i>,
    title: "Business Applications",
    description: "We provide a range of business solutions including Customer relationship management, Enterprise Resource Planning, Inventory Management, Project Management, and more, ensuring that your business operations run smoothly and efficiently.",
  },
  {
    logo: <i className="fas fa-chart-line"></i>,
    title: "Analytics AI and ML Services",
    description: "Our AI-driven solutions help you harness the full potential of artificial intelligence, offering services like chatbots, recommendation engines, data collection, and actionable insights for strategic decision-making.",
  },
  {
    logo: <i className="fab fa-whatsapp"></i>,
    title: "Social Media Management",
    description: "We enhance your brand presence and engagement across social media platforms, offering content creation, community management, analytics, and integration with WhatsApp Business for real-time customer support.",
  },
  {
    logo: <i className="fas fa-chalkboard-teacher"></i>,
    title: "Training & Consultation",
    description: "We offer training programs to help you and your team master the latest technologies and industry best practices, ensuring you stay ahead in the ever-evolving tech landscape.",
  },
];

const Process1 = () => {
  return (
    <section className={styles.processSection}
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12">
            <h1 className={styles.sectionTitle}>Founded in 2022, Savannah Inc is a premier software company in Kenya</h1>
            <p> We provide a radical shift for businesses looking to elevate their operations. We achieve this by creating software suites and state-of-the-art technology that help these enterprises discover detailed and personalized insights and significantly improve performance.</p>
            <p>We specialize in building best-in-class, hyper-customized software solutions for clients spanning over 20+ industries across the Region. This includes software suites and platforms to address a diverse range of problems, ranging from employee productivity management to workflow automation. Our office is currently located in Kahawa Sukari, Thika Road.</p>
          </div>
        </div>
        <div className={styles.timelineContainer}>
          {processSteps.map((step, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineIcon}>{step.logo}</div>
              <div className={styles.timelineContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process1;