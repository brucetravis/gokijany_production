import React, { useEffect } from "react";
import "./GreenProjects.css";
import { useNavigate } from "react-router-dom";
import { greenProjects } from "../../data/Projectsdata";

export default function GreenProjects() {

  const navigate = useNavigate()

  const handleNavigate = () => {
  
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSccZ8ZyutwOgCELjWVkEV0jsuzm8kQlmd3D57Ek_Uuw4slICw/viewform?embedded=true', '_blank')
  }

  // useEffect to listen for on page landing
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []) // empty dependency array

  return (
    <div className="gp-page">
      {/* Hero */}
      <section className="gp-hero">
        <h1 className="gp-title">Our Green Projects</h1>
        <p className="gp-tagline">
          Practical climate action through renewable energy, restoration, and circular solutions.
        </p>
      </section>

      {/* Stats / Impact */}
      <section className="gp-impact">
        <div className="impact-card">
          <span className="impact-number">500k+</span>
          <span className="impact-label">Kg Waste Recycled</span>
        </div>
        <div className="impact-card">
          <span className="impact-number">1.2k+</span>
          <span className="impact-label">Homes Powered</span>
        </div>
        <div className="impact-card">
          <span className="impact-number">250k+</span>
          <span className="impact-label">Trees Planted</span>
        </div>
      </section>

      {/* Grid */}
      <section className="gp-grid">
        {greenProjects.map((p) => (
          <article key={p.id} 
            className="gp-card"
          >
            <div className="gp-image-wrap">
              <img src={p.img} alt={p.title} className="gp-image" />
              <span className="gp-chip">{p.category}</span>
            </div>
            <div className="gp-content">
              <h3 className="gp-card-title">{p.title}</h3>
              <p className="gp-desc">{p.description}</p>
              <div className="gp-actions">
                <button 
                  className="gp-btn gp-btn-primary"
                  onClick={() => navigate(`/projectsdetails/${p.id}`)} // navigate to the page that will display all the project details
                >
                  Learn More
                </button>

                <button 
                  className="gp-btn gp-btn-ghost"
                >
                  Support
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="gp-cta">
        <h2>Join us in building a greener tomorrow</h2>
        <p>Partner, donate, or volunteer to scale impact.</p>
        <div className="gp-cta-actions">
          <button 
            className="gp-btn gp-btn-primary gp-cta-btn"
            onClick={handleNavigate}
          >
            Partner with Us
          </button>
          <button className="gp-btn gp-btn-ghost gp-cta-btn">Contact</button>
        </div>
      </section>
    </div>
  );
}
