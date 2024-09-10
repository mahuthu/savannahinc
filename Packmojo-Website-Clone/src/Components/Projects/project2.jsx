import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import project1Image from '../../Dataset/servercore.jpg';
import project2Image from '../../Dataset/Salesforce.jpeg';
import project3Image from '../../Dataset/microsoft azure.png';
import project4Image from '../../Dataset/tableau1.jpg';
import project5Image from '../../Dataset/whatsapp.png';
import project6Image from '../../Dataset/gold2.png';
import project7Image from '../../Dataset/odoolearning.png';
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
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: true,
    arrows: false,
    variableWidth: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } }
    ],
  };

  const headingStyle = {
    marginBottom: '20px',
    color: '#000',
    position: 'relative',
    paddingLeft: '30px',
    fontSize: '1.4rem',
    paddingTop: '40px',
  };

  const headingBeforeStyle = {
    content: '""',
    position: 'absolute',
    left: "20px",
    top: '80%',
    transform: 'translateY(-50%)',
    height: '25px',
    width: '3px',
    borderRadius: '2px',
    backgroundColor: "#41e096",

  };

  return (
    <div>
      <h2 style={headingStyle}>
        Our Partners
        <span style={headingBeforeStyle}></span>
      </h2>
    <div className="projects-container">
        <Slider {...sliderSettings}>
          {projects.map((project) => (
            <div key={project.id}>
              <img src={project.imageUrl} alt={project.description} className="project-image" />
            </div>
          ))}
        </Slider>
      {/* <h3 className="projects-subheading"></h3> */}
    </div>
    </div>
  );
};

export default Projects1;