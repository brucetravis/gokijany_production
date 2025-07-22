import React from "react";
import "./Who.css";
import { Link } from "react-router-dom";

export default function Who() {
  return (
    <section id="who" className="who">
      <div className="container" data-aos="zoom-in">
        <div className="text-center">
          <div className="section-title">
            <h2>Who we are</h2>
            <p>Innovation for Conservation</p>
          </div>
          <div className="mb-3">
            <p>
              Gokijany is a climate-fintech marketplace where users can offset
              and monetise carbon. By integrating carbon offsetting,
              eco-friendly shopping, and carbon credit trading, the platform
              provides a seamless way for individuals and businesses to take
              meaningful climate action while also unlocking financial
              opportunities. Whether through trading verified carbon credits,
              supporting sustainable projects, or purchasing eco-conscious
              products, users can engage in an ecosystem where sustainability
              and economic value go hand in hand. Transparency and reliability
              are at the core of Gokijany, ensuring that every contribution is
              impactful and verifiable. While the ultimate goal is to drive
              global efforts toward net-zero emissions, the platform also
              empowers users by making sustainability practical, rewarding, and
              financially viable.
            </p>
          </div>
          <div>
            <Link to="/about" className="section_btn scrollto">
              Learn about Gokijany
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
