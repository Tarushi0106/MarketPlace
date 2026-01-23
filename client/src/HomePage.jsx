import React, { useEffect, useState } from 'react';
import './HomePage.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomePage = () => {
  const [counters, setCounters] = useState({
    retailers: 0,
    uptime: 0,
    response: 0,
    transactions: 0
  });

  useEffect(() => {
    // Animate counters
    const targetCounters = {
      retailers: 12000,
      uptime: 99.9,
      response: 2.1,
      transactions: 50
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const animateCounter = (counterKey, targetValue) => {
      let current = 0;
      const increment = targetValue / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          current = targetValue;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [counterKey]: counterKey === 'response' ? current.toFixed(1) : Math.floor(current)
        }));
      }, stepDuration);
    };

    Object.keys(targetCounters).forEach(key => {
      animateCounter(key, targetCounters[key]);
    });
  }, []);

  const services = [
    { icon: 'fas fa-mobile-alt', title: 'products', desc: 'Instant prepaid & postpaid recharge' },
    { icon: 'fas fa-satellite-dish', title: 'Cloud', desc: 'All major Cloudoperators' },
    { icon: 'fas fa-file-invoice-dollar', title: 'Bill Payments', desc: 'Electricity, gas, water & more' },
    { icon: 'fas fa-fingerprint', title: 'AEPS', desc: 'Aadhaar enabled payments' },
    { icon: 'fas fa-id-card', title: 'PAN Services', desc: 'New PAN & corrections' },
    { icon: 'fas fa-money-bill-transfer', title: 'Money Transfer', desc: 'Fast domestic remittance' },
    { icon: 'fas fa-code', title: 'APIs', desc: 'Developer-ready APIs' },
    { icon: 'fas fa-shopping-cart', title: 'E-Commerce', desc: 'Digital product marketplace' }
  ];

  return (
       <>
      <Navbar />
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Your Digital Marketplace <span className="highlight">with Shaurya</span>
          </h1>
          <p className="hero-subtitle">
            Telecom, digital services, APIs & payments — one unified platform.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Marketplace</button>
            <button className="btn-secondary">Get Started</button>
          </div>
          
          {/* Stats Section */}
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-number">{counters.retailers.toLocaleString()}+</div>
              <div className="stat-label">Retailers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counters.uptime}%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counters.response}s</div>
              <div className="stat-label">Avg Response</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{counters.transactions}M+</div>
              <div className="stat-label">Transactions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="section-header">
          <h2>Marketplace Services</h2>
          <p>All major telecom & digital services in one place.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href="#" className="service-link">Learn More →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Enterprise Security</h3>
            <p>End-to-end encrypted APIs and transactions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Real-time Analytics</h3>
            <p>Live dashboards and instant insights.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-globe"></i>
            </div>
            <h3>Global Scale</h3>
            <p>Built for millions of daily transactions.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Power Your Business?</h2>
          <p>Join thousands of retailers already using Shaurya marketplace.</p>
          <button className="btn-primary">Start Free Trial</button>
        </div>
      </section>
    </div>
   
    </>
  );
};

export default HomePage;