import React, { useEffect, useRef } from "react";
import styles from "./process1.module.css";

const processSteps = [
  {
    logo: <i className="fas fa-code"></i>,
    id: "1",
    title: "Web Design and Development",
    description: "We create eCommerce solutions tailored to your business needs, ensuring a seamless online shopping experience. We also offer various website development services including portfolios, blog, business, and corporate websites.",
  },
  {
    logo: <i className="fas fa-globe"></i>,
    id: "2",
    title: "Business Solutions",
    description: "We provide a range of business solutions including Customer relationship management, Inventory Management, Project Management, and more, ensuring that your business operations run smoothly and efficiently.",
  },
  {
    logo: <i className="fas fa-chart-line"></i>,
    id: "3",
    title: "Analytics AI and ML Services",
    description: "Our AI-driven solutions help you harness the full potential of artificial intelligence, offering services like chatbots, recommendation engines, data collection, and actionable insights for strategic decision-making.",
  },
  {
    logo: <i className="fab fa-whatsapp"></i>,
    id: "4",
    title: "Social Media Management",
    description: "We enhance your brand presence and engagement across social media platforms, offering content creation, community management, analytics, and integration with WhatsApp Business for real-time customer support.",
  },
  {
    logo: <i className="fas fa-chalkboard-teacher"></i>,
    id: "5",
    title: "Training & Consultation",
    description: "We offer training programs to help you and your team master the latest technologies and industry best practices, ensuring you stay ahead in the ever-evolving tech landscape.",
  },
];

const Process1 = () => {
  const elementsRef = useRef([]);
  elementsRef.current = [];

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementsRef.current.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const processDisplay = processSteps.map((step, index) => (
    <div
      ref={addToRefs}
      className={`col-lg-12 ${styles.fadeIn}`}
      key={step.id}
      style={{ order: index % 2 === 0 ? 1 : -1, marginBottom: "10px" }}
    >
      <h1 style = {{color:"#41e096"}}>{step.logo}</h1>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
  ));

  return (
    <section className={styles.processSection}>
      <div className="container py-5">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h1 className={styles.sectionSubtitle}>Driving Vision into Action</h1>
            <p>Savannah Inc is a leading consulting firm helping businesses transform their digital landscape. We deliver customized solutions on time, tailored to your size, budget, and needs.</p>
            <p>We specialize in:</p>
          </div>
        </div>
        <div className="row text-center">
          {processDisplay}
        </div>
        <div className="row text-center mt-5">
          <div className="col-lg-4 mb-4">
            <div className={`card h-100 text-white ${styles.bgDark}`}>
              <div className={`card-body text-center ${styles.cardBody}`}>
                <i className={`fas fa-bullseye fa-3x ${styles.processIcon}`}></i>
                <h3 className={`card-title mt-3 ${styles.cardTitle}`}>Mission</h3>
                <p className={`card-text ${styles.cardText}`}>Our mission is to foster long-term partnerships and exceed customer expectations every step of the way.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className={`card h-100 text-white ${styles.bgDark}`}>
              <div className={`card-body text-center ${styles.cardBody}`}>
                <i className={`fas fa-chart-line fa-3x ${styles.processIcon}`}></i>
                <h3 className={`card-title mt-3 ${styles.cardTitle}`}>Goal</h3>
                <p className={`card-text ${styles.cardText}`}>Our goal is to be a leader in the industry by providing the right and concise solutions.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className={`card h-100 text-white ${styles.bgDark}`}>
              <div className={`card-body text-center ${styles.cardBody}`}>
                <i className={`fas fa-handshake fa-3x ${styles.processIcon}`}></i>
                <h3 className={`card-title mt-3 ${styles.cardTitle}`}>Purpose</h3>
                <p className={`card-text ${styles.cardText}`}>Our purpose is to drive value through the provision of adaptive solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process1;
