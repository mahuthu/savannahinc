
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import "../../Components/Styles.module.css";
import SubService from "../../Components/SubService";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import React from "react";
import erpImage from "../../Dataset/tableau1.jpg"


const ERP = () => {

    const crmService = {
        title: "Marketing Analytics Solutions",
        image: erpImage,
        description: (
            <>
                <div className="icons-container d-flex justify-content-around flex-wrap bg-light" style={{ color: "#32325c" }}>
                    <div className="icon text-center">
                        <i className="fas fa-chart-line fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Data Visualization</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-chart-line fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Trend Analysis</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-database fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Data Integration</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-chart-bar fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Performance Metrics</p>
                    </div>
                </div>
                <p style={{ marginTop: "30px", marginBottom: "20px" }}>
                    Leverage marketing analytics solutions for data-driven insights, trend analysis, and performance metrics visualization. Our solutions empower you to make informed marketing decisions and optimize campaign effectiveness.
                </p>
                <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px", marginTop: "30px" }}>
                    Marketing Analytics solutions include:
                </p>
                <ul style={{ textAlign: "left", marginBottom: "30px" }}>
                    <li>Data Visualization: Create interactive dashboards, charts, and graphs to visualize marketing data and trends.</li>
                    <li>Trend Analysis: Identify patterns, analyze customer behavior, and predict market trends for strategic decision-making.</li>
                    <li>Data Integration: Integrate marketing data sources for comprehensive insights and holistic view of marketing performance.</li>
                    <li>Performance Metrics: Track key performance indicators (KPIs), measure campaign effectiveness, and optimize marketing strategies.</li>
                </ul>
                <p style={{ backgroundColor: "#32a372", color: "#fff", padding: "20px", borderRadius: "5px", textAlign: "left", marginTop: "50px" }}>
                    Savannah Inc delivers Marketing Analytics Solutions tailored to your business needs. Let us help you unlock actionable insights and drive marketing success.
                </p>
            </>
        ),
      };
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 mainHeading="Marketing Analytics" subHeading="Home &raquo; Services" />

            <SubService title={crmService.title} image={crmService.image} description={crmService.description} />

            <Footer />
        
        </div>
    );
    }

export default ERP;
