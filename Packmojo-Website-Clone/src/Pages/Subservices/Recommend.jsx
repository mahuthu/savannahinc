
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import "../../Components/Styles.module.css";
import SubService from "../../Components/SubService";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import React from "react";
import erpImage from "../../Dataset/recommend.jpg"


const ERP = () => {

    const crmService = {
        title: "Recommendation System Solutions",
        image: erpImage,
        description: (
            <>
                <div className="icons-container d-flex justify-content-around flex-wrap bg-light" style={{ color:"#32325c" }}>
                    <div className="icon text-center">
                        <i className="fas fa-star fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Personalized Recommendations</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-search fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Content Discovery</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-chart-line fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Behavioral Analysis</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-comments fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Feedback Integration</p>
                    </div>
                </div>
                <p style={{ marginTop: "30px", marginBottom: "20px" }}>
                    Enhance user experience and engagement with personalized recommendation systems. Our recommendation systems solutions cover personalized recommendations, content discovery, behavioral analysis, and feedback integration for improved user satisfaction.
                </p>
                <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px", marginTop: "30px" }}>
                    Advantages of Recommendation Systems solutions include:
                </p>
                <ul style={{ textAlign: "left", marginBottom: "30px" }}>
                    <li>Personalized Recommendations: Provide tailored content recommendations based on user preferences and behavior.</li>
                    <li>Content Discovery: Improve content discovery and user engagement through intelligent recommendation algorithms.</li>
                    <li>Behavioral Analysis: Analyze user behavior and interactions to enhance recommendation accuracy and relevance.</li>
                    <li>Feedback Integration: Integrate user feedback and preferences into recommendation models for continuous improvement.</li>
                </ul>
                <p style={{ backgroundColor: "#32a372", color: "#fff", padding: "20px", borderRadius: "5px", textAlign: "left", marginTop: "50px" }}>
                    At Savannah Inc, we build Recommendation Systems Solutions that boost user engagement and drive business growth. Let us help you deliver personalized experiences that keep users coming back.
                </p>
            </>
        ),
      };
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 mainHeading="Chatbot Development" subHeading="Home &raquo; Services" />

            <SubService title={crmService.title} image={crmService.image} description={crmService.description} />

            <Footer />
        
        </div>
    );
    }

export default ERP;

