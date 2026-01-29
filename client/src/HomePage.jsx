import React, { useEffect, useState, useRef, useCallback } from 'react';
import './HomePage.css';
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';

const HomePage = () => {
  const navigate = useNavigate();
  const industriesRef = useRef(null);
  const heroRef = useRef(null);
  const heroControls = useAnimation();
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const industriesInView = useInView(industriesRef, { once: true, amount: 0.2 });

  const scrollToIndustries = () => {
    industriesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated counters
  const [counters, setCounters] = useState({
    retailers: 0,
    uptime: 0,
    response: 0,
    transactions: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const targetCounters = {
            retailers: 12000,
            uptime: 99.9,
            response: 2.1,
            transactions: 50
          };

          Object.keys(targetCounters).forEach(key => {
            let current = 0;
            const increment = targetCounters[key] / 60;
            const timer = setInterval(() => {
              current += increment;
              if (current >= targetCounters[key]) {
                current = targetCounters[key];
                clearInterval(timer);
              }
              setCounters(prev => ({
                ...prev,
                [key]: key === 'response' ? current.toFixed(1) : Math.floor(current)
              }));
            }, 2000 / 60);
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector('.stats-section'));
    return () => observer.disconnect();
  }, []);

  // Industries data with red gradients
  const industries = [
    {
     
      title: "BFSI",
      desc: "Secure banking platforms, fraud detection, and AI-driven credit scoring",
      gradient: "linear-gradient(135deg, #e10600 0%, #ff4b2b 100%)",
      features: ["Real-time Fraud Detection", "AI Credit Scoring", "Secure Transactions"]
    },
    {
   
      title: "Healthcare",
      desc: "Telemedicine platforms, patient management, and diagnostic AI solutions",
      gradient: "linear-gradient(135deg, #ff4b2b 0%, #ff6b6b 100%)",
      features: ["Back-office automation, patient records, telemedicine integration, billing & diagnostics."]
    },
    {
    
      title: "Education Management",
      desc: "Smart learning platforms, automated assessment, and virtual classrooms",
      gradient: "linear-gradient(135deg, #e10600 0%, #ff6b6b 100%)",
      features: ["Digital learning platforms, smart ID kiosks, and automation in exams & operations."]
    },
    {
     
      title: "Telecom Services",
      desc: "Network optimization, customer service automation, and 5G solutions",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #ff8a8a 100%)",
      features: ["Customer support automation, onboarding verification, fraud detection, and compliance."]
    }
    ,
    {
     
      title: "Retail & E-Commerce",
      desc: "Network optimization, customer service automation, and 5G solutions",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #ff8a8a 100%)",
      features: ["Smart kiosks, checkout automation, inventory intelligence, and customer engagement tools."]
    }
    ,
    {
     
      title: "Government & PSU",
      desc: "Network optimization, customer service automation, and 5G solutions",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #ff8a8a 100%)",
      features: ["Digital automation for public services and citizen engagement."]
    }
    ,
    {
     
      title: "Media & Entertainment",
      desc: "Network optimization, customer service automation, and 5G solutions",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #ff8a8a 100%)",
      features: ["OTT platforms, digital streaming support, audience analytics, and content delivery automation."]
    }
    ,
    {
     
      title: "Logistics Services",
      desc: "Network optimization, customer service automation, and 5G solutions",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #ff8a8a 100%)",
      features: ["Fleet management, smart kiosks, tracking platforms, AI-driven delivery automation."]
    }
     ,
    {
     
      title: "Travel & Hospitality",
      desc: "Network optimization, customer service automation, and 5G solutions",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #ff8a8a 100%)",
      features: ["Self-service kiosks, check-in automation, smart feedback systems, and booking engines."]
    }
  ];

  const features = [
    {
      icon: "fas fa-chart-line",
      title: "Real-time Analytics",
      desc: "Live business intelligence with predictive insights",
      stat: "98% Accuracy"
    },
    {
      icon: "fas fa-robot",
      title: "AI Automation",
      desc: "Intelligent process automation with machine learning",
      stat: "70% Cost Reduction"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Enterprise Security",
      desc: "Military-grade encryption and compliance",
      stat: "100% Secure"
    },
    {
      icon: "fas fa-server",
      title: "Scalable Cloud",
      desc: "Elastic infrastructure that grows with you",
      stat: "99.99% Uptime"
    }
  ];

  const clients = [
    "TechCorp", "GlobalBank", "HealthFirst", "EduSmart", "TeleGlobal", "RetailHub"
  ];

  return (
    <>
      {/* Scroll Progress */}
      <div className="scroll-progress">
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      <Navbar onIndustryClick={scrollToIndustries} />
      
      <div className="home-page">
        {/* Hero Section - Full Screen */}
        <section className="hero-section" ref={heroRef}>
          {/* Animated Background */}
          <div className="hero-background">
            <div className="gradient-overlay"></div>
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
              <div className="shape shape-4"></div>
            </div>
          </div>

          <div className="hero-container">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Pre-title */}
              <motion.div 
                className="pretitle"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="badge">ENTERPRISE GRADE</span>
                <span className="divider">|</span>
                <span>TRUSTED BY FORTUNE 500</span>
              </motion.div>

              {/* Main Title */}
              <h1 className="hero-title">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="title-line"
                >
              The Digital Solution for 
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="title-line highlight"
                >
                growing companies
                </motion.span>
              </h1>

              {/* Subtitle */}
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
           The Right Digital Solution. In 10 Seconds.
                <br />
                Get started in minutes, scale without limits.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="hero-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button 
                  className="btn-primary"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <i className="fas fa-rocket btn-icon"></i>
                  <span>Explore Marketplace </span>
                  <div className="btn-hover-effect"></div>
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => navigate("/products")}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <i className="fas fa-eye btn-icon"></i>
                  <span>View Solutions</span>
                </button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="trust-indicators"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="trust-item">
                  <i className="fas fa-award trust-icon"></i>
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="trust-item">
                  <i className="fas fa-shield-alt trust-icon"></i>
                  <span>GDPR Compliant</span>
                </div>
                <div className="trust-item">
                  <i className="fas fa-bolt trust-icon"></i>
                  <span>99.9% Uptime SLA</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="stats-section"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">
                    {counters.retailers.toLocaleString()}+
                  </div>
                  <div className="stat-label">Active Retailers</div>
                  <div className="stat-trend">
                    <span className="trend-up">↑ 24% this month</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">
                    {counters.uptime}%
                  </div>
                  <div className="stat-label">Platform Uptime</div>
                  <div className="stat-trend">
                    <span className="trend-up">↑ 99.99% reliability</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">
                    {counters.response}s
                  </div>
                  <div className="stat-label">Avg. Response Time</div>
                  <div className="stat-trend">
                    <span className="trend-up">↑ 40% faster</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">
                    {counters.transactions}M+
                  </div>
                  <div className="stat-label">Transactions</div>
                  <div className="stat-trend">
                    <span className="trend-up">↑ $2.4B processed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <i className="fas fa-chevron-down"></i>
          </motion.div>
        </section>

        {/* Client Marquee */}
        <section className="clients-section">
          <div className="section-header">
            <h3>Trusted by Industry Leaders</h3>
          </div>
          <div className="marquee-container">
            <div className="marquee-track">
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="client-logo">
                  <div className="logo-placeholder">{client}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="features-section">
          <div className="section-header">
            <h2>Enterprise Capabilities</h2>
            <p>Powered by cutting-edge technology</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <div className="feature-stat">{feature.stat}</div>
                <div className="feature-hover">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="industries-section" ref={industriesRef}>
          <div className="section-header">
            <h2>Industry Solutions</h2>
            <p>Tailored solutions for every sector</p>
          </div>

          <div className="industries-container">
            {/* Industry Selector */}
            <div className="industry-selector">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  className={`industry-tab ${activeIndustry === index ? 'active' : ''}`}
                  onClick={() => setActiveIndustry(index)}
                  style={{ background: activeIndustry === index ? industry.gradient : 'transparent' }}
                >
                  <span className="tab-icon">{industry.icon}</span>
                  <span className="tab-title">{industry.title}</span>
                </button>
              ))}
            </div>

            {/* Industry Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry}
                className="industry-content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="industry-details">
                  <div 
                    className="industry-gradient"
                    style={{ background: industries[activeIndustry].gradient }}
                  />
                  <h3>{industries[activeIndustry].title}</h3>
                  <p>{industries[activeIndustry].desc}</p>
                  
                  <div className="industry-features">
                    {industries[activeIndustry].features.map((feature, idx) => (
                      <div key={idx} className="feature-tag">
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="industry-cta">
                    Explore Solutions
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
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
            <h2>Ready to Transform Your Business?</h2>
            <p>Join 12,000+ businesses accelerating growth with our platform</p>
            
            <div className="cta-actions">
              <button className="cta-btn-primary">
                <i className="fas fa-calendar-check"></i>
                <span>Book a Demo</span>
                <div className="btn-sparkle"></div>
              </button>
              <button className="cta-btn-secondary">
                <i className="fas fa-comment-dots"></i>
                <span>Talk to Sales</span>
              </button>
            </div>

            <div className="cta-stats">
              <div className="cta-stat">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Priority Support</div>
              </div>
              <div className="cta-stat">
                <div className="stat-value">30-Day</div>
                <div className="stat-label">Money Back Guarantee</div>
              </div>
              <div className="cta-stat">
                <div className="stat-value">$0</div>
                <div className="stat-label">Setup Fee</div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default HomePage;