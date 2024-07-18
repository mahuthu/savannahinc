import React from "react";

const processSteps = [
  {
    logo: <i className="fas fa-magic"></i>,
    id: "1",
    title: "Software Development",
    description: "AGILE offers scalable end-to-end application development and management solutions from requirement analysis for deployment and rollout. We are developing software, related to pension administration, manufacturing, Sacco Solutions, Education / School Management Solutions, Investment Solutions, Enterprise Resource Planning Solutions, Public Sector Solutions, document management solutions, mobile solutions.",
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
      <div className="container-fluid py-5" style={{ marginBottom: "-30px" }}> {/* Adjusted marginBottom */}
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h2>Company Overview</h2>
              <h1>Savannah Inc has been driving vision into action for our clients</h1>
              <p>We consult for high-end technology implementation at clients’ site or implementation of new technology according to the clients’ requirement or upgrading, enhancing the existing facilities in the clients end with the new technology integrated with the existing one. Our consulting services cover:</p>
            </div>
          </div>
        </div>
      </div>
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