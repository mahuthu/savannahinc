
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import "../../Components/Styles.module.css";
import SubService from "../../Components/SubService";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import React from "react";
import erpImage from "../../Dataset/data.jpg"


const ERP = () => {

    const crmService = {
        title: "Data collection and Annotation",
        image: erpImage,
        description: (
            <>
                <div className="icons-container d-flex justify-content-around flex-wrap bg-light" style={{ color:"#32325c" }}>
                    <div className="icon text-center">
                        <i className="fas fa-database fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Data Collection</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-pen fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Data Annotation</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-search fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Data Labeling</p>
                    </div>
                    <div className="icon text-center">
                        <i className="fas fa-chart-line fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                        <p>Data Quality Assurance</p>
                    </div>
                </div>
                <p style={{ marginTop: "30px", marginBottom: "20px" }}>
                    Leverage our data collection and annotation solutions for accurate data labeling, annotation, and quality assurance. We provide comprehensive services to ensure your data is ready for AI and machine learning applications.
                </p>
                <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px", marginTop: "30px" }}>
                    Data Collection and Annotation solutions include:
                </p>
                <ul style={{ textAlign: "left", marginBottom: "30px" }}>
                    <li>Data Collection: Gather structured and unstructured data from diverse sources for analysis and modeling.</li>
                    <li>Data Annotation: Annotate data with accurate labels, tags, and metadata to train machine learning algorithms.</li>
                    <li>Data Labeling: Label data points for classification, object detection, sentiment analysis, and other AI tasks.</li>
                    <li>Data Quality Assurance: Ensure data quality through validation, cleaning, and normalization processes for reliable insights.</li>
                </ul>
                <p style={{ backgroundColor: "#32a372", color: "#fff", padding: "20px", borderRadius: "5px", textAlign: "left", marginTop: "50px" }}>
                    Savannah Inc offers end-to-end Data Collection and Annotation Solutions to support your AI and machine learning initiatives. Let us help you unlock the full potential of your data.
                </p>
            </>
        ),

      };
    return (
        <div className="App">
    
            <Navbar />
            <AboutUs1 mainHeading="Data collection and Annotation" subHeading="Home &raquo; Services" />

            <SubService title={crmService.title} image={crmService.image} description={crmService.description} />

            <Footer />
        
        </div>
    );
    }

export default ERP;
