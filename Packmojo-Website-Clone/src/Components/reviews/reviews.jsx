import React from "react";
import backgroundImage from "../../Dataset/nairobi2.jpg";
import "./reviews.css";

const CustomerReviews = () => {
  return (
    <section
      className="py-3"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`, // Added linear gradient for opacity
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative', // Add position relative for overlay
        paddingTop: '150px', // Increased padding at the top
        paddingBottom: '150px', // Increased padding at the bottom
      }}
    >
      <div className="container-fluid1">
        <div className="container-lg"> {/* Increased container size */}
          <div className="row text-center">
            <div className="col-12">
              
              <div className="overlay-text">
                <h2 style={{ color: "#fff", textAlign:"center" }}>We can help you to grow</h2>
                <h1 style={{ color: "#fff" }}>Your Business</h1>
                <h3 style={{ color: "#fff" }}>Experience the Difference</h3>
                <div className="big-numbers">
                  <div className="number">2+ Years of Experience</div>
                  <div className="number">17+ Happy Customers</div>
                  <div className="number">100% Satisfaction</div>
                  <div className="number">120 Cups of Coffee</div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
