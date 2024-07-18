
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import "../../Components/Styles.module.css";
import SubService from "../../Components/SubService";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import React from "react";
import erpImage from "../../Dataset/infobip.png";


const ERP = () => {

    const crmService = {
        title: "Chatbot Development",
        image: erpImage,
        description: (
            <>
                <div className="icons-container d-flex justify-content-around flex-wrap bg-light" style={{ color: "#32325c" }}>
                    <div className="icon text-center">
                        <i className="fas fa-robot fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Chatbot Design</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-code fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Chatbot Development</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-cogs fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Integration</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-lightbulb fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>AI-Powered Solutions</p>
                    </div>
                </div>
                <p style={{ marginTop: "30px", marginBottom: "20px" }}>
                    Transform customer interactions with intelligent chatbot solutions. Our chatbot development services cover design, development, integration, and AI-powered solutions for seamless customer engagement and support.
                </p>
                <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px", marginTop: "30px" }}>
                     Chatbot Development solutions include:
                </p>
                <ul style={{ textAlign: "left", marginBottom: "30px" }}>
                    <li>Chatbot Design: Create intuitive and user-friendly chatbot interfaces for enhanced user experience.</li>
                    <li>Chatbot Development: Build custom chatbot solutions tailored to your business needs and customer requirements.</li>
                    <li>Integration: Integrate chatbots seamlessly with your existing systems and platforms for unified communication.</li>
                    <li>AI-Powered Solutions: Implement AI and machine learning capabilities for intelligent chatbot responses and decision-making.</li>
                </ul>
                <p style={{ backgroundColor: "#32a372", color: "#fff", padding: "20px", borderRadius: "5px", textAlign: "left", marginTop: "50px" }}>
                    Savannah Inc, specializes in Chatbot Development Solutions that enhance customer interactions and drive business growth. Let us create conversational experiences that delight your customers.
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
