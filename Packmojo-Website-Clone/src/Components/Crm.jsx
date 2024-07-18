import React from "react";

const processSteps = [
  {
    logo: <i className="fas fa-globe"></i>,
    id: "2",
    title: "Customization",
    description: "Our Customization services cover a wide range of solutions including ERP solutions, CRM solutions, third-party API integrations, custom Inventory Management Systems (IMS), Project Management Systems, Learning Management Systems (LMS), Supply Chain Management (SCM) Systems, and comprehensive training and consultation.",
  },

  
];

const Process1 = () => {
  const processDisplay = processSteps.map((step, index) => (
    <div
      className={`col-lg-12 ${index % 2 === 0 ? "bg-light" : "bg-light"}`} // Change col-lg-4 to col-lg-12 for full width
      key={step.id}
      style={{ order: index % 2 === 0 ? 1 : -1, marginBottom: "10px" }} // Added marginBottom for gap reduction
    >
      <h1>{step.logo}</h1>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
  ));

  return (
    <section>
      
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