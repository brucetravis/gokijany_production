import React from "react";
import "./AllEvents.css";
import EventCard from "../eventCard/EventCard";

export default function AllEvents({ events, selectedCategory }) {
  return (
    <div className="all-events">
      <h3>{selectedCategory}</h3>
      <div className="row">
        {events.map((item, index) => (
          <EventCard
            key={index}
            eventId={item.id}
            img={item.img}
            name={item.name}
            location={item.locationDesc}
            price={item.price}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}
