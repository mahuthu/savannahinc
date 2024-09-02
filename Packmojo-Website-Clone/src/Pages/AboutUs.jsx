import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import "../Components/Styles.module.css";
import Services from "../Components/Process3";
import AboutUs1 from "../Components/Aboutus/Aboutus1";
import CustomerReviews from "../Components/Insights";
import React from "react";
import StartJourney from "../Components/StartJourney";
import  { useState, useEffect } from "react";
import Projects1 from "../Components/Projects/project2";
import Images from "../Components/images";
import Data from "../Components/data";





const Business = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 992);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const imagesStyle = {
      display: isSmallScreen ? 'block' : 'none',
      width: '100%',
      marginBottom: '20px'
    };
  
    const projectsStyle = {
      display: isSmallScreen ? 'none' : 'block',
      width: '100%'
    };
    


    
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 />

            <Services/>
            <Data/>
            
                    <div style={imagesStyle}>
                <Images />
            </div>
            <div style={projectsStyle}>
                <Projects1 />
            </div>
            <StartJourney/>
            <CustomerReviews/>

            <Footer />
        
        </div>
    );
    }

export default Business;
