import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import SubService from "../../Components/SubService";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import erpImage from "../../Dataset/erp1.jpg";

const ERP = () => {
    const erpService = {
        title: "ERP Solutions",
        image: erpImage,
        description: (
            <>
                <div className="icons-container d-flex justify-content-around flex-wrap bg-light" style={{ color:"#32325c" }}>
                    <div className="icon text-center">
                        <i className="fas fa-cogs fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Streamlined Operations</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-chart-line fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Real-time Insights</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-sitemap fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Integrated Systems</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-balance-scale fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Scalability</p>
                    </div>
                </div>
                <p style={{marginTop: "30px", marginBottom: "20px"}}>

                    Enhance business operations and efficiency with Microsoft Dynamics ERP solutions. ERP solutions integrate seamlessly with your existing systems, providing real-time insights, automating processes, and optimizing resource allocation.
                </p>
                <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px", marginTop: "30px" }}>
                    ERP solutions include:
                </p>
                <ul style={{ textAlign: "left" }}>
                    <li>Streamlined Operations: Consolidate and automate business processes, reduce manual tasks, and improve operational efficiency across departments.</li>
                    <li>Real-time Insights: Access up-to-date data and analytics for informed decision-making, resource allocation, and performance tracking.</li>
                    <li>Integrated Systems: Connect different business functions and departments, ensuring data consistency, collaboration, and seamless workflows.</li>
                    <li>Scalability: Adapt and scale your ERP system as your business grows, accommodating new processes, users, and functionalities.</li>
                </ul>
                <p style={{ backgroundColor: "#32a372", color: "#fff", padding: "20px", borderRadius: "5px", textAlign: "left", marginTop: "50px" }}>
                    Savannah Inc, specializes in ERP implementation, customization, and optimization tailored to your business goals. Let us help you harness the power of ERP to drive operational excellence and business growth.
                </p>
            </>
        ),
    };

    return (
        <div className="App">
            <Navbar />
            <AboutUs1 mainHeading="Enterprise Resource Planning" subHeading="Home » Services" />
            <SubService title={erpService.title} image={erpService.image} description={erpService.description} />
            <Footer />
        </div>
    );
};

export default ERP;
