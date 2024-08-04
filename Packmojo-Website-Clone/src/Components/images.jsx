import React from 'react';

// Import images
import project1Image from '../Dataset/servercore.jpg';
import project2Image from '../Dataset/Salesforce.jpeg';
import project3Image from '../Dataset/Azure.jpg';
import project4Image from '../Dataset/tableau1.jpg';
import project5Image from '../Dataset/whatsapp.png';
import project6Image from '../Dataset/image2.png';
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
  // Inline styles
  const galleryStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows images to wrap to the next line if they don't fit in one row
    gap: '20px', // Space between images
    justifyContent: 'center',
    padding: '20px',
    overflowX: 'auto',
    marginTop: '20px', // Ensure it appears naturally at the top of the page
    backgroundColor: '#fff', // Match the background to ensure a natural appearance
  };

  const imgStyle = {
    width: '100px', // Image width
    height: '100px', // Image height
    objectFit: 'contain', // Ensures images fit within their container without being cut off
    transition: 'filter 0.3s ease',
    filter: 'grayscale(100%)',
    borderRadius: '8px', // Optional: add rounded corners
    flex: '1 1 auto', // Allows images to grow and shrink as needed
  };

  return (
    <div style={galleryStyle}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Project ${index + 1}`}
          style={imgStyle}
          onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
          onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
        />
      ))}
    </div>
  );
};

export default ImageGallery;