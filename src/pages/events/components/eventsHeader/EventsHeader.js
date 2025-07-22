import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./EventsHeader.css";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";

export default function EventsHeader() {
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const header = document.getElementById("events-header");

      if (header) {
        if (scrollTop > 50) {
          header.classList.add("events-header-scrolled");
        } else {
          header.classList.remove("events-header-scrolled");
        }

        if (scrollTop > lastScrollTop) {
          header.style.opacity = 1;
        } else {
          header.style.opacity = 0;
        }
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <div className="events-header" id="events-header">
      <div className="container">
        <div className="events-search-bar">
          <SearchIcon />
          <input type={"text"} placeholder="Search events..." />
        </div>
        <div className="events-header-options">
          <div className="events-header-option">
            <ConfirmationNumberIcon />
            <p>My tickets</p>
          </div>
          <div className="events-header-option">
            <EditCalendarIcon />
            <p>Create an Event</p>
          </div>
        </div>
      </div>
    </div>
  );
}
