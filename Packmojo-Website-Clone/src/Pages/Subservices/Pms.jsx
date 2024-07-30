import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import "../../Components/Styles.module.css";
import SubService from "../../Components/SubService";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import React from "react";
import pmsImage from "../../Dataset/pms.png";

const Pms = () => {

    const crmService = {
        title: "PMS Solutions",
        image: pmsImage,
        description: (
          
            <>
                <div className="icons-container d-flex justify-content-around flex-wrap bg-light" style={{ color:"#32325c" }}>
                    <div className="icon text-center">
                        <i className="fas fa-tasks fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Task Management</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-users fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Collaboration Tools</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-chart-bar fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Resource Allocation</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-chart-line fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Timeline and Gantt Charts</p>
                    </div>
                </div>
                <p style={{ marginTop: "30px", marginBottom: "20px" }}>
                    Efficiently manage projects and tasks with customized project management systems. Project management solutions streamline workflows, enhance collaboration, and ensure timely project delivery with comprehensive project tracking.
                </p>
                <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px", marginTop: "30px" }}>
                    PMS solutions include:
                </p>
                <ul style={{ textAlign: "left", marginBottom: "30px" }}>
                    <li>Task Management: Organize tasks, assign responsibilities, and track progress to ensure project milestones are met.</li>
                    <li>Collaboration Tools: Facilitate team communication, file sharing, and collaboration on project-related activities.</li>
                    <li>Resource Allocation: Optimize resource allocation, manage budgets, and track project costs for efficient resource utilization.</li>
                    <li>Timeline and Gantt Charts: Create visual timelines, Gantt charts, and project schedules to monitor project timelines and dependencies.</li>
                </ul>
                <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px", marginTop: "30px" }}>
                    Businesses benefit include:
                </p>
                <ul style={{ textAlign: "left", marginBottom: "30px" }}>
                    <li>Improved Project Efficiency: Streamline workflows, reduce bottlenecks, and enhance project coordination for faster project delivery.</li>
                    <li>Enhanced Collaboration: Foster team collaboration, improve communication, and ensure everyone stays aligned with project goals.</li>
                    <li>Resource Optimization: Allocate resources effectively, manage workloads, and optimize resource utilization for cost savings.</li>
                    <li>Project Tracking and Reporting: Monitor project progress, generate reports, and analyze performance metrics to make data-driven decisions.</li>
                </ul>
                <p style={{ backgroundColor: "#32a372", color: "#fff", padding: "20px", borderRadius: "5px", textAlign: "left", marginTop: "50px" }}>
                    Savannah Inc, specializes in designing and implementing customized Project Management Systems tailored to your project management needs. Let us help you streamline your project workflows and achieve project success.
                </p>
            </>
        ),

      };
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 mainHeading="Project Management System" subHeading="Home &raquo; Services" />


            <SubService title={crmService.title} image={crmService.image} description={crmService.description} />

            <Footer />
        
        </div>
    );
    }

export default Pms;
