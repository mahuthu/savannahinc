import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import styles from './blogs1.module.css';
import hrmsImage from '../Dataset/future2.png';
import accountingImage from '../Dataset/future3.png';
import backgroundImage from '../Dataset/future.png';

const NewsGrid = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      image: backgroundImage,
      tag: "AUTOMATION",
      title: "How automation and machine learning are changing the business dynamics in Kenya.",
      content: [
        "In recent years, automation and machine learning have transformed how businesses in Kenya operate, ushering in a new era of data-driven decision-making and operational efficiency. Machine learning, a subset of artificial intelligence (AI), enables systems to learn and improve from experience without being explicitly programmed.",
        "In the Kenyan business landscape, companies are increasingly leveraging machine learning for predictive analytics, customer personalization, and process optimization. For example, in agriculture, machine learning models are helping farmers predict crop yields, optimize irrigation, and identify plant diseases early. In finance, banks and fintech companies use machine learning algorithms to assess credit risk, detect fraud, and offer personalized banking solutions.",
        "One of the key benefits of machine learning is its ability to process large volumes of data, identify patterns, and make accurate predictions. This can lead to better decision-making, improved customer experiences, and significant cost savings. Automation, on the other hand, helps streamline repetitive tasks, reducing human error and allowing employees to focus on higher-value activities.",
        "As more Kenyan businesses embrace automation and machine learning, we can expect to see further advancements in customer service, product development, and business efficiency. These technologies are not only changing the way companies operate but are also creating new business models and opportunities."
      ]
    },
    {
      id: 2,
      image: hrmsImage,
      tag: "ERP",
      title: "Top 5 Ways a Robust ERP Software Can Deliver a World-Class Employee Experience.",
      content: [
        "Enterprise Resource Planning (ERP) systems are designed to integrate all facets of an enterprise, streamlining processes and ensuring a seamless flow of information across departments. While ERP systems are often associated with managing business processes such as supply chain, inventory, and finance, they can also play a pivotal role in enhancing employee experiences.",
        "Here are five ways a robust ERP software can deliver a world-class employee experience:",
        "1. Simplified Workflows: With an ERP system, employees no longer need to juggle multiple software tools. Everything from attendance tracking to payroll management is consolidated into one system, making work more straightforward and less prone to errors.",
        "2. Improved Communication: ERP systems improve internal communication by providing a centralized platform where employees can access real-time information. This enhances collaboration across departments and reduces miscommunication.",
        "3. Enhanced Training and Development: Modern ERP solutions come with integrated tools for managing employee training and development programs. Managers can easily track progress, identify skill gaps, and provide employees with relevant training materials to help them grow.",
        "4. Automated HR Processes: ERP systems automate routine HR tasks such as leave requests, payroll, and performance appraisals, allowing employees to spend less time on administrative work and more on tasks that add value to the organization.",
        "5. Real-Time Feedback: ERP platforms often include feedback mechanisms where employees can submit their opinions or concerns. This helps in fostering a transparent work environment and ensures that management can quickly address employee needs.",
        "By implementing a robust ERP system, businesses can improve not only their operational efficiency but also create a better, more cohesive work environment where employees can thrive."
      ]
    },
    {
      id: 3,
      image: accountingImage,
      tag: "CRM",
      title: "A Checklist for Choosing the Right CRM Software for your Business in Kenya.",
      content: [
        "Customer Relationship Management (CRM) software is essential for businesses looking to manage interactions with current and potential customers effectively. With the right CRM in place, Kenyan businesses can streamline customer engagement, automate marketing efforts, and improve sales processes. However, choosing the right CRM software can be overwhelming due to the plethora of options available.",
        "Here is a checklist to guide you in selecting the best CRM software for your business:",
        "1. Understand Your Business Needs: Before selecting a CRM, identify what you need the software to do. Are you looking to improve customer service, track leads, automate marketing campaigns, or manage sales pipelines? Defining your needs will help you choose a CRM that aligns with your business goals.",
        "2. User-Friendliness: The CRM should be easy to use, with an intuitive interface that employees can quickly adopt. Complicated systems with steep learning curves can hinder productivity and delay adoption.",
        "3. Customization Options: Every business is unique, and your CRM should be flexible enough to adapt to your specific needs. Look for a CRM that allows customization of workflows, reports, and dashboards to suit your business processes.",
        "4. Integration Capabilities: Ensure that the CRM integrates seamlessly with the other tools and platforms your business uses, such as email marketing tools, social media, and financial software. This will ensure a smooth flow of information between systems.",
        "5. Scalability: As your business grows, your CRM should be able to scale with it. Choose a CRM that can accommodate increased data, users, and transactions without a dip in performance.",
        "6. Support and Training: Consider the level of support and training the CRM vendor provides. You want a partner that will assist you during onboarding and provide ongoing support to ensure you're getting the most out of your investment.",
        "7. Data Security: With increasing concerns over data privacy and security, choose a CRM that offers robust data protection measures, such as encryption and secure backups.",
        "By considering these factors, you can select a CRM that not only meets your current needs but also grows with your business, helping you maintain strong customer relationships and drive success."
      ]
    }
  ];

  const handleOpenModal = (blog) => {
    setSelectedBlog(blog);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
    document.body.style.overflow = 'unset';
  };

  const handleViewAllClick = () => {
    alert('Coming Soon!');
  };

  return (
    <div className={styles.caseStudiesContainer}>
      <h2 className={styles.caseStudiesHeading}>Feature News and Innovation</h2>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.mainNews}>
            <img src={blogs[0].image} alt={blogs[0].title} className={styles.mainImage} />
            <div className={styles.mainContent}>
              <span className={styles.tag}>{blogs[0].tag}</span>
              <h2 className={styles.mainTitle}>{blogs[0].title}</h2>
              <button onClick={() => handleOpenModal(blogs[0])} className={styles.readMore}>
                Read More <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className={styles.sideNews}>
            {blogs.slice(1).map((blog) => (
              <div key={blog.id} className={styles.newsItem}>
                <img src={blog.image} alt={blog.title} className={styles.sideImage} />
                <div className={styles.sideContent}>
                  <span className={styles.tag}>{blog.tag}</span>
                  <h3 className={styles.sideTitle}>{blog.title}</h3>
                  <button onClick={() => handleOpenModal(blog)} className={styles.readMore}>
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.viewAllButton} onClick={handleViewAllClick}>
            View all News
          </button>
        </div>
      </div>

      {/* Blog Details Modal */}
      {selectedBlog && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              <X />
            </button>

            <div className={styles.modalGrid}>
              <div className={styles.modalImageSection}>
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className={styles.modalImage}
                />
              </div>

              <div className={styles.modalDetails}>
                <span className={styles.modalTag}>{selectedBlog.tag}</span>
                <h2>{selectedBlog.title}</h2>
                <div className={styles.modalDescription}>
                  {selectedBlog.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsGrid;