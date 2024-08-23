import React from 'react';
import Button from './UI/Button';
import { Link } from 'react-router-dom';
import oneHub from '../Dataset/one-hub.svg';

const StartJourney = () => {
  const styles = {
    section: {
      paddingTop: '5rem',
      paddingBottom: '5rem',
      backgroundColor: '#f0f4ff',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    container: {
      paddingBottom: '5rem',
      textAlign: 'center',
    },
    h1: {
      color: '#000',
      fontSize: '2rem', // Default size for large screens
      fontWeight: 'bold',
    },
    p: {
      color: '#555',
      fontSize: '1.25rem', // Default paragraph size
    },
    image: {
      maxWidth: '80%',
      margin: '0 auto',
      display: 'block',
      marginTop: '4rem',
      borderRadius: '0.5rem',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    }
  };

  // Responsive adjustments using JavaScript
  if (window.innerWidth <= 1024) {
    styles.h1.fontSize = '2rem';
    styles.p.fontSize = '1.1rem';
  }

  if (window.innerWidth <= 768) {
    styles.h1.fontSize = '2rem';
    styles.p.fontSize = '1rem';
  }

  if (window.innerWidth <= 480) {
    styles.h1.fontSize = '1.5rem';
    styles.p.fontSize = '0.9rem';
  }

  return (
    <section style={styles.section}>
      <div className='container-fluid' style={styles.container}>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1 style={styles.h1}>
                Start your Journey Today
              </h1>
              <p style={styles.p}>
                Get to know our range of solutions and choose one that meets your needs.
              </p>
              <Link to="/aboutus">
                <Button className="mt-5">
                  Explore our Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className='container'>
          <img 
            src={oneHub} 
            alt="Dashboard preview" 
            style={styles.image}
          />
        </div>
      </div>
    </section>
  )
}

export default StartJourney;
