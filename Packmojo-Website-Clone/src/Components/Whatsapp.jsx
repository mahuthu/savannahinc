import React from "react";

const processSteps = [
  {
    logo: <i className="fa-brands fa-square-whatsapp"></i>,
    id: "1",
    title: "Social Media Management & WhatsApp Business Integration",
    description: (
      <>
        <p>
          Our social media management services encompass a wide range of strategies and activities aimed at enhancing your brand's presence and engagement across social platforms. We tailor our approach to meet your specific goals and target audience, ensuring a cohesive and effective online presence. Here's how we can help:
        </p>
        <ul>
          <li>Social Media Strategy: Develop a customized social media strategy aligned with your business objectives, including content planning, audience targeting, and campaign execution.</li>
          <li>Content Creation: Create engaging and relevant content, including posts, images, videos, and stories, optimized for different social media platforms.</li>
          <li>Community Management: Monitor and engage with your audience, respond to comments and messages promptly, and build meaningful relationships with followers.</li>
          <li>Analytics & Reporting: Track key metrics, analyze performance, and provide regular reports with actionable insights to optimize your social media efforts.</li>
        </ul>
        <p>
          In addition to social media management, we also specialize in integrating WhatsApp Business into your marketing strategy. WhatsApp Business offers a direct and personal communication channel with customers, enabling:
        </p>
        <ul>
          <li>Customer Support: Provide real-time support to customers, answer inquiries, and resolve issues efficiently through WhatsApp Business.</li>
          <li>Order Updates: Send order confirmations, shipment tracking details, and delivery notifications directly to customers' WhatsApp accounts.</li>
          <li>Marketing Campaigns: Run targeted marketing campaigns, share product catalogs, promotions, and offers with interested customers on WhatsApp.</li>
          <li>Automated Messaging: Implement chatbots and automated messages to handle common queries, appointment scheduling, and more, improving customer experience and efficiency.</li>
        </ul>
        <p>
          By combining social media management with WhatsApp Business integration, we help you build strong customer relationships, drive sales, and enhance brand loyalty in today's digital landscape.
        </p>
      </>
    )
  }
];

const Process1 = () => {
  const processDisplay = processSteps.map((step, index) => (
    <div
      className={`col-lg-12 ${index % 2 === 0 ? "bg-light" : "bg-light"}`} // Change col-lg-4 to col-lg-12 for full width
      key={step.id}
      style={{ order: index % 2 === 0 ? 1 : -1, marginBottom: "10px" }} // Added marginBottom for gap reduction
    >
      <h1>{step.logo}</h1>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </div>
  ));

  return (
    <section>
      
      <hr style={{ margin: "20px auto", maxWidth: "80%" }} /> {/* Added underline */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row text-center">
            {processDisplay}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Process1;