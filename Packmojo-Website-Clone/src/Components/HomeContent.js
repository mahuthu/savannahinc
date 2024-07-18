import React from "react";
import EchoFriendly from "./EchoFriendly";
import StartJourney from "./StartJourney";
import Introduction from "./Introduction";
import Projects1 from "./Projects/project2"
import Services from "./Services/Services4"
import CustomerReviews from "./reviews/reviews";
import Process1 from "./process2"
import ContactStrip from "./strip/strip";
const HomeContent = () => {
  return (
    <>    <ContactStrip/>
          <Introduction />
          <EchoFriendly />
          <Services />
          <Process1/>
          <CustomerReviews/>
          <StartJourney />
          <Projects1/>
    </>
  );
};

export default HomeContent;
