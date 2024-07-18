import React from 'react'
import Button from './UI/Button'
import backgroundImage from "../Dataset/nairobi2.jpg";

const AboutUs = () => {
  return (
    <section className='py-5' style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className='container-fluid py-5'>
        <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center font-bold mb-8">
         Welcome to Savannah Builders
       </h2>
      <p className="text-lg text-center mb-8">
        A place where digital design innovation and experience converge. As a leading web design business in Kenya, we take great satisfaction in offering expert web design services that break through existing barriers to efficiency and creativity.
      </p>
       <h3 className="text-2xl sm:text-4xl font-bold mb-4">
         Web Design Services in Kenya
       </h3>
       <p className="text-lg mb-8">
         At Savannah Builders, we understand that a website acts as the digital face of your business and is a lot more than just an online presence. As a result of our team’s expertise in Kenyan web design and development, every project we work on is a perfect combination of outstanding functionality and eye-catching design. We provide top-notch web design services in Kenya that address the various needs of our clients with an attention to detail and a desire for excellence.
       </p>
     </div>
        </div>
    </section>
  )
}

export default AboutUs



// import React from 'react';

// const AboutUs = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center font-bold mb-8">
//         Welcome to Savannah Builders
//       </h2>
//       <p className="text-lg text-center mb-8">
//         A place where digital design innovation and experience converge. As a leading web design business in Kenya, we take great satisfaction in offering expert web design services that break through existing barriers to efficiency and creativity.
//       </p>
//       <h3 className="text-2xl sm:text-4xl font-bold mb-4">
//         Web Design Services in Kenya
//       </h3>
//       <p className="text-lg mb-8">
//         At Savannah Builders, we understand that a website acts as the digital face of your business and is a lot more than just an online presence. As a result of our team’s expertise in Kenyan web design and development, every project we work on is a perfect combination of outstanding functionality and eye-catching design. We provide top-notch web design services in Kenya that address the various needs of our clients with an attention to detail and a desire for excellence.
//       </p>
//     </div>
//   );
// };