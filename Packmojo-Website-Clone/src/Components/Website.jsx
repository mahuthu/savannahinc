import React from "react";
import backgroundImage from '../Dataset/bac3.jpg'; // Import your background image
import styles from './website.module.css';

const processSteps = [
  {
    logo: <i className="fas fa-code"></i>,
    id: "1",
    title: "Website Development",
    description: "We specialize in creating robust eCommerce solutions tailored to your business needs. From user-friendly shopping carts to secure payment gateways, we ensure a seamless online shopping experience. We also offer other various website development services including portfolio websites, blog or personal websites, educational websites, corporate or business websites and nonprofit or charity websites.",
  },
];

const Process1 = () => {
  const processDisplay = processSteps.map((step, index) => (
    <div
      className={`${styles.processStep} ${index % 2 === 0 ? "bg-light" : "bg-light"}`} // Change col-lg-4 to col-lg-12 for full width
      key={step.id}
      style={{ order: index % 2 === 0 ? 1 : -1, marginBottom: "10px" }} // Added marginBottom for gap reduction
    >
      <h1>{step.logo}</h1>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
  ));

  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <hr style={{ margin: "20px auto", maxWidth: "80%" }} /> {/* Added underline */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row text-center">
            {processDisplay}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Process1;
