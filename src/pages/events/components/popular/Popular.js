import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Popular.css";

const Popular = ({ popularEvents }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const navigate = useNavigate();

  const handleClick = (index, eventId) => {
    setActiveIndex(index);
    if (index === activeIndex) {
      navigate(`/events/${eventId}`);
    }
  };

  return (
    <div className="popular-container">
      <div className="wrapper">
        {popularEvents.map((item, index) => {
          const total = popularEvents.length;
          const relativeIndex = (index - activeIndex + total) % total; // Ensures circular positioning

          let positionClass = "";
          if (relativeIndex === 0) {
            positionClass = "active"; // Center item
          } else if (relativeIndex === 1) {
            positionClass = "right"; // Right of center
          } else if (relativeIndex === total - 1) {
            positionClass = "left"; // Left of center
          } else {
            positionClass = "hidden"; // Hide other items
          }

          return (
            <div
              key={index}
              className={`item ${positionClass}`}
              onClick={() => handleClick(index, item.id)}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="popluar_description">
                <h3 className="title">{item.name}</h3>
                <div className="popular_date_n_time">
                  <p>{item.location}</p>
                  <p>
                    {item.date.day} {item.date.date} {item.date.month}
                    {item.date?.year}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
