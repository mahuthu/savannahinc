import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import "../../Components/Styles.module.css";
import SubService from "../../Components/SubService";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import imsImage from "../../Dataset/ims.jpeg"
import React from "react";

const Ims = () => {

    const crmService = {
        title: "IMS Solutions",
        image: imsImage,
        description:  (
          <>
          <div className="icons-container d-flex justify-content-around flex-wrap bg-light" style={{ color:"#32325c" }}>
              <div className="icon text-center">
                  <i className="fas fa-box fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                  <p>Real-time Inventory Tracking</p>
              </div>
              <div className="icon text-center">
                  <i className="fas fa-chart-line fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                  <p>Demand Forecasting</p>
              </div>
              <div className="icon text-center">
                  <i className="fas fa-cogs fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                  <p>Inventory Optimization</p>
              </div>
              <div className="icon text-center">
                  <i className="fas fa-chart-bar fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                  <p>Data-driven Insights</p>
              </div>
          </div>
          <p style={{ marginTop: "30px", marginBottom: "20px" }}>
              Optimize inventory management with customized solutions tailored to your business needs. IMS solutions offer real-time inventory tracking, demand forecasting, and inventory optimization, reducing costs and improving efficiency.
          </p>
          <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px", marginTop: "30px", marginBottom: "20px" }}>
              IMS solutions include:
          </p>
          <ul style={{ textAlign: "left", marginBottom: "30px" }}>
              <li>Real-time Inventory Tracking: Monitor stock levels, track inventory movement, and manage stockouts effectively to prevent disruptions.</li>
              <li>Demand Forecasting: Predict demand patterns, optimize inventory levels, and minimize excess inventory and stock obsolescence.</li>
              <li>Inventory Optimization: Implement strategies to optimize inventory turnover, reduce carrying costs, and improve cash flow.</li>
              <li>Data-driven Insights: Leverage data analytics to gain insights into inventory performance, identify trends, and make data-driven decisions.</li>
          </ul>
          <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px", marginTop: "30px", marginBottom: "20px" }}>
              Businesses benefit from IMS solutions:
          </p>
          <ul style={{ textAlign: "left", marginBottom: "30px" }}>
              <li>Cost Reduction: Reduce inventory holding costs, minimize stockouts, and improve inventory turnover to optimize working capital.</li>
              <li>Improved Efficiency: Streamline inventory processes, automate replenishment, and enhance supply chain visibility for efficient operations.</li>
              <li>Enhanced Customer Service: Ensure product availability, fulfill orders promptly, and meet customer demand with accurate inventory management.</li>
              <li>Scalability: Scale your inventory management system as your business grows, accommodating new products, locations, and sales channels.</li>
          </ul>
          <p style={{ backgroundColor: "#32a372", color: "#fff", padding: "20px", borderRadius: "5px", textAlign: "left", marginTop: "50px" }}>
              At Savannah Inc, we specialize in designing and implementing customized Inventory Management Systems tailored to your business requirements. Let us help you streamline your inventory processes and achieve operational excellence.
          </p>
      </>
  ),
      };
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 mainHeading="Inventory Management System" subHeading="Home &raquo; Services" />

            <SubService title={crmService.title} image={crmService.image} description={crmService.description} />

            <Footer />
        
        </div>
    );
    }

export default Ims;
