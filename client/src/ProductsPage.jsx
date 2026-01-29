import React, { useEffect, useState, useRef } from "react";
import "./ProductsPage.css";
import ProductsNavbar from "./ProductsNavbar";
import { motion, useInView } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Acronis Cyber Protect",
    desc: "Advanced AI-driven backup, disaster recovery, and cyber protection solution with real-time threat detection.",
    category: "Acronis Cyber Protect",
    features: [
      "AI-Powered Threat Detection",
      "Automated Disaster Recovery",
      "Endpoint Protection",
      "Compliance Management"
    ],
    price: "$49/month",
    rating: 4.8,
    reviews: 1240
  },
  {
    id: 2,
    name: "Tally on Cloud",
    desc: "Secure cloud-based accounting solution with real-time collaboration and automated financial reporting.",
    category: "Tally on Cloud",
    features: [
      "Real-time Collaboration",
      "Automated Financial Reports",
      "Multi-company Management",
      "Bank Reconciliation"
    ],
    price: "$39/month",
    rating: 4.6,
    reviews: 890
  },
  {
    id: 3,
    name: "Microsoft 365 Business",
    desc: "Complete productivity suite with AI-powered tools, enterprise security, and seamless collaboration.",
    category: "Microsoft 365 Business",
    features: [
      "AI-Powered Office Apps",
      "Enterprise Security",
      "1TB Cloud Storage",
      "24/7 Support"
    ],
    price: "$22.99/user/month",
    rating: 4.9,
    reviews: 5600
  },
];

// Only show categories that exist in products
const categories = ["All", "Acronis Cyber Protect", "Tally on Cloud", "Microsoft 365 Business"];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState("");
  
  const heroRef = useRef(null);
  const productsRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const productsInView = useInView(productsRef, { once: true });

  useEffect(() => {
    let filtered = products;
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <ProductsNavbar />

      <div className="products-page">
        {/* Hero Section */}
        <motion.section 
          className="products-hero"
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-background">
            <div className="gradient-overlay"></div>
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>

          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h1 className="hero-title">
                Enterprise <span className="highlight">Software Solutions</span>
              </h1>
              <p className="hero-subtitle">
                Curated collection of premium business software trusted by 12,000+ companies worldwide
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div 
              className="search-container"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="search-box">
                <i className="fas fa-search search-icon"></i>
                <input
                  type="text"
                  placeholder="Search products, categories, or features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                <button className="search-btn">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="stat">
                <div className="stat-number">{products.length}+</div>
                <div className="stat-label">Premium Products</div>
              </div>
              <div className="stat">
                <div className="stat-number">4.8<span>/5</span></div>
                <div className="stat-label">Average Rating</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
              <div className="stat">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Categories Filter */}
        <section className="filters-section">
          <div className="container">
            {/* Categories */}
            <div className="categories-filter">
              <div className="filter-header">
                <i className="fas fa-filter"></i>
                <h3>Categories</h3>
              </div>
              <div className="category-tabs">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                    {selectedCategory === category && <div className="active-indicator"></div>}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="products-grid-section" ref={productsRef}>
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              animate={productsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2>
                {selectedCategory === 'All' ? 'All Products' : selectedCategory + ' Solutions'}
                <span className="product-count"> ({filteredProducts.length})</span>
              </h2>
              <p>Carefully curated enterprise software for every business need</p>
            </motion.div>

            <motion.div 
              className="products-grid"
              initial="hidden"
              animate={productsInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  className="product-card"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(225, 6, 0, 0.25)"
                  }}
                >
                  {/* Product Badge */}
                  <div className="product-badge">
                    <span className="badge-category">{product.category}</span>
                    <div className="badge-rating">
                      <i className="fas fa-star"></i>
                      <span>{product.rating}</span>
                      <span className="reviews">({product.reviews.toLocaleString()} reviews)</span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="product-info">
                    <div className="product-header">
                      <h3>{product.name}</h3>
                      <div className="product-price">
                        <span className="price">{product.price}</span>
                        <span className="price-period">per month</span>
                      </div>
                    </div>
                    
                    <p className="product-description">{product.desc}</p>
                    
                    {/* Features */}
                    <div className="product-features">
                      <h4>Key Features:</h4>
                      <div className="features-list">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="feature">
                            <i className="fas fa-check-circle"></i>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="product-cta">
                      <button className="btn-secondary">
                        <i className="fas fa-info-circle"></i>
                        View Details
                      </button>
                      <button className="btn-primary">
                        <i className="fas fa-cart-plus"></i>
                        Get Started
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <motion.div 
                className="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <i className="fas fa-search-empty"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
                <button 
                  className="btn-secondary"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                >
                  <i className="fas fa-redo"></i>
                  Reset Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="products-cta">
          <div className="cta-background">
            <div className="cta-glow"></div>
          </div>
          
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Need Custom Enterprise Solutions?</h2>
            <p>Our experts can tailor software solutions specifically for your business requirements</p>
            
            <div className="cta-actions">
              <button className="cta-btn-primary">
                <i className="fas fa-headset"></i>
                <span>Contact Sales</span>
              </button>
              <button className="cta-btn-secondary">
                <i className="fas fa-file-alt"></i>
                <span>Request Custom Quote</span>
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default ProductsPage;