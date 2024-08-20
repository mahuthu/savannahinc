import React from 'react';
import styles from './members.module.css';

import person1 from '../Dataset/person1.jpeg';
import person2 from '../Dataset/person2.jpeg';
import person3 from '../Dataset/person3.jpeg';
import person4 from '../Dataset/person4.jpeg';
import person5 from '../Dataset/person5.jpeg';
import person6 from '../Dataset/person6.jpeg';
import person7 from '../Dataset/person7.jpeg';
import logoNathanDigital from "../Dataset/2.png"

const IndustryPartnership = () => {
  return (
    <div className={styles.industryPartnership}>
      <div className={`${styles.imageRow} ${styles.topRow}`}>
        <img src={person1} alt="Person 1" className={styles.personImage} />
        <div className={`${styles.colorBlock} ${styles.yellow}`}></div>
        <img src={person2} alt="Person 2" className={`${styles.personImage} ${styles.round}`} />
        <div className={`${styles.colorBlock} ${styles.blue} ${styles.circle}`}></div>
        <img src={person3} alt="Person 3" className={`${styles.personImage} ${styles.round}`} />
        <div className={`${styles.colorBlock} ${styles.green}`}></div>
        <img src={person4} alt="Person 4" className={`${styles.personImage} ${styles.round}`} />
      </div>
      
      <div className={styles.textContent}>
        <h2>Join 80+ industries in partnering with</h2>
        <img src={logoNathanDigital} alt="Nathan Digital Logo" className={styles.nathanLogo} />
        <p>for success business growth</p>
      </div>
      
      <div className={`${styles.imageRow} ${styles.bottomRow}`}>
        <img src={person5} alt="Person 5" className={`${styles.personImage} ${styles.round}`} />
        <div className={`${styles.colorBlock} ${styles.green} ${styles.roundedSquare}`}></div>
        <img src={person6} alt="Person 6" className={`${styles.personImage} ${styles.round}`} />
        <div className={`${styles.colorBlock} ${styles.yellow} ${styles.rectangle}`}></div>
        <img src={person7} alt="Person 7" className={styles.personImage} />
      </div>
    </div>
  );
};

export default IndustryPartnership;
