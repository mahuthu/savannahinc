import React, { useState, useEffect } from 'react';

// Import images
import project1Image from '../Dataset/servercore.jpg';
import project2Image from '../Dataset/Salesforce.jpeg';
import project3Image from '../Dataset/Azure.jpg';
import project4Image from '../Dataset/tableau1.jpg';
import project5Image from '../Dataset/whatsapp.png';
import project6Image from '../Dataset/gold.jpeg';
import project7Image from '../Dataset/ODOO.jpeg';
import project9Image from '../Dataset/zoho1.png';
import project10Image from '../Dataset/infobip.png';

const images = [
  project1Image,
  project2Image,
  project3Image,
  project4Image,
  project5Image,
  project6Image,
  project7Image,
  project9Image,
  project10Image,
];

const ImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImageIndex(randomIndex);

      // After revealing the image, reset the index after a delay
      setTimeout(() => {
        setCurrentImageIndex(null);
      }, 1000); // Time to keep the image in color
    }, 2000); // Time between reveals

    return () => clearInterval(interval);
  }, []);

  // Inline styles
  const galleryStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
    overflowX: 'auto',
    marginTop: '20px',
    backgroundColor: '#fff',
  };

  const imgStyle = (index) => ({
    width: '100px',
    height: '100px',
    objectFit: 'contain',
    transition: 'filter 0.5s ease',
    filter: currentImageIndex === index ? 'grayscale(0%)' : 'grayscale(100%)',
    borderRadius: '8px',
    flex: '1 1 auto',
  });

  return (
    <div style={galleryStyle}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Project ${index + 1}`}
          style={imgStyle(index)}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
