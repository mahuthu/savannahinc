import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import "../../Components/Styles.module.css";
import SubService from "../../Components/SubService";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import React from "react";
import lmsImage from "../../Dataset/lms.png";

const Lms = () => {

    const crmService = {
        title: "LMS Solutions",
        image: lmsImage,
        description: (
            <>
              <div className="icons-container d-flex justify-content-around flex-wrap bg-light" style={{ color: "#32325c" }}>
                    <div className="icon text-center">
                        <i className="fas fa-user-graduate fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Personalized Learning</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-play-circle fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Interactive Content</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-chart-line fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Analytics and Reporting</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-check-circle fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Compliance and Certification</p>
                    </div>
                </div>
                <p style={{ marginTop: "30px", marginBottom: "20px" }}>
                    Create engaging and effective learning experiences with custom learning management systems. LMS solutions offer personalized learning paths, interactive content, and advanced analytics to drive training and development.
                </p>
                <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px", marginTop: "30px" }}>
                    LMS solutions include:
                </p>
                <ul style={{ textAlign: "left" }}>
                    <li>Personalized Learning: Tailor learning paths and content to individual learners' needs, preferences, and learning styles.</li>
                    <li>Interactive Content: Engage learners with interactive modules, quizzes, videos, and simulations for effective learning experiences.</li>
                    <li>Analytics and Reporting: Track learner progress, assess performance, and generate reports for actionable insights and continuous improvement.</li>
                    <li>Compliance and Certification: Ensure regulatory compliance, deliver certification programs, and manage training records efficiently.</li>
                </ul>
                <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px", marginTop: "30px" }}>
                    Businesses benefit include:
                </p>
                <ul style={{ textAlign: "left" }}>
                    <li>Enhanced Training: Provide on-demand training, upskilling, and reskilling opportunities to improve knowledge and skills.</li>
                    <li>Improved Training ROI: Measure training effectiveness, identify areas for improvement, and maximize return on investment (ROI) in training initiatives.</li>
                    <li>Flexible Learning Environments: Offer flexible learning options, including mobile learning, self-paced modules, and virtual classrooms for diverse learner needs.</li>
                    <li>Comprehensive Learning Analytics: Gain insights into learner engagement, performance trends, and learning outcomes to optimize training strategies.</li>
                </ul>
                <p style={{ backgroundColor: "#32a372", color: "#fff", padding: "20px", borderRadius: "5px", textAlign: "left", marginTop: "50px" }}>
                    At Savannah Inc, we design and implement customized Learning Management Systems tailored to your training and development goals. Let us empower your learners with engaging and impactful learning experiences.
                </p>
            </>
        ),
      };
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 mainHeading="Learning Management System" subHeading="Home &raquo; Services" />
            

            <SubService title={crmService.title} image={crmService.image} description={crmService.description} />
 
            <Footer />
        
        </div>
    );
    }

export default Lms;
