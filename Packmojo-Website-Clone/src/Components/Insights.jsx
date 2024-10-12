import React, { useState } from 'react';
import { X } from 'lucide-react';
import styles from './Insights.module.css';

// Import your images here
import automationImage from "../Dataset/future.png";
import hrmsImage from '../Dataset/future2.png';
import accountingImage from '../Dataset/future3.png';
import backgroundImage from '../Dataset/bac3.jpg'; // Import your background image


const insightsData = [
  {
    image: automationImage,
    category: 'AUTOMATION',
    title: 'How automation and machine learning is changing the business dynamics',
    content: [
      "In recent years, automation and machine learning have transformed how businesses operate, ushering in a new era of data-driven decision-making and operational efficiency. Machine learning, a subset of artificial intelligence (AI), enables systems to learn and improve from experience without being explicitly programmed.",
      "In the business landscape, companies are increasingly leveraging machine learning for predictive analytics, customer personalization, and process optimization. For example, in agriculture, machine learning models are helping farmers predict crop yields, optimize irrigation, and identify plant diseases early. In finance, banks and fintech companies use machine learning algorithms to assess credit risk, detect fraud, and offer personalized banking solutions.",
      "One of the key benefits of machine learning is its ability to process large volumes of data, identify patterns, and make accurate predictions. This can lead to better decision-making, improved customer experiences, and significant cost savings. Automation, on the other hand, helps streamline repetitive tasks, reducing human error and allowing employees to focus on higher-value activities.",
      "As more businesses embrace automation and machine learning, we can expect to see further advancements in customer service, product development, and business efficiency. These technologies are not only changing the way companies operate but are also creating new business models and opportunities."
    ]
  },
  {
    image: hrmsImage,
    category: 'CRM',
    title: 'Empowering Employees: Unveiling the Transformative Potential of CRM Software',
    content: [
      "Customer Relationship Management (CRM) software has become an indispensable tool for businesses looking to manage interactions with current and potential customers effectively. While CRM is often associated with sales and marketing, its impact extends far beyond these departments, playing a crucial role in empowering employees across the organization.",
      "Here are some ways CRM software empowers employees:",
      "1. Centralized Information: CRM systems provide a single source of truth for customer data, allowing employees to access up-to-date information quickly and easily. This eliminates the need to search through multiple systems or rely on outdated spreadsheets.",
      "2. Improved Collaboration: With a shared platform, employees from different departments can collaborate more effectively. For example, sales teams can easily share leads with marketing, while customer service can access a customer's purchase history to provide better support.",
      "3. Automation of Routine Tasks: CRM software can automate many routine tasks such as data entry, follow-up emails, and report generation. This frees up employees to focus on more strategic, value-adding activities.",
      "4. Data-Driven Insights: Modern CRM systems offer powerful analytics tools that can help employees make data-driven decisions. From identifying sales trends to predicting customer behavior, these insights can empower employees to work more effectively.",
      "5. Mobile Access: Many CRM solutions offer mobile apps, allowing employees to access customer information and perform tasks on the go. This flexibility can significantly enhance productivity, especially for field sales and service teams.",
      "By leveraging the full potential of CRM software, businesses can not only improve customer relationships but also create a more empowered, efficient, and satisfied workforce."
    ]
  },
  {
    image: accountingImage,
    category: 'ACCOUNTING',
    title: 'How can an ERP Software Help You Enhance Financial Performance?',
    content: [
      "Enterprise Resource Planning (ERP) software has become a cornerstone for businesses looking to streamline their operations and improve overall performance. When it comes to financial management, ERP systems offer a range of features that can significantly enhance a company's financial performance.",
      "Here are key ways an ERP software can help boost your financial performance:",
      "1. Real-time Financial Reporting: ERP systems provide up-to-the-minute financial data, allowing for more accurate and timely decision-making. This real-time visibility into financial metrics helps managers respond quickly to changes in the business environment.",
      "2. Improved Cash Flow Management: With integrated modules for accounts receivable and payable, ERP software can help optimize cash flow by automating billing processes, tracking payment schedules, and providing insights into cash position.",
      "3. Cost Reduction: By automating many financial processes, ERP systems can significantly reduce the time and resources needed for tasks like data entry, report generation, and reconciliation. This leads to lower operational costs and improved efficiency.",
      "4. Enhanced Financial Controls: ERP systems often come with built-in controls and audit trails, helping to prevent fraud and ensure compliance with financial regulations. This can lead to more accurate financial statements and reduced risk of financial mismanagement.",
      "5. Better Financial Planning and Forecasting: With access to historical data and advanced analytics tools, ERP systems can help finance teams create more accurate budgets and financial forecasts. This can lead to better resource allocation and strategic planning.",
      "6. Integrated Financial Management: ERP systems integrate financial data with other business processes, providing a holistic view of the organization's financial health. This integration can lead to more informed decision-making across all departments.",
      "By leveraging these capabilities, businesses can use ERP software to not only streamline their financial processes but also to gain valuable insights that drive improved financial performance and strategic growth."
    ]
  }
];

const Insights = () => {
  const [selectedInsight, setSelectedInsight] = useState(null);

  const handleOpenModal = (insight) => {
    setSelectedInsight(insight);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedInsight(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className={styles.insightsSection}
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.sectionHeading}>
        <h2>Blogs</h2>
      </div>
      <div className={styles.insightsContainer}>
        {insightsData.map((insight, index) => (
          <div key={index} className={styles.insightCard}>
            <img src={insight.image} alt={insight.category} className={styles.insightImage} />
            <div className={styles.insightContent}>
              <p className={styles.category}>{insight.category}</p>
              <h3 className={styles.title}>{insight.title}</h3>
              <button onClick={() => handleOpenModal(insight)} className={styles.readMore}>Read More ↗</button>
            </div>
          </div>
        ))}
      </div>

      {/* Insight Details Modal */}
      {selectedInsight && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              <X />
            </button>

            <div className={styles.modalGrid}>
              <div className={styles.modalImageSection}>
                <img
                  src={selectedInsight.image}
                  alt={selectedInsight.title}
                  className={styles.modalImage}
                />
              </div>

              <div className={styles.modalDetails}>
                <span className={styles.modalTag}>{selectedInsight.category}</span>
                <h2>{selectedInsight.title}</h2>
                <div className={styles.modalDescription}>
                  {selectedInsight.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Insights;
