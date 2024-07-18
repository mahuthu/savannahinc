import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';
import classes from './Introduction.module.css';
import backgroundImage1 from "../Dataset/nairobi2.jpg";
import backgroundImage2 from "../Dataset/business.jpg"; // Add another image

const images = [backgroundImage1, backgroundImage2]; // Add more images if needed

const Introduction = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  useEffect(() => {
    setIsTypingComplete(false);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);  // Start fading out

      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % images.length);
        setIsFading(false);  // Start fading in
      }, 1000);  // Duration of fade-out

    }, 30000);  // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [nextImageIndex]);

  return (
    <div className={`${classes.containerfluid}`}>
      <div
        className={`${classes.background} ${isFading ? classes.fadeOut : classes.fadeIn}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${images[currentImageIndex]})`,
        }}
      />
      <div className="container">
        <div className="row align-items-center" style={{ height: '100vh' }}>
          <div className="col-12 text-start">
            <Typist
              className={classes.typist}
              avgTypingDelay={50}
              startDelay={100}
              cursor={{ show: false }}
              onTypingDone={handleTypingComplete}
            >
              <h1 className={classes.title}>
                Software to transform <br /> your business
              </h1>
              <h2 className={`mt-4 ${classes.subtitle}`}>
                Experience improved operational efficiency, amplified growth and strategic scaling with our software solutions.
              </h2>
            </Typist>
            {isTypingComplete && (
              <Link to="/aboutus" className={`btn btn-success px-4 py-2 ${classes.button}`}>
                Learn More
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
