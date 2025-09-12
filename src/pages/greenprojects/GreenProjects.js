import React from "react";
import "./GreenProjects.css";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Solar Energy for Schools",
    description:
      "Installing affordable solar systems in rural schools to power classrooms, labs, and computer hubs.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
    category: "Renewable Energy",
  },
  {
    id: 2,
    title: "Plastic Recycling Initiative",
    description:
      "Collecting plastic waste and converting it into durable building materials for low-cost housing.",
    image:
      "https://images.unsplash.com/photo-1603252109360-909c18e99514?q=80&w=1200&auto=format&fit=crop",
    category: "Recycling",
  },
  {
    id: 3,
    title: "One Million Trees",
    description:
      "Community-driven tree planting to restore watersheds, improve biodiversity, and create green jobs.",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1200&auto=format&fit=crop",
    category: "Tree Planting",
  },
  {
    id: 4,
    title: "Clean Water Catchments",
    description:
      "Rainwater harvesting systems paired with filtration for schools and clinics in arid regions.",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1200&auto=format&fit=crop",
    category: "Water & Sanitation",
  },
  {
    id: 5,
    title: "Efficient Cookstoves",
    description:
      "Distributing clean cookstoves that reduce charcoal use, smoke, and household energy costs.",
    image:
      "https://images.unsplash.com/photo-1542601098-8fc114e148e8?q=80&w=1200&auto=format&fit=crop",
    category: "Clean Cooking",
  },
  {
    id: 6,
    title: "Community Biogas",
    description:
      "Turning organic waste into biogas for cooking and lighting while reducing landfill methane.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop",
    category: "Circular Economy",
  },
];


export default function GreenProjects() {

  const navigate = useNavigate()

  const handleNavigate = () => {
  
    navigate('/https://docs.google.com/forms/d/e/1FAIpQLSccZ8ZyutwOgCELjWVkEV0jsuzm8kQlmd3D57Ek_Uuw4slICw/viewform?embedded=true')
  }

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
        {projects.map((p) => (
          <article key={p.id} className="gp-card">
            <div className="gp-image-wrap">
              <img src={p.image} alt={p.title} className="gp-image" />
              <span className="gp-chip">{p.category}</span>
            </div>
            <div className="gp-content">
              <h3 className="gp-card-title">{p.title}</h3>
              <p className="gp-desc">{p.description}</p>
              <div className="gp-actions">
                <button className="gp-btn gp-btn-primary">Learn More</button>
                <button className="gp-btn gp-btn-ghost">Support</button>
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
