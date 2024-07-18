import React from "react";

const SubService = ({ title, image, description }) => {
  return (
    <section>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12 bg-light">
              <div className="title-container">
                <h3>{title}</h3>
              </div>
              <div className="image-container" style={{marginBottom:"20px"}}>
                <img src={image} alt={title} style={{ width: "50%", maxWidth: "50%" }} />
              </div>
              <div className="description-container bg-dark text-white">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubService;
