import React from "react";
import Button from "./UI/Button";
const CustomBoxes = () => {
  return (
    <section>
      <div className="container py-5">
        <div className="row  py-lg-5 py-3">
          <div className="col-lg-6 col-12">
            <div className="card border-0 p-3">
            <img src={require("../Dataset/CusromBoxes.jpg")} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            
            <div>
              <h1>Business Solutions Services:</h1>
              <br/>
              <h2>WhatsApp Business Integration:</h2>
              <p>
              Assist businesses in setting up and integrating WhatsApp Business accounts. Provide guidance on using WhatsApp for customer support, order tracking, sending promotions, and managing inquiries.
              </p>
              </div>
              <div>
                <h2>Training and Consultation:</h2>
                <p>
                Provide training sessions, workshops, and consulting services to educate small businesses on digital marketing best practices, online selling techniques, customer engagement strategies, and adoption of AI tools to boost their productivity
                </p>
              </div>
              <div>
                <h2>Custom Solutions and Integrations:</h2>
                <p>
                Develop custom solutions and integrations based on specific business requirements. This could include CRM systems, inventory management systems, payment gateways, chatbots, and other tools to streamline operations and enhance customer experiences.
                </p>
              </div>
            
              <Button>View Products</Button>
            {/* <button className={"btn btn-success " + classes.button}>view Products</button> */}
            </div>
            
          </div>
          
        </div>
      
    </section>
  );
};

export default CustomBoxes;
