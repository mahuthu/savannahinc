
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import "../../Components/Styles.module.css";
import SubService from "../../Components/SubService";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import React from "react";
import erpImage from "../../Dataset/Tableau.png"


const ERP = () => {

    const crmService = {
        title: "Customer Analytics Solutions",
        image: erpImage,
        description: (
            <>
                <div className="icons-container d-flex justify-content-around flex-wrap bg-light" style={{ color:"#32325c" }}>
                    <div className="icon text-center">
                        <i className="fas fa-users fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Customer Segmentation</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-chart-pie fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Behavioral Analysis</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-chart-line fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Predictive Modeling</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-chart-bar fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Customer Insights</p>
                    </div>
                </div>
                <p style={{ marginTop: "30px", marginBottom: "20px" }}>
                    Utilize customer analytics solutions for in-depth customer segmentation, behavioral analysis, and predictive modeling. Our solutions help you understand customer behavior, preferences, and needs for targeted marketing strategies.
                </p>
                <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px", marginTop: "30px" }}>
                    Customer Analytics solutions include:
                </p>
                <ul style={{ textAlign: "left", marginBottom: "30px" }}>
                    <li>Customer Segmentation: Divide customers into segments based on demographics, behavior, and preferences for personalized marketing.</li>
                    <li>Behavioral Analysis: Analyze customer interactions, purchasing patterns, and engagement metrics for actionable insights.</li>
                    <li>Predictive Modeling: Forecast customer behavior, predict churn rates, and identify cross-selling opportunities using advanced analytics.</li>
                    <li>Customer Insights: Gain deep insights into customer needs, preferences, and sentiment to tailor marketing campaigns and improve customer experience.</li>
                </ul>
                <p style={{ backgroundColor: "#32a372", color: "#fff", padding: "20px", borderRadius: "5px", textAlign: "left", marginTop: "50px" }}>
                    At Savannah Inc, we offer Customer Analytics Solutions designed to enhance your customer understanding and drive strategic marketing decisions. Let us help you unlock valuable customer insights for business growth.
                </p>
            </>
        ),
      };
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 mainHeading="Customer Analytics" subHeading="Home &raquo; Services" />

            <SubService title={crmService.title} image={crmService.image} description={crmService.description} />

            <Footer />
        
        </div>
    );
    }

export default ERP;
