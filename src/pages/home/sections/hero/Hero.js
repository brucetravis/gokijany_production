import React from "react";
import heroImg from "../../../../data/images/hero-removebg.png"; // import image
import "./Hero.css";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{ 
        backgroundImage: `url(${heroImg})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "60%",
        backgroundRepeat: "no-repeat"
      
      }} // apply here
      id="home"
    >
      <div className="hero-img"></div>
    </section>
  );
}

