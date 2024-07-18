import React, { useEffect, useRef } from 'react';
import rightImage from "../Dataset/business.jpg"; // Replace with your actual image path
import styles from './Echo.module.css'; // Import the CSS module

const EchoFriendly = () => {
  const headingRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null); // New reference for the image

  useEffect(() => {
    const elements = [line1Ref.current, headingRef.current, line2Ref.current, paragraphRef.current, imageRef.current];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles['fade-in']);
            entry.target.classList.remove(styles['initial-hidden']);
          }
        });
      },
      {
        threshold: 0.1
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
    <section className={`${styles.section} py-5`} style={{ backgroundColor: "#fff", color: '#32325c' }}>
      <div className='container-fluid py-5'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className={styles['heading-container']}>
              <div ref={line1Ref} className={`${styles['heading-line']} ${styles['initial-hidden']} delay-1`}></div>
              <h1 ref={headingRef} className={`${styles['heading-text']} ${styles['initial-hidden']} delay-2`}>About Us</h1>
              <div ref={line2Ref} className={`${styles['heading-line']} ${styles['initial-hidden']} delay-1`}></div>
            </div>
            <p ref={paragraphRef} className={`${styles['small-font']} ${styles['initial-hidden']} delay-2`}>
              Savannah Inc, a place where digital design innovation and experience converge. With deep roots in our industry, we provide adequate and efficient superior IT solutions. We specialize in software development, customization, IT consultancy services and training, driving vision into action for our clients.
            </p>
          </div>
          <div className='col-lg-6' >
            <img ref={imageRef} src={rightImage} alt="Visual representation" className={`${styles.rightImage} ${styles['initial-hidden']} delay-2`} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EchoFriendly;
