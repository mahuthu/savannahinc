import React, { useEffect, useRef } from 'react';
import styles from './Echo.module.css';
import laptopImage from "../Dataset/comp1.png"; // Replace with your actual image path
import appStoreImage from "../Dataset/appStore1.png"; // Replace with your actual image path
import googlePlayImage from "../Dataset/googlePlay2.png"; // Replace with your actual image path
import backgroundImage from '../Dataset/bac3.jpg'; // Replace with your actual background image path

const EchoFriendly = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const badgesRef = useRef(null);
  const laptopImageRef = useRef(null);
  const mobileImageRef = useRef(null);

  useEffect(() => {
    const elements = [titleRef.current, descriptionRef.current, badgesRef.current, laptopImageRef.current, mobileImageRef.current];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles['fade-in']);
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    elements.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section className={styles.section}
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    >
      <div 
        className={styles.container}
       
      >
        <div className={styles.content}>
          <h1 ref={titleRef} className={`${styles.title} ${styles['initial-hidden']}`}>
            About Us
          </h1>
          <p ref={descriptionRef} className={`${styles.description} ${styles['initial-hidden']}`}>
            Nathan Digital offers an intuitive and engaging user interface that delivers a seamless and
            satisfying user experience through responsive Web & Mobile application - Available in iOS &
            Android platforms.
          </p>
          <div ref={badgesRef} className={`${styles.badges} ${styles['initial-hidden']}`}>
            <img src={appStoreImage} alt="Download on the App Store" className={styles.badge} />
            <img src={googlePlayImage} alt="Get it on Google Play" className={styles.badge} />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img ref={laptopImageRef} src={laptopImage} alt="Laptop Interface" className={`${styles.laptopImage} ${styles['initial-hidden']}`} />
        </div>
      </div>
    </section>
  );
}

export default EchoFriendly;
