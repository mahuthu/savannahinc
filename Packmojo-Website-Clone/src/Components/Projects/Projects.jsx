import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import project1Image from '../../Dataset/blog.png'; // Import images for projects
import project2Image from '../../Dataset/cart.png';
import project3Image from '../../Dataset/initiateafrica.png';
// import project4Image from '../../Dataset/kofiake.png';
import project5Image from '../../Dataset/savannahai.png';
import project6Image from '../../Dataset/framer.png';

import './Project.css';
// Import other project images as needed

const Projects = () => {
  const projects = [
    {
      id: 1,
      imageUrl: project1Image,
      description: '<a href="https://savannah-ai.onrender.com/">Blog Website</a>',
    },
    {
      id: 2,
      imageUrl: project2Image,
      description: '<a href="https://kofia.netlify.app/"> eCommerce Website</a>',
    },
    {
      id: 3,
      imageUrl: project3Image,
      description: '<a href="https://intitiateafrica.netlify.app/">Business Website</a>',
    },
    
    {
      id: 5,
      imageUrl: project5Image,
      description: '<a href="https://savannahai.netlify.app/">Company Website</a>',
    },
    {
      id: 6,
      imageUrl: project6Image,
      description: '<a href="https://mahuthu.framer.ai/page">Portfolio Website</a>',
    },
    // Add more projects as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true,
    autoplaySpeed: 3000, // Autoplay interval in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="projects-container">
      <h2 className="projects-heading">Our Projects</h2>
      <Slider {...sliderSettings}>
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <img src={project.imageUrl} alt={`Project ${project.id}`} className="project-image" />
            <p className="project-description" dangerouslySetInnerHTML={{ __html: project.description }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
