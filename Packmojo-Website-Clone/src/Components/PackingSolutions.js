import  Button from "./UI/Button";
const PackingSolutions = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row align-items-center">
            {/*   ---------------------------   */}
            <div className="col-12 text-center py-lg-5 py-3">
              <h2>Our Services</h2>
            </div>
            {/* --------------------------------- */}
            <div className="col-lg-6 col-12">
              <div>
                <h1>Digital Presence Services </h1>
                <br />
                <h2>E-commerce Website Development:</h2>
                <p>
                 Get a fully functional e-commerce websites where you can showcase and sell your products online.
                </p>
                
                
                <h2>Landing Pages:</h2>
               <p>Our well Designed and impactful landing pages capture visitor attention and drive conversions</p>
                <h2>Social Media Management:</h2>
                <p> We offer social media management services to create and maintain a strong presence on platforms like Facebook, Instagram, Twitter, LinkedIn, etc.</p>
                
              </div>
              <Button>View Services</Button>
            {/* <button className={"btn btn-success " + classes.button}>view Products</button> */}
              
            </div>
            <div className="col-lg-6 col-12">
                <div className="card border-0 p-3">
                        <img src={require("../Dataset/nairobi2.jpg")} alt="" />
                </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="container py-5">
        <div className="row  py-lg-5 py-3">
          <div className="col-lg-6 col-12">
            <div className="card border-0 p-3">
            <img src={require("../Dataset/nairobi2.jpg")} alt="" />
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
    </>
  );
};

export default PackingSolutions;
