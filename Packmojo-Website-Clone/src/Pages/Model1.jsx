import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import "../Components/Styles.module.css";
import Process1 from "../Components/Model";
import AboutUs1 from "../Components/Aboutus/Aboutus6";
import React from "react";

const Model = () => {
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 mainHeading="Model Training and Fine Tuning" subHeading="Home &raquo; Services" />


            <Process1/>
            <Footer />
        
        </div>
    );
    }

export default Model;
