import React from "react";
import styles from './website.module.css';

const processSteps = [
  {
    logo: <i className="fas fa-magic"></i>,
    id: "1",
    title: "Requirement Gathering",
    description: "Understand client needs, goals, and preferences for the website.",
  },
  {
    logo: <i className="fa fa-dollar" aria-hidden="true"></i>,
    id: "3",
    title: "Place your order",
    description: "Choose your preferred design and place your order.",
  },
  {
    logo: <i className="fas fa-tools"></i>,
    id: "2",
    title: "Design and Development",
    description: "Create wireframes, design mockups, and develop the website with interactive features.",
  },
  {
    logo: <i className="fas fa-check-circle"></i>,
    id: "3",
    title: "Testing and QA",
    description: "Perform thorough testing to ensure functionality, usability, and compatibility across devices.",
  },
  {
    logo: <i className="fas fa-cloud-upload-alt"></i>,
    id: "4",
    title: "Deployment",
    description: "Deploy the website on a hosting server and configure domain settings.",
  },
  {
    logo: <i className="fas fa-sync-alt"></i>,
    id: "5",
    title: "Maintenance and Updates",
    description: "Regularly update content, software, and security measures to keep the website optimal.",
  },
];

const Process = () => {
  const processDisplay = processSteps.map((step) => (
    <div className="col-lg-4" key={step.id}>
      <h1>{step.logo}</h1>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
  ));

  return (
    <section>
      <div className={`${styles.processContainer}`}>
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h1>Our Process</h1>
              <p>We've broken down the order process so you know exactly what to expect.</p>
            </div>
            {processDisplay}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
