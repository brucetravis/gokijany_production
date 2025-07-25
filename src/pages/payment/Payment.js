import React, { useState, useEffect } from "react";
import loadPaystackScript from "../../utilities/loadPaystackScript";
import "./Payment.css";
import logo from "../../data/images/icon.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { onValue, ref } from "firebase/database";
import { db } from "../../configs/firebase";

export default function Payment({ price }) {
  const { itemId } = useParams();
  console.log("itemId: ", itemId);

  const [amount, setAmount] = useState(0);
  const [tickets, setTickets] = useState(1);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [paystackLoaded, setPaystackLoaded] = useState(false);
  const [coupon, setCoupon] = useState("");

  const navigate = useNavigate();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const eventRef = ref(db, `events/${itemId}`);
    onValue(eventRef, (snapshot) => {
      const eventSnap = snapshot.val();

      if (eventSnap) {
        setEventData(eventSnap);
        console.log("eventData: ", eventSnap);
        // Set initial amount based on event price
        const eventPrice = parseFloat(eventSnap.price?.replace(/[^\d.-]/g, '')) || 0;
        setAmount(eventPrice * tickets);
      }
    });
  }, [tickets]);

  useEffect(() => {
    loadPaystackScript("https://js.paystack.co/v1/inline.js")
      .then(() => setPaystackLoaded(true))
      .catch((error) => console.error(error));
  }, []);

  const handleTicketChange = (increment) => {
    const newTickets = Math.max(1, tickets + increment);
    setTickets(newTickets);
  };

  const formatPrice = (price) => {
    if (price === 0 || price === "0" || price === "Free" || price === "Free entry") {
      return "Free entry";
    }
    return `Ksh ${price}`;
  };

  const formatDate = (dateObj) => {
    if (!dateObj) return "";
    return `${dateObj.date} ${dateObj.day} ${dateObj.month}${dateObj.year ? ` ${dateObj.year}` : ''}`;
  };

  const payWithPaystack = (e) => {
    e.preventDefault();

    if (amount === 0) {
      // Handle free event booking
      alert("Event booking confirmed! Reference: FREE_" + Math.floor(Math.random() * 1000000000 + 1));
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
      amount: `${amount}` * 100,
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

  if (!eventData) {
    return <div className="payment loading">Loading event details...</div>;
  }

  return (
    <div className="payment">
      <div className="payment-container">
        {/* Header */}
        <div className="payment-header">
          <Link to={`/events`} className="back-button">
            <KeyboardBackspaceIcon className="back-button-icon" />
          </Link>
        </div>

        {/* Event Details Section */}
        <div className="event-info">
          <h1 className="event-title">{eventData.name}</h1>
          
          <div className="event-meta">
            <p className="event-date">{formatDate(eventData.date)}</p>
            <p className="event-time">
              Starts at {eventData.startTime || "10:00AM"} - Ends at {eventData.endTime || "14:00PM"}
            </p>
            <p className="event-location">{eventData.location}</p>
          </div>

          <div className="event-description">
            <p>{eventData.description || "Join us for this amazing event!"}</p>
          </div>

          <div className="ticket-price">
            <p>Ticket Price: {formatPrice(eventData.price)}</p>
          </div>
        </div>

        {/* Ticket Selection */}
        <div className="ticket-selection">
          <div className="price-display">
            <span className="price-amount">Ksh {amount}</span>
          </div>
          
          <div className="ticket-counter">
            <button 
              type="button" 
              className="counter-btn minus"
              onClick={() => handleTicketChange(-1)}
              disabled={tickets <= 1}
            >
              -
            </button>
            <span className="ticket-count">{tickets} Ticket(s)</span>
            <button 
              type="button" 
              className="counter-btn plus"
              onClick={() => handleTicketChange(1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Order Details Form */}
        <div className="order-details">
          <h2>Details Order</h2>
          <p className="form-subtitle">Fill form for the details order</p>

          <form onSubmit={payWithPaystack} className="order-form">
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
              required
              className="form-input email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <div className="phone-input-container">
              <div className="country-code">
                <img src="https://flagcdn.com/ke.svg" alt="Kenya" className="flag-icon" />
                <span>+254</span>
              </div>
              <input
                type="tel"
                placeholder="0712345678"
                required
                className="form-input phone-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button disabled type="submit" className="book-button">
              You'll be able to book soon!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}