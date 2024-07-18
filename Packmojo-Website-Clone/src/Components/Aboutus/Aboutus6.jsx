import React from "react";
import backgroundImage from "../../Dataset/nairobi2.jpg";

const AboutUs1 = ({ mainHeading, subHeading }) => {
  return (
    <section
      className="py-3"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        paddingTop: '150px',
        paddingBottom: '150px',
        color: '#fff',
      }}
    >
      <div className="container-fluid">
        <div className="row text-center justify-content-center"> {/* Center the content horizontally */}
          <div className="col-lg-8">
            <div className="overlay-text1">
              <div className="about-us-content">
                <h1 className="h2 fw-bold mb-4">{mainHeading}</h1>
                <h2 className="h4" style = {{textAlign:"center"}}>{subHeading}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs1;
