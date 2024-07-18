import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import project1Image from '../../Dataset/servercore.jpg';
import project2Image from '../../Dataset/Salesforce.jpeg';
import project3Image from '../../Dataset/Azure.jpg';
import project4Image from '../../Dataset/tableau1.jpg';
import project5Image from '../../Dataset/whatsapp.png';
import project6Image from '../../Dataset/image2.png';
import project7Image from '../../Dataset/ODOO.jpeg';
import project9Image from '../../Dataset/zoho1.png';
import project10Image from "../../Dataset/infobip.png";
import './Projects2.css';

const Projects1 = () => {
  const projects = [
    { id: 1, imageUrl: project1Image, description: 'Servercore' },
    { id: 2, imageUrl: project2Image, description: 'Salesforce' },
    { id: 3, imageUrl: project3Image, description: 'Microsoft Azure' },
    { id: 5, imageUrl: project5Image, description: 'WhatsApp Business' },
    { id: 6, imageUrl: project6Image, description: 'Microsoft Dynamics' },
    { id: 7, imageUrl: project7Image, description: 'Odoo' },
    { id: 8, imageUrl: project4Image, description: 'Tableau' },
    { id: 9, imageUrl: project9Image, description: 'Zoho' },
    { id: 10, imageUrl: project10Image, description: 'Infobip' }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ],
   
  };

  return (
    <div className="projects-container">
      <h2 className="projects-heading">Our Partners</h2>
      <Slider {...sliderSettings}>
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <img src={project.imageUrl} alt={`Project ${project.id}`} className="project-image" />
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects1;
