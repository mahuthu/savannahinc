import React from "react";

const FrequentlyAskedQuestions = () => {
  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <h1>Frequently Asked Questions</h1>
            </div>
            <div className="col-lg-6 col-12 mt-2">
              <Question
                question="How long does it take to build a website?"
                answer="The time to build a website can vary significantly based on the complexity of the project. Typically, a basic website can be completed in a few weeks, while more complex websites with custom features may take several months."
              />
              <Question
                question="What information do you need from me to start?"
                answer="To get started, we'll need information about your business, your target audience, your goals for the website, examples of websites you like, content such as text and images, and any specific features or functionality you require."
              />
              <Question
                question="Can you help with content creation and copywriting?"
                answer="Yes, we offer content creation and copywriting services to ensure your website has high-quality, engaging content that resonates with your audience and aligns with your brand."
              />
            </div>

            <div className="col-lg-6 col-12 mt-2">
              <Question
                question="Do you provide website maintenance services?"
                answer="Yes, we offer website maintenance services to keep your website secure, updated, and running smoothly. Our maintenance plans include regular backups, security checks, software updates, and technical support."
              />
              <Question
                question="Can I update the website content myself?"
                answer="Yes, we can set up a content management system (CMS) like WordPress or provide you with a user-friendly interface to update content, images, and other elements of your website easily."
              />
              <Question
                question="Do you offer website hosting?"
                answer="Yes, we provide website hosting services on reliable servers with guaranteed uptime, security features, and support. Our hosting plans are tailored to meet your website's requirements."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Question = ({ question, answer }) => (
  <>
    <h5>{question}</h5>
    <p className="ms-4">{answer}</p>
  </>
);

export default FrequentlyAskedQuestions;
