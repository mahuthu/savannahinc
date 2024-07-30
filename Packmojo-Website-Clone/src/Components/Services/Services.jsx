import React from 'react';
import './Services.css'; // Import CSS file for styling
import backgroundImage from "../../Dataset/nairobi2.jpg"; // Import your background image

const Services = () => {
    const services = [
        {
            title: "Company Websites",
            description: "In the world of digital marketing, a company’s website serves as the cornerstone of its online identity. Savannah Inc takes pride in designing company websites that are not just visually appealing but are strategic tools in establishing a company’s digital footprint...",
        },
        {
            title: "Business Websites",
            description: "For small to medium-sized businesses, a website acts as a digital business card. It’s crucial for these websites to not only provide information but also to showcase the business’s unique selling propositions. Savannah Builders excels in creating business websites that are informative, engaging, and reflective of the business’s brand identity...",
        },
        
        {
            title: "eCommerce Websites",
            description: "In the realm of online shopping, an eCommerce website is your virtual storefront. Savannah Inc specializes in creating eCommerce platforms that are not just attractive but are also secure, easy to navigate, and efficient. We integrate the latest in shopping cart technology, payment gateways, and product management systems...",
        },
        {
            title: "Portfolio Websites",
            description: "For artists, designers, photographers, and other creatives, a portfolio website is a personal gallery to showcase their work. Savannah Inc designs portfolio websites that are visually compelling and focus on the individual’s creative work. Our designs are sleek and modern, and we ensure that the artwork or projects are the center of attention...",
        },
        
        {
            title: "Personal Websites",
            description: "Personal websites can range from blogs to professional portfolios or even personal branding platforms. Savannah Inc understands the personal touch needed for these types of websites. We design personal websites that are intimate, engaging, and reflective of the individual’s personality...",
        },
    ];

    

    return (
        <div className="services-container1" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="services-overlay">
            <h2 className="services-heading">Our Products</h2>

                <div className="service-info">
                    {services.map((service, index) => (
                        <div key={index} className={`service-section ${index % 2 === 0 ? "bg-light" : "bg-dark text-white"} `}
                         >
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Services;