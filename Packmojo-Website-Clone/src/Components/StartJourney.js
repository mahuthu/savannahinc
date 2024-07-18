import React from 'react'
import Button from './UI/Button'
import backgroundImage from "../Dataset/nairobi2.jpg";
import { Link } from 'react-router-dom';


const StartJourney = () => {
  return (
    <section className='py-5' style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className='container-fluid py-5'>
            <div className='container'>
                <div className='row text-center py-5'>
                    <div className='col-12'>
                        <h1>
                        Start your  Journey Today
                        </h1>
                        <p>
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
    </section>
  )
}

export default StartJourney
