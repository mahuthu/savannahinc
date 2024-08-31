import React from "react";
import HomeContent from "../Components/HomeContent";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import Contact from "../Components/support";
import "../Components/Styles.module.css";
import "../Components/Home.module.css";

const Home = () => {
    // Common style for floating icons
    const iconStyle = {
        position: 'fixed',
        bottom: '20px', // Adjust as needed
        right: '20px', // Adjust as needed
        backgroundColor: '#000', // Default background color
        borderRadius: '50%',
        padding: '10px', // Space around the icon
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional shadow effect
        color: '#fff', // Color of the icon
        textDecoration: 'none', // Remove underline from link
        fontSize: '24px', // Size of the icon
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px', // Width of the icon container
        height: '50px', // Height of the icon container
        zIndex: 1000 // Ensure icons are above other content
    };

    // Specific styles for WhatsApp and Phone icons
    const whatsappStyle = {
        ...iconStyle,
        backgroundColor: '#25D366', // WhatsApp green color
    };

    const phoneStyle = {
        ...iconStyle,
        backgroundColor: '#000', // Phone icon background color
        bottom: '80px', // Adjust to avoid overlap with WhatsApp icon
    };

    return (
        <div className="App">
            <Navbar />
            <HomeContent />
            <Contact />
            <Footer />

            {/* WhatsApp Icon */}
            <div style={whatsappStyle}>
                <a href="https://wa.me/+254726258462" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>

            {/* Phone Icon */}
            <div style={phoneStyle}>
                <a href="tel:+254793704217" style={{ color: '#fff' }}>
                    <i className="fas fa-phone-alt"></i>
                </a>
            </div>
        </div>
    );
}

export default Home;
