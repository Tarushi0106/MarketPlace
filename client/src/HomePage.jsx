import React, { useEffect, useState, useRef } from 'react';
import './HomePage.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate();
const industriesRef = useRef(null);

const scrollToIndustries = () => {
  industriesRef.current?.scrollIntoView({ behavior: "smooth" });
};

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
const industries = [
  {
    icon: "fas fa-university",
    title: "BFSI",
    desc: "Secure and intelligent credit processing, onboarding & reconciliation platforms."
  },
  {
    icon: "fas fa-heartbeat",
    title: "Healthcare",
    desc: "Back-office automation, patient records, telemedicine integration, billing & diagnostics."
  },
  {
    icon: "fas fa-graduation-cap",
    title: "Education Management",
    desc: "Digital learning platforms, smart ID kiosks, and automation in exams & operations."
  },
  {
    icon: "fas fa-signal",
    title: "Telecom Services",
    desc: "Customer support automation, onboarding verification, fraud detection, and compliance."
  },
  {
    icon: "fas fa-shopping-bag",
    title: "Retail & E-Commerce",
    desc: "Smart kiosks, checkout automation, inventory intelligence, and customer engagement tools."
  },
  {
    icon: "fas fa-landmark",
    title: "Government & PSU",
    desc: "Digital automation for public services and citizen engagement."
  },
  {
    icon: "fas fa-photo-video",
    title: "Media & Entertainment",
    desc: "OTT platforms, digital streaming support, audience analytics, and content delivery automation."
  },
  {
    icon: "fas fa-truck",
    title: "Logistics Services",
    desc: "Fleet management, smart kiosks, tracking platforms, AI-driven delivery automation."
  },
  {
    icon: "fas fa-plane",
    title: "Travel & Hospitality",
    desc: "Self-service kiosks, check-in automation, smart feedback systems, and booking engines."
  }
];
  return (
       <>
        <Navbar />
<Navbar onIndustryClick={scrollToIndustries} />    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className="hero-title">
          The Digital Solution for growing companies <span className="highlight">with Shaurya</span>
          </h1>
          <p className="hero-subtitle">
          The Right Digital Solution. In 10 Seconds
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Marketplace</button>
        <button
className="btn-secondary"
onClick={() => navigate("/products")}
>
View Solutions
</button>
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

{/* Industries Section */}
<section className="industries-section" ref={industriesRef}>
<div className="industries-grid">
{industries.map((item, index) => (
<div key={index} className="industry-card">
<div className="industry-icon">
<i className={item.icon}></i>
</div>
<h3>{item.title}</h3>
<p>{item.desc}</p>
</div>
))}
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