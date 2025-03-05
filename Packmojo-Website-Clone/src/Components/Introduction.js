import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';
import classes from './Introduction.module.css';
import backgroundImage2 from "../Dataset/nairobi2.jpg";
import backgroundImage1 from "../Dataset/business.jpg";
import line from "../Dataset/line.svg";

const images = [backgroundImage1, backgroundImage2];

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
      setIsFading(true);

      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % images.length);
        setIsFading(false);
      }, 1000);

    }, 100000);

    return () => clearInterval(interval);
  }, [nextImageIndex]);

  useEffect(() => {
    // Create a function to load particles.js from CDN
    const loadParticlesJS = () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.async = true;
      script.onload = () => {
        if (window.particlesJS) {
          window.particlesJS('particles-js', {
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: '#ffffff'
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000'
                },
                polygon: {
                  nb_sides: 5
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                },
                onclick: {
                  enable: true,
                  mode: 'push'
                },
                resize: true
              }
            },
            retina_detect: true
          });
        }
      };
      document.body.appendChild(script);
      return script;
    };

    // Load the script
    const script = loadParticlesJS();

    // Cleanup
    return () => {
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={classes.containerfluid}>
      <div className={classes.splitContainer}>
        {/* Left Content Section */}
        <div className={classes.contentSection}>
          <div className={classes.contentWrapper}>
            <Typist
              className={classes.typist}
              avgTypingDelay={50}
              startDelay={100}
              cursor={{ show: false }}
              onTypingDone={handleTypingComplete}
            >
              <h1 className={classes.title}>
                Software to transform<br /> your business.
                <img src={line} alt="decorative line" className={classes.decorativeLine} />
              </h1>
              <h2 className={classes.subtitle}>
                Experience improved operational efficiency, amplified growth and strategic scaling with our software solutions.
              </h2>
            </Typist>
            {isTypingComplete && (
              <Link to="/aboutus" className={classes.button}>
                Discover More
              </Link>
            )}
          </div>
        </div>

        {/* Right Image Section */}
        <div className={classes.imageSection}>
          <div
            id="particles-js"
            className={`${classes.background} ${isFading ? classes.fadeOut : classes.fadeIn}`}
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;