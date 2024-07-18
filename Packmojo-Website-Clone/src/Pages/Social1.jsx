import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import SubService from "../Components/SubService";
import AboutUs1 from "../Components/Aboutus/Aboutus6";
import "../Components/Styles.module.css";

const Training = () => {
    const services = [
        {
            title: "Social Media Management Training and Consultation",
            description: (
                <>
                    <p>
                        Enhance your social media presence and engagement with our Social Media Management Training and Consultation services. We offer expertise in managing various platforms such as Facebook, Instagram, Twitter, LinkedIn, and more.
                    </p>
                    <div className="icons-container d-flex justify-content-around flex-wrap">
                        <div className="icon text-center">
                            <i className="fab fa-facebook fa-3x" style={{ color: "#4267B2" }}></i>
                            <p>Facebook Management</p>
                        </div>
                        <div className="icon text-center">
                            <i className="fab fa-instagram fa-3x" style={{ color: "#E4405F" }}></i>
                            <p>Instagram Strategies</p>
                        </div>
                        {/* Add more icons and descriptions for other social media platforms */}
                    </div>
                </>
            ),
        },
        {
            title: "WhatsApp Business Integration Training and Consultation",
            description: (
                <>
                    <p>
                        Integrate WhatsApp Business seamlessly into your operations with our Training and Consultation services. We guide you through setup, mobile integration, automated messaging, and leveraging WhatsApp for customer support and marketing.
                    </p>
                    <div className="icons-container d-flex justify-content-around flex-wrap">
                        <div className="icon text-center">
                            <i className="fab fa-whatsapp fa-3x" style={{ color: "#25D366" }}></i>
                            <p>WhatsApp Business Setup</p>
                        </div>
                        <div className="icon text-center">
                            <i className="fas fa-mobile-alt fa-3x" style={{ color: "#555555" }}></i>
                            <p>Mobile Integration</p>
                        </div>
                        {/* Add more icons and descriptions for WhatsApp Business features */}
                    </div>
                </>
            ),
        },
        // Include more services as needed
    ];

    return (
        <div className="App">
            <Navbar />
            <AboutUs1 mainHeading="Social Media Management and WhatsApp Business Integration" subHeading="Home » Services" />

            {services.map((service, index) => (
                <SubService key={index} title={service.title}  description={service.description} />
            ))}

            <Footer />
        </div>
    );
};

export default Training;
