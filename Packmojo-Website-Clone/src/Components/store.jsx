import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import styles from './store.module.css';
import macbook from "../Dataset/macbook2019.jpg"
import gaming from "../Dataset/RTX.webp"
import dell from "../Dataset/Dell-XPS-15-7590-Laptop.webp"
import monitor from "../Dataset/HP-34F-Monitor.jpg"
import mouse from "../Dataset/mouse4.webp"
import ssd from "../Dataset/harddrive.jpg"
import lenovo from "../Dataset/lenovox1carbon.jpg"
import keyboard from "../Dataset/mechanical keyboard.jpeg"



const products = [
  {
    id: 1,
    image: macbook,
    title: "MacBook Pro 16-inch 2019",
    description: "M2 Max chip, 32GB RAM, 1TB SSD",
    price: 135000,
    specs: {
      processor: "Intel Core i9",
      memory: "32GB DDR4",
      storage: "1TB SSD",
      display: "16-inch Retina Display",
      resolution: "3072 x 1920",
      graphics: "AMD Radeon Pro 5500M",
      battery: "100Wh lithium-polymer",
      ports: ["4 Thunderbolt 3", "3.5mm Headphone Jack"],
      weight: "2.0 kg",
      os: "macOS",
      warranty: "1 Year Limited Warranty"
    }
  },
  {
    id: 2,
    image: gaming,
    title: "Gaming PC RTX 4060",
    description: " Custom build PC Ryzen 5 5500 16/32GB DDR4 1TB SSD Intel i9, NVMe ",
    price: 118000,
    specs: {
      processor: "AMD Ryzeen",
      memory: "16/32GB DDR4",
      storage: "1TB SSD",
      display: "27-inch 4K",
      resolution: "3840 x 2160",
      graphics: "NVIDIA RTX 4060",
      battery: "100Wh lithium-polymer", 
      ports: ["4 Thunderbolt 3", "3.5mm Headphone Jack"],
      weight: "2.0 kg",
      os: "Windows 10",
      warranty: "1 Year Limited Warranty"
    }


  },
  {
    id: 3,
    image: dell,
    title: "Dell XPS 15",
    description: "Intel i7, 16GB RAM, 512GB SSD",
    price: 75000,
    specs: {
      processor: "Intel Core i7",
      memory: "16GB DDR4",
      storage: "512GB SSD",
      display: "15.6-inch 4K",
      resolution: "3840 x 2160",
      graphics: "NVIDIA GTX 1650",
      battery: "56Wh lithium-ion",
      ports: ["2 Thunderbolt 3", "1 USB-C", "3.5mm Headphone Jack"],
      weight: "1.8 kg",
      os: "Windows 10",
      warranty: "1 Year Limited Warranty"
    }
  },
  {
    id: 4,
    image: lenovo,
    title: "Lenovox Thinkpad X1 Carbon",
    description: "AMD Ryzen 9, 32GB RAM, 1TB SSD",
    price: 60000,
    specs: {
      processor: "AMD Ryzen",
      memory: "32GB DDR4",
      storage: "1TB SSD",
      display: "14-inch 4K",
      resolution: "3840 x 2160",
      graphics: "NVIDIA GTX 1650",
      battery: "56Wh lithium-ion",
      ports: ["2 Thunderbolt 3", "1 USB-C", "3.5mm Headphone Jack"],
      weight: "1.8 kg",
      os: "Windows 10",
      warranty: "1 Year Limited Warranty"
    }

  },
  {
    id: 5,
    image: keyboard,
    title: "Mechanical Keyboard",
    description: "Cherry MX switches, RGB backlight",
    price: 3000,
    specs: {
      switch: "Cherry MX",
      layout: "Full-size",
      backlight: "RGB",
      connectivity: "Wired",
      weight: "1.2 kg",
      warranty: "1 Year Limited Warranty"
  }

},


  {
    id: 6,
    image: monitor,
    title: " HP m34d curved monitor",
    description: "27-inch, 144Hz, HDR support",
    price: 45000,
    specs: {
      display: "27-inch 4K",
      resolution: "3840 x 2160",
      refreshRate: "144Hz",
      panelType: "IPS",
      responseTime: "1ms",
      brightness: "400 nits",
      contrastRatio: "1000:1",
      warranty: "1 Year Limited Warranty"
    }
  },
  {
    id: 7,
    image: mouse,
    title: "Wireless Mouse",
    description: "20K DPI, wireless, RGB lighting",
    price: 1200,
    specs:{

      sensor: "Optical",
      dpi: "20,000",
      buttons: "6",
      connectivity: "Wireless",
      battery: "Rechargeable",
      weight: "100g",
      warranty: "1 Year Limited Warranty"
    }
  },
  {
    id: 8,
    image: ssd,
    title: "External Hardrive",
    description: "2TB, USB-C, 1050MB/s",
    price: 12000,
    specs: {
      capacity: "2TB",
      interface: "USB-C",
      readSpeed: "1050MB/s",
      writeSpeed: "1000MB/s",
      warranty: "1 Year Limited Warranty"
    }
  }
];

const HardwareStore = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const sliderRef = useRef(null);
  const isMobile = window.innerWidth <= 640;

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= products.length ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? products.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let interval;
    if (isMobile) {
      interval = setInterval(() => {
        next();
      }, 4000); // Change slide every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentIndex * sliderRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, isMobile]);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
  };

  const visibleProducts = isMobile ? products : products.slice(currentIndex, currentIndex + 3);

  return (
    <div className={styles.storeContainer}>
      <h2 className={styles.caseStudiesHeading}>Featured Hardware</h2>

      <section className={styles.sliderSection}>
        <div className={styles.sliderWrapper}>
          <div 
            className={`${styles.productsContainer} ${isMobile ? styles.mobileProductsContainer : ''}`}
            ref={sliderRef}
          >
            {visibleProducts.map((product) => (
              <article key={product.id} className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.productImage}
                  />
                </div>
                <div className={styles.productInfo}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <div className={styles.productActions}>
                    <span className={styles.price}>
                      KES {product.price.toLocaleString()}
                    </span>
                    <button 
                      onClick={() => handleOpenModal(product)}
                      className={styles.detailsButton}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {!isMobile && (
            <>
              <button 
                onClick={prev} 
                className={`${styles.navButton} ${styles.prevButton}`}
              >
                <ChevronLeft />
              </button>
              <button 
                onClick={next} 
                className={`${styles.navButton} ${styles.nextButton}`}
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              <X />
            </button>

            <div className={styles.modalGrid}>
              <div className={styles.modalImageSection}>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className={styles.modalImage}
                />
              </div>

              <div className={styles.modalDetails}>
                <h2>{selectedProduct.title}</h2>
                <p className={styles.modalDescription}>
                  {selectedProduct.description}
                </p>
                <div className={styles.modalPrice}>
                  KES {selectedProduct.price.toLocaleString()}
                </div>

                <div className={styles.specifications}>
                  <h3>Specifications</h3>
                  {selectedProduct.specs && Object.entries(selectedProduct.specs).map(([key, value]) => (
                    <div key={key} className={styles.specRow}>
                      <span className={styles.specLabel}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>
                      {Array.isArray(value) ? (
                        <ul className={styles.specList}>
                          {value.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <span className={styles.specValue}>{value}</span>
                      )}
                    </div>
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

export default HardwareStore;
