import React from 'react';
import Slider from 'react-slick';
import { CheckCircle2 } from 'lucide-react';
import { price } from '../constants/Data';
import './pricing.css'; // Import your custom CSS file for this component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Pricing = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show one pricing option per slide initially
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 480, // Adjust breakpoint for smaller mobile devices
        settings: {
          slidesToShow: 1, // Show one pricing option per slide on smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Adjust breakpoint for larger mobile devices
        settings: {
          slidesToShow: 2, // Show two pricing options per slide on larger mobile devices
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Adjust breakpoint for tablets or larger devices
        settings: {
          slidesToShow: 3, // Show three pricing options per slide on tablets
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pricing-container">
      <h2 className="pricing-heading">Pricing</h2>
      <Slider {...sliderSettings}>
        {price.map((option, index) => (
          <div key={index} className="pricing-option">
            <div className="pricing-card">
              <p className="pricing-category">{option.category || 'AI Generated Websites'}</p>
              <p className="pricing-title">{option.plan}</p>
              {option.best && (
                <span className="pricing-badge">{option.best}</span>
              )}
              <p className="pricing-price">{option.price}</p>
              <ul className="pricing-features">
                {option.list.map((feature, index) => (
                  <li key={index} className="pricing-feature">
                    <CheckCircle2 className="feature-icon" />
                    <span className="feature-text">{feature.text}</span>
                  </li>
                ))}
              </ul>
              <button className="subscribe-button" type="button">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Pricing;
