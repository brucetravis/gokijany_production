import React, { useState, useEffect } from "react";
import loadPaystackScript from "../../utilities/loadPaystackScript";
import "./Payment.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { onValue, ref } from "firebase/database";
import { db } from "../../configs/firebase";

export default function Payment({ price }) {
  const { eventId } = useParams();
  console.log("eventId: ", eventId);

  const [tickets, setTickets] = useState(1);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paystackLoaded, setPaystackLoaded] = useState(false);
  const [coupon, setCoupon] = useState("");

  const navigate = useNavigate();

  const [eventData, setEventData] = useState({
    name: "MEGA CLIMA KENYA 2025",
    date: {
      date: "29",
      day: "Tuesday",
      month: "Dec",
      year: "2025"
    },
    time: {
      start: "10:00AM",
      end: "14:00PM"
    },
    location: "The Sarit Expo Centre, Westlands, Nairobi",
    description: "Scheduled from June 18 to 20, 2025, MEGA CLIMA KENYA is the 4th International Air Conditioning & Refrigeration Exhibition. It brings together industry stakeholders to discuss advancements in HVAC systems, promoting energy efficiency and environmental sustainability.",
    price: "Free entry"
  });

  useEffect(() => {
    const eventRef = ref(db, `events/${eventId}`);
    onValue(eventRef, (snapshot) => {
      const eventSnap = snapshot.val();

      if (eventSnap) {
        setEventData(eventSnap);
        console.log("eventData: ", eventSnap);
      }
    });
  }, [eventId]);

  useEffect(() => {
    loadPaystackScript("https://js.paystack.co/v1/inline.js")
      .then(() => setPaystackLoaded(true))
      .catch((error) => console.error(error));
  }, []);

  const calculateTotal = () => {
    if (eventData?.price === "Free entry" || eventData?.price === "Free" || eventData?.price === 0) {
      return 0;
    }
    const numericPrice = typeof eventData?.price === 'string' 
      ? parseFloat(eventData.price.replace(/[^0-9.]/g, '')) || 0
      : eventData?.price || 0;
    return numericPrice * tickets;
  };

  const incrementTickets = () => {
    setTickets(prev => prev + 1);
  };

  const decrementTickets = () => {
    setTickets(prev => prev > 1 ? prev - 1 : 1);
  };

  const handleTicketInputChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setTickets(value > 0 ? value : 1);
  };

  const payWithPaystack = (e) => {
    e.preventDefault();

    const totalAmount = calculateTotal();

    // If it's a free event, just proceed without payment
    if (totalAmount === 0) {
      alert("Registration successful for free event!");
      navigate(`/events`);
      return;
    }

    if (!paystackLoaded) {
      alert("Paystack script not loaded yet");
      return;
    }

    let handler = window.PaystackPop.setup({
      key: "pk_live_a42246663ec4db45ad68bbaf82698ce4c1759b0f",
      email: email,
      amount: totalAmount * 100,
      currency: "KES",
      channels: ["mobile_money", "card"],
      ref: "" + Math.floor(Math.random() * 1000000000 + 1),
      callback: function (response) {
        let message = "Payment complete! Reference: " + response.reference;
        alert(message);
        console.log(response);
        navigate(`/events`);
      },
      onClose: function () {
        alert("Transaction was not completed, window closed.");
      },
    });

    handler.openIframe();
  };

  const formatDate = () => {
    if (!eventData?.date) return "";
    return `${eventData.date.date} ${eventData.date.day} ${eventData.date.month}`;
  };

  const formatTime = () => {
    if (!eventData?.time) return "";
    return `Starts at ${eventData.time.start} - Ends at ${eventData.time.end}`;
  };

  return (
    <div className="payment">
      <div className="payment-container">
        <div className="payment-header">
          <Link to={`/events`} className="back-button">
            <KeyboardBackspaceIcon className="back-button-icon" />
          </Link>
        </div>
        
        <div className="event-info">
          <h1 className="event-title">{eventData?.name}</h1>
          <div className="event-meta">
            <p className="event-date">{formatDate()}</p>
            <p className="event-time">{formatTime()}</p>
            <p className="event-location">{eventData?.location}</p>
          </div>
          
          {eventData?.description && (
            <p className="event-description">{eventData.description}</p>
          )}
          
          <p className="ticket-price">Ticket Price: {eventData?.price}</p>
        </div>

        <div className="ticket-selector">
          <div className="ticket-counter">
            <span className="total-price">Ksh {calculateTotal()}</span>
            <div className="counter-controls">
              <button 
                type="button" 
                className="counter-btn"
                onClick={decrementTickets}
              >
                -
              </button>
              <div className="ticket-info">
                <input
                  type="number"
                  value={tickets}
                  onChange={handleTicketInputChange}
                  className="ticket-input"
                  min="1"
                />
                <span className="ticket-label">Ticket(s)</span>
              </div>
              <button 
                type="button" 
                className="counter-btn"
                onClick={incrementTickets}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="details-section">
          <h2 className="section-title">Details Order</h2>
          <p className="section-subtitle">Fill form for the details order</p>
          
          <form onSubmit={payWithPaystack} className="payment-form">
            <input
              type="text"
              placeholder="FIRST NAME"
              required
              className="form-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            
            <input
              type="text"
              placeholder="LAST NAME"
              required
              className="form-input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            
            <input
              type="email"
              placeholder="drusillakhulwael@gmail.com"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <div className="phone-input-container">
              <div className="country-code">
                <img src="https://flagcdn.com/ke.svg" alt="Kenya flag" className="flag-icon" />
                <span>+254</span>
              </div>
              <input
                type="tel"
                placeholder="0712345678"
                className="phone-input"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            
            <button disabled type="submit" className="book-button">
              {calculateTotal() === 0 ? "You'll be able to book soon!" : "Book Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}