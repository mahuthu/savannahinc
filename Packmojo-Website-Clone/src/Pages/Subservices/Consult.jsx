import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import "../../Components/Styles.module.css";
import SubService from "../../Components/SubService";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import React from "react";
import crmImage from "../../Dataset/training.png"


const Training = () => {

    const crmService = {
        title: "AI training and Consultation",
        image: crmImage,
        description: (
            <>
                <div className="icons-container d-flex justify-content-around flex-wrap bg-light" style={{ color:"#32325c" }}>
                    <div className="icon text-center">
                        <i className="fas fa-lightbulb fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Ideation Workshops</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-chalkboard-teacher fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>AI Training Programs</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-briefcase fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Business Integration</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-cogs fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Workflow Optimization</p>
                    </div>
                </div>
                <p style={{ marginTop: "30px", marginBottom: "20px" }}>
                    Enhance business productivity with AI training and consultation services. Our offerings include ideation workshops, AI training programs, business integration, and workflow optimization for leveraging AI effectively in your organization.
                </p>
                <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px", marginTop: "30px" }}>
                    Our AI Training and Consultation services provide:
                </p>
                <ul style={{ textAlign: "left", marginBottom: "30px" }}>
                    <li>Ideation Workshops: Collaborative sessions to brainstorm AI solutions and strategies for business improvement.</li>
                    <li>AI Training Programs: Tailored training programs to upskill employees and leverage AI technologies effectively.</li>
                    <li>Business Integration: Seamless integration of AI solutions into existing business processes and workflows.</li>
                    <li>Workflow Optimization: Optimization of workflows and automation of tasks using AI for enhanced productivity.</li>
                </ul>
                <p style={{ backgroundColor: "#32a372", color: "#fff", padding: "20px", borderRadius: "5px", textAlign: "left", marginTop: "50px" }}>
                    At Savannah Inc, we offer comprehensive AI Training and Consultation services to empower your workforce and drive business growth through AI innovation. Let us help you unlock the full potential of AI for improved productivity and efficiency.
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