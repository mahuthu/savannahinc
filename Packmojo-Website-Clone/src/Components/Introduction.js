import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';
import classes from './Introduction.module.css';
import backgroundImage1 from "../Dataset/business.jpg";
import backgroundImage2 from "../Dataset/nairobi2.jpg";

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

    }, 60000);

    return () => clearInterval(interval);
  }, [nextImageIndex]);

  useEffect(() => {
    // Load particles.js and initialize it
    const scriptParticles = document.createElement('script');
    scriptParticles.src = '/scripts/particles.js'; // Path to particles.js
    scriptParticles.async = true;

    const scriptApp = document.createElement('script');
    scriptApp.src = '/scripts/app.js'; // Path to app.js
    scriptApp.async = true;

    document.body.appendChild(scriptParticles);
    document.body.appendChild(scriptApp);

    // Ensure particles.js has loaded and initialized
    scriptParticles.onload = () => {
      scriptApp.onload = () => {
        // Initialize particles.js if needed
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
    };

    // Cleanup scripts on component unmount
    return () => {
      document.body.removeChild(scriptParticles);
      document.body.removeChild(scriptApp);
    };
  }, []);

  return (
    <div className={classes.containerfluid}>
      {/* Background Image and Particles */}
      <div
        id="particles-js"
        className={`${classes.background} ${isFading ? classes.fadeOut : classes.fadeIn}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${images[currentImageIndex]})`,
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
                Discover More
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
