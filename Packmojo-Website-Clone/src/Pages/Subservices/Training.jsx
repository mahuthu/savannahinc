import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import "../../Components/Styles.module.css";
import SubService from "../../Components/SubService";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import React from "react";
import trainingImage from "../../Dataset/training.png"

const Training = () => {
    const crmService = {
        title: "Training and Consultation Services",
        image: trainingImage,
        description: (
            <>
              <p>
                Get expert training and consultation services on various IT and business topics. Our training programs cover a range of technologies and best practices, empowering your team with the knowledge and skills to drive business growth.
              </p>
              <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px" }}>
                Our Training and Consultation services include:
              </p>
              <ul>
                <li>Technology Training: Provide hands-on training sessions on software tools, platforms, and technologies to enhance employee skills and productivity.</li>
                <li>Business Consultation: Offer strategic guidance and advice on leveraging IT solutions, optimizing processes, and achieving business objectives.</li>
                <li>Customized Workshops: Conduct tailored workshops and seminars to address specific business challenges and opportunities.</li>
                <li>Implementation Support: Assist in the implementation and adoption of new technologies, ensuring smooth transitions and maximizing benefits.</li>
              </ul>
              <p style={{ backgroundColor: "#32a372", color: "#fff", padding: "20px", borderRadius: "5px", textAlign: "left"  }}>
                We specialize in training your teams to effectively utilize CRM, ERP, SCM, and other systems to boost your business performance. Let us empower your workforce and drive success through technology and expertise.
              </p>
            </>
          ),      
        };
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 mainHeading="Training and Consultation" subHeading="Home &raquo; Services" />


            <SubService title={crmService.title} image={crmService.image} description={crmService.description} />

            <Footer />
        
        </div>
    );
    }

export default Training;