import React, { useEffect } from "react";
import styles from "./Process.module.css"; // Import the CSS module

const processSteps = [
  {
    logo: <i className="fas fa-shopping-cart"></i>,
    id: "1",
    title: "Retail",
    description: "We provide innovative solutions for retail businesses, from e-commerce platforms to inventory management systems. Our services are designed to enhance customer experience and streamline operations.",
  },
  {
    logo: <i className="fas fa-graduation-cap"></i>,
    id: "2",
    title: "Learning Institutions",
    description: "Empower your learning institution with our tailored solutions. From student management systems to e-learning platforms, we help you deliver quality education in a digital age.",
  },
  {
    logo: <i className="fas fa-bullhorn"></i>,
    id: "3",
    title: "Personal Brands",
    description: "Stand out in the digital landscape with our personal brand services. From website development to content management, we help you create a strong online presence.",
  },
  {
    logo: <i className="fas fa-building"></i>,
    id: "4",
    title: "Organizations",
    description: "Drive organizational efficiency with our solutions tailored for businesses and nonprofits. From CRM systems to workflow automation, we optimize your operations for success.",
  },
  {
    logo: <i className="fas fa-industry"></i>,
    id: "5",
    title: "Manufacturing",
    description: "Transform your manufacturing processes with our technology solutions. From production management to supply chain optimization, we help you achieve operational excellence.",
  },
  {
    logo: <i className="fas fa-shipping-fast"></i>,
    id: "6",
    title: "Logistics",
    description: "Optimize your logistics operations with our comprehensive solutions. From route planning to warehouse management, we streamline your supply chain for maximum efficiency.",
  },
];

const Process1 = () => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(`.${styles.flipCardContainer}`));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles['fade-in']);
            entry.target.classList.remove(styles['initial-hidden']);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    elements.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const processDisplay = processSteps.map((step, index) => (
    <div
      className={`col-md-6 col-lg-4 ${styles.flipCardContainer} ${styles['initial-hidden']} ${index % 2 === 0 ? styles['delay-1'] : styles['delay-2']} ${window.innerWidth <= 767 ? styles['flip-on-mobile'] : ''}`} 
      key={step.id}
    >
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={`${styles.flipCardFront}`} style={{ backgroundColor: "#32325C", color: "#fff" }}>
            <div className={styles.icon} style={{ fontSize: "3rem", marginBottom: "10px", color: "#42E096" }}>
              {step.logo}
            </div>
            <h3 className={styles.cardTitle}>{step.title}</h3>
          </div>
          <div className={`${styles.flipCardBack}`} style={{ backgroundColor: "#fff", color: "#000" }}>
            <p className={styles.description}>{step.description}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section>
      <div className="container-fluid py-5" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h2 className={styles.title} style={{ marginBottom: "20px", color: "#32325C", textAlign: "center" }}>Our Involvement</h2>
              <h1 className={styles.mainTitle} style={{ color: "#42E096" }}>Industry Solutions</h1>
              <p className={styles.subtitle}>We offer industry-specific solutions tailored to your business needs. Explore our range of services designed to drive growth and success.</p>
            </div>
            {processDisplay}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process1;
