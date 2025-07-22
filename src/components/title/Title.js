import React from "react";
import "./Title.css";

export default function Title({ h2, p, pColor }) {
  return (
    <div className="title">
      <h2>{h2}</h2>
      <p style={{ color: pColor }}>{p}</p>
    </div>
  );
}
