import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import "../Components/Styles.module.css";
import Con from "../Components/Cont/Cont";
import AboutUs1 from "../Components/Aboutus/Aboutus6";
import React from "react";

const Contact = () => {
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 mainHeading="Contact Us" subHeading="Home &raquo; Contact Us" />

            <Con/>
            <Footer />
        
        </div>
    );
    }

export default Contact;