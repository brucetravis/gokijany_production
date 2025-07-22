import React, { useState, useEffect } from "react";
import "./Eventdetail.css";
import { Link, useParams } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db } from "../../../configs/firebase";

export default function Eventdetail() {
  const [eventData, setEventData] = useState(null);

  const { eventId } = useParams();

  useEffect(() => {
    const eventRef = ref(db, `events/${eventId}`);
    onValue(eventRef, (snapshot) => {
      const eventSnap = snapshot.val();

      if (eventSnap) setEventData(eventSnap);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="event-detail">
      <div className="container">
        <div className="">
          <div className="event-detail-image">
            <img src={eventData?.img} alt="The Weekend Performing Live" />
          </div>
        </div>

        <div className="event-info row d-flex align-items-center justify-content-between">
          <div className="text-div col-lg-5">
            <div className="mt-4 top">
              <h3>{eventData?.name}</h3>
              <p className="about-event">{eventData?.aboutEvent}</p>
              <div className="mt-5 ">
                <div className="event-one-date-location d-flex justify-content-between">
                  <div className="event-one-date">
                    <div className="d-flex align-items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-calendar3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                      </svg>
                      Date
                    </div>
                    {eventData?.date.date} {eventData?.date.day}{" "}
                    {eventData?.date.month}
                  </div>
                  <div className="event-one-date">
                    <div className="d-flex align-items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      </svg>
                      Location
                    </div>
                    <p className="">{eventData?.locationDesc}</p>
                  </div>
                </div>
                <div className="event-one-price-availability d-flex justify-content-between mt-5">
                  <div className="event-one-Price">
                    <div className="d-flex align-items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-cash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                        <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
                      </svg>
                      Price
                    </div>
                    <div className="d-flex align-items-center">
                      {eventData?.price}
                    </div>
                  </div>
                  <div className="event-one-availability">
                    <div className="d-flex align-items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-people-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                      </svg>
                      Availability
                    </div>
                    50 / 100 left
                  </div>
                </div>
              </div>
              <div className="event-detail-information p-3 mt-5">
                <h3 className="fs-4">Event Information</h3>
                <ul>
                  <li>Please arrive 30 minutes before the event</li>
                  <li>Tickest are non-refundable</li>
                  <li>Age restriction</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="concert-ticket col-lg-5">
            <img src={eventData?.img} alt="The weekend performing" />
            <div className="ticket-card">
              <div className="d-flex gap justify-content-between">
                <h5>{eventData?.name}</h5>
                <div className="d-flex align-items-center">
                  {eventData?.price}
                </div>
              </div>
              <div>
                <p className="d-flex align-items-center gap-1 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  {eventData?.locationDesc}
                </p>
                <p className="d-flex align-items-center gap-1 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  </svg>
                  {eventData?.date.date} {eventData?.date.day}{" "}
                  {eventData?.date.month}
                </p>
                <p className="d-flex align-items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-people-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                  </svg>
                  100 / 100 left
                </p>
              </div>
              <p className="mt-3 mb-3">
                {eventData?.aboutEvent.split(" ").length > 30
                  ? `${eventData?.aboutEvent.slice(0, 30)}...`
                  : eventData?.aboutEvent}
              </p>
            </div>
            {/* <button className="ticket-btn section_btn scrollto">
              Buy Ticket
            </button> */}
            <Link className="section_btn" to={`/payment/${eventId}`}>
              Buy Ticket
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
