import React, { useState, useEffect } from "react";
import EchoFriendly from "./EchoFriendly";
import StartJourney from "./StartJourney";
import Introduction from "./Introduction";
import Projects1 from "./Projects/project2";
import Services from "./Services/Services4";
import CustomerReviews from "./reviews/reviews";
import Process1 from "./process2";
import ContactStrip from "./strip/strip";
import Images from "./images";
import Services1 from "./Services/service6"
import CaseStudies from "./casestudies";
import Members from "./members"

const HomeContent = () => {
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
    <>
      <ContactStrip />
      <Introduction />
      <EchoFriendly />
      <Services />
      <Services1 />
      <CaseStudies />
      <Members />
      <Process1 />
      <CustomerReviews />
      <StartJourney />
      <div style={imagesStyle}>
        <Images />
      </div>
      <div style={projectsStyle}>
        <Projects1 />
      </div>
    </>
  );
};

export default HomeContent;
  
  