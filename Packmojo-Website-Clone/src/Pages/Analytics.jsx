import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import "../Components/Styles.module.css";
import Services from "../Components/Services/ServiceAnalytics";
import AboutUs1 from "../Components/Aboutus/Aboutus6";
import React from "react"

const Business = () => {
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 mainHeading="Analytics, ML and AI Services" subHeading="Home &raquo; Analytics, ML and AI Services" />

            <Services/>
            <Footer />
        
        </div>
    );
    }

export default Business;
