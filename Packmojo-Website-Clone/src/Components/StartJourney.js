import React from 'react';
import Button from './UI/Button';
import { Link } from 'react-router-dom';
// Import the SVG as a file path for better performance
import oneHub from '../Dataset/one-hub.svg';

const StartJourney = () => {
  return (
    <section className='py-5 bg-image' style={{
      backgroundColor: `#f0f4ff`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className='container-fluid py-5'>
        <div className='container'>
          <div className='row text-center py-5'>
            <div className='col-12'>
              <h1 className='text-black'>
                Start your Journey Today
              </h1>
              <p className='text-grey'>
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
      </div>
      <div className='container'>
        {/* Use the SVG as an image source */}
        <img 
          src={oneHub} 
          alt="Dashboard preview" 
          className="img-fluid mt-4 rounded shadow"
          style={{ maxWidth: '80%', margin: '0 auto', display: 'block' }}
        />
      </div>
    </section>
  )
}

export default StartJourney;
