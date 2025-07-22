import React from "react";
import "./Categories.css";

export default function Categories({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="categories">
      <div className="categories-container">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`category ${selectedCategory === item ? "active" : ""}`}
            onClick={() => setSelectedCategory(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
