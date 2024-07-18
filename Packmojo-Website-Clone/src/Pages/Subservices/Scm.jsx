import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import "../../Components/Styles.module.css";
import SubService from "../../Components/SubService";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import React from "react";
import scmImage from "../../Dataset/scm.jpeg";

const Model = () => {
    const crmService = {
        title: "SCM Solutions",
        image: scmImage,
        description: (
            <>
              <div className="icons-container d-flex justify-content-around flex-wrap bg-light" style={{ color: "#32325c" }}>
                    <div className="icon text-center"> 
                        <i className="fas fa-boxes fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Inventory Optimization</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-truck fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Supplier Collaboration</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-shipping-fast fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Logistics and Distribution</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-eye fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Supply Chain Visibility</p>
                    </div>
                </div>
                <p style={{ marginTop: "30px", marginBottom: "20px" }}>
                    Streamline supply chain processes and logistics with customized SCM solutions. SCM systems optimize inventory levels, improve supplier collaboration, and reduce lead times, resulting in a more agile and efficient supply chain.
                </p>
                <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px", marginTop: "30px" }}>
                    SCM solutions include:
                </p>
                <ul style={{ textAlign: "left", marginBottom: "30px" }}>
                    <li>Inventory Optimization: Optimize inventory levels, reduce stockouts, and improve demand forecasting accuracy for cost savings and improved customer service.</li>
                    <li>Supplier Collaboration: Enhance collaboration with suppliers, automate procurement processes, and ensure timely deliveries to meet customer demand.</li>
                    <li>Logistics and Distribution: Streamline transportation, warehousing, and distribution operations for faster order fulfillment and reduced operational costs.</li>
                    <li>Supply Chain Visibility: Gain real-time visibility into supply chain activities, track shipments, and manage supply chain risks more effectively.</li>
                </ul>
                <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px", marginTop: "30px" }}>
                    Businesses benefit from SCM solutions by:
                </p>
                <ul style={{ textAlign: "left", marginBottom: "30px" }}>
                    <li>Improved Efficiency: Reduce lead times, minimize inventory holding costs, and optimize resource utilization for increased operational efficiency.</li>
                    <li>Enhanced Collaboration: Foster collaboration among supply chain partners, improve communication, and reduce delays and disruptions.</li>
                    <li>Customer Satisfaction: Ensure on-time deliveries, reduce order errors, and enhance overall customer satisfaction through streamlined supply chain processes.</li>
                    <li>Cost Savings: Identify cost-saving opportunities, optimize supply chain networks, and negotiate better terms with suppliers for cost reduction.</li>
                </ul>
                <p style={{ backgroundColor: "#32a372", color: "#fff", padding: "20px", borderRadius: "5px", textAlign: "left", marginTop: "50px" }}>
                    Savannah Inc specializes in designing and implementing tailored SCM solutions to optimize your supply chain operations. Let us help you achieve supply chain excellence and drive business growth.
                </p>
            </>
        ), 
        };
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 mainHeading="Model Training and Fine Tuning" subHeading="Home &raquo; Services" />

            <SubService title={crmService.title} image={crmService.image} description={crmService.description} />

            <Footer />
        
        </div>
    );
    }

export default Model;
