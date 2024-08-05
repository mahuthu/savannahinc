import React, { useState, useEffect, useRef } from "react";
import backgroundImage from "../../Dataset/nairobi2.jpg";
import "./reviews.css";

const CustomerReviews = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [experience, setExperience] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [coffeeCups, setCoffeeCups] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current; // Store the current ref value in a variable
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect(); // Stop observing after animation starts
        }
      },
      { threshold: 0.5 } // Trigger when at least 50% of the component is visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (hasStarted) {
      // Function to increment values
      const incrementValue = (setter, endValue, duration) => {
        let startValue = 0;
        const stepTime = duration / endValue;
        const interval = setInterval(() => {
          startValue += 1;
          setter(startValue);
          if (startValue >= endValue) clearInterval(interval);
        }, stepTime);
      };

      incrementValue(setExperience, 2, 2000); // 2 years in 2 seconds
      incrementValue(setHappyCustomers, 17, 2000); // 17 customers in 2 seconds
      incrementValue(setSatisfaction, 100, 2000); // 100% in 2 seconds
      incrementValue(setCoffeeCups, 120, 2000); // 120 cups in 2 seconds
    }
  }, [hasStarted]);

  return (
    <section
      className="py-3"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        paddingTop: '150px',
        paddingBottom: '150px',
      }}
      ref={ref} // Attach the ref to the section
    >
      <div className="container-fluid1">
        <div className="container-lg">
          <div className="row text-center">
            <div className="col-12">
              <div className="overlay-text">
                <h2 style={{ color: "#fff", textAlign: "center" }}>We can help you to grow</h2>
                <h1 style={{ color: "#fff" }}>Your Business</h1>
                <h3 style={{ color: "#fff" }}>Experience the Difference</h3>
                <div className="big-numbers">
                  <div className="number">{experience}+ Years of Experience</div>
                  <div className="number">{happyCustomers}+ Happy Customers</div>
                  <div className="number">{satisfaction}% Satisfaction</div>
                  <div className="number">{coffeeCups} Cups of Coffee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
