import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import "../../Components/Styles.module.css";
import SubService from "../../Components/SubService";
import AboutUs1 from "../../Components/Aboutus/Aboutus6";
import crmImage from "../../Dataset/crm1.jpg";
import crmImage2 from "../../Dataset/zoho.png";
import crmImage3 from "../../Dataset/Salesforce.jpeg";
import crmImage4 from "../../Dataset/ODOO.jpeg";
import crmImage1 from "../../Dataset/dynamics customers.png";
import styles from "../../Components/Styles.module.css";


const Crm = () => {
    const crmService = {
        title: "CRM Solutions",
        image: crmImage,
        description:  (
          <>
              <div className="icons-container d-flex justify-content-around flex-wrap bg-light" style = {{color:"#32325c"}} >
                  <div className="icon text-center">
                      <i className="fas fa-users fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                      <p>Customer Management</p>
                  </div>
                  <div className="icon text-center">
                      <i className="fas fa-chart-pie fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                      <p>Analytics and Insights</p>
                  </div>
                  <div className="icon text-center">
                      <i className="fas fa-tasks fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                      <p>Task and Activity Management</p>
                  </div>
                  <div className="icon text-center">
                      <i className="fas fa-money-bill-wave fa-3x" style={{ color: "#41E096", transition: "color 0.3s" }}></i>
                      <p>Sales and Pipeline Management</p>
                  </div>
              </div>
              <p style={{ marginTop: "30px", marginBottom: "20px" }}>
                  Enhance customer relationships and drive sales with customized CRM solutions. CRM systems centralize customer data, provide actionable insights, and streamline sales and marketing processes for improved customer satisfaction and business growth.
              </p>
              <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px", marginTop: "30px" }}>
                   CRM solutions include:
              </p>
              <ul style={{ textAlign: "left", marginBottom: "30px" }}>
                  <li>Customer Management: Centralize customer data, track interactions, and personalize customer experiences for improved engagement.</li>
                  <li>Analytics and Insights: Gain actionable insights, analyze customer behavior, and make data-driven decisions to optimize sales and marketing strategies.</li>
                  <li>Task and Activity Management: Organize tasks, manage activities, and streamline workflows to enhance productivity and efficiency.</li>
                  <li>Sales and Pipeline Management: Track leads, manage opportunities, and optimize the sales pipeline for increased revenue and business growth.</li>
              </ul>
              <p style={{ backgroundColor: "#32325c", color: "#ffffff", padding: "10px", borderRadius: "5px", marginTop: "30px" }}>
                  Businesses benefit include:
              </p>
              <ul style={{ textAlign: "left", marginBottom: "30px" }}>
                  <li>Improved Customer Relationships: Nurture customer relationships, deliver personalized experiences, and enhance customer satisfaction.</li>
                  <li>Informed Decision-Making: Access real-time data, generate reports, and leverage analytics for informed business decisions and strategy planning.</li>
                  <li>Efficient Sales and Marketing: Streamline sales processes, automate marketing campaigns, and track performance metrics for better ROI.</li>
                  <li>Scalability and Growth: Scale your business, expand customer base, and drive business growth with scalable CRM solutions.</li>
              </ul>
              <p style={{ backgroundColor: "#32a372", color: "#fff", padding: "20px", borderRadius: "5px", textAlign: "left", marginTop: "50px" }}>
                  Savannah Inc, we specializes in designing and implementing tailored CRM solutions to help you build lasting customer relationships and drive business success.
              </p>
          </>
      ),
      };


    return (
        <div className="App">

            <Navbar />
            <AboutUs1 mainHeading="Customer Relationship Management" subHeading="Home » Services" />
            <SubService title={crmService.title} image={crmService.image} description={crmService.description} />
            <div className={styles["crm-partners"]}>
                <h3>Our CRM Partners</h3>
                <div className={styles["partner-logos"]}>
                    <div className={styles["partner-logo"]}>
                        <img src={crmImage1} alt="Microsoft Dynamics" />
                        <p>Microsoft Dynamics</p>
                    </div>
                    <div className={styles["partner-logo"]}>
                        <img src={crmImage2} alt="Zoho CRM" />
                        <p>Zoho CRM</p>
                    </div>
                    <div className={styles["partner-logo"]}>
                        <img src={crmImage3} alt="Salesforce" />
                        <p>Salesforce</p>
                    </div>
                    <div className={styles["partner-logo"]}>
                        <img src={crmImage4} alt="Odoo" />
                        <p>Odoo</p>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    );
};

export default Crm;
