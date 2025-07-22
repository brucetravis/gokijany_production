import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="d-flex align-items-center flex-column justify-content-center">
      <div className="container d-flex justify-content-center">
        <div className="logo">
          <img src={require("../../../data/images/gokijany-logo-nobg.png")} alt="" />
        </div>
      </div>
      <div className="footer_footer pt-4">
        <p>© 2025 Electrixitaty | All Rights Reserved</p>
      </div>
    </footer>
  );
}
