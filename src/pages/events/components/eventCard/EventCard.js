import React from "react";
import "./EventCard.css";
import { Link } from "react-router-dom";

export default function EventCard({
  eventId,
  name,
  img,
  location,
  date,
  price,
}) {
  return (
    <Link className="event-card" to={`/events/${eventId}`}>
      <img alt={name} src={img} />
      <div className="event-details">
        <p className="event-title">{name}</p>
        <p className="event-date">
          {date.date} {date.day} {date.month} {date?.year}
        </p>
        <p className="event-location">{location}</p>
        <p className="event-price">{price}</p>
      </div>
    </Link>
  );
}
