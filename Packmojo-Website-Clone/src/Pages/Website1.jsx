import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import "../Components/Styles.module.css";
import Process1 from "../Components/Website";
import AboutUs1 from "../Components/Aboutus/Aboutus6";
import Services from "../Components/Services/Services";
import Projects from "../Components/Projects/Projects";
import FrequentlyAskedQuestions from "../Components/FrequentlyAskedQuestions";
import Pricing from "../Components/Pricing";
import CustomerReviews from "../Components/CustomerReviews";
import Process from "../Components/Process";
import React from "react";


const Website = () => {
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 mainHeading="Website Design and Development" subHeading="Home &raquo; Services" />

            
            <Process1/>
            <Services/>
            <Process />
            
            <Projects/>
            <FrequentlyAskedQuestions />
            <Pricing/>
            <CustomerReviews/>

            <Footer />
        
        </div>
    );
    }

export default Website;
