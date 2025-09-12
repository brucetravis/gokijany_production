import React from 'react';
import './CompanyProfile.css';
import companyLogo from '../../data/images/climate.png'; // optional logo

export default function CompanyProfile() {
  return (
    <div className="company-profile">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={companyLogo} alt="Company Logo" className="company-logo"/>
        <h1 className="company-name">GOKIJANY</h1>
        <p className="company-tagline">Innovating the Future, Today</p>
      </section>

      {/* About Us */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Founded in 2020, our company is committed to delivering cutting-edge solutions that 
          empower businesses and individuals. We believe in innovation, integrity, and impact.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="card">
          <h3>Mission</h3>
          <p>To provide innovative technology solutions that create real-world impact.</p>
        </div>
        <div className="card">
          <h3>Vision</h3>
          <p>To become a global leader in tech-driven solutions for every industry.</p>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">Integrity</div>
          <div className="value-card">Innovation</div>
          <div className="value-card">Excellence</div>
          <div className="value-card">Collaboration</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <p>Want to know more about us?</p>
        <button className="cta-btn">Contact Us</button>
      </section>
    </div>
  );
}
