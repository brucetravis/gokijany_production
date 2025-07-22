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

  const [amount, setAmount] = useState(price);
  const [tickets, setTickets] = useState(1);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
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
      }
    });
  }, []);

  useEffect(() => {
    loadPaystackScript("https://js.paystack.co/v1/inline.js")
      .then(() => setPaystackLoaded(true))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setAmount(price * tickets);
  }, [tickets]);

  const payWithPaystack = (e) => {
    e.preventDefault();

    if (!paystackLoaded) {
      alert("Paystack script not loaded yet");
      return;
    }

    let handler = window.PaystackPop.setup({
      key: "pk_live_a42246663ec4db45ad68bbaf82698ce4c1759b0f", // Replace with your public key
      email: email,
      amount: `${amount}` * 100,
      currency: "KES",
      channels: ["mobile_money", "card"],
      ref: "" + Math.floor(Math.random() * 1000000000 + 1), // Generates a pseudo-unique reference.
      callback: function (response) {
        let message = "Payment complete! Reference: " + response.reference;
        alert(message);
        console.log(response);
        // Open Calendly link in a new tab after successful payment
        navigate(`/events`);
        // Redirect to Calendly link in the same tab after successful payment
        // window.location.href = calendlyLink;
      },
      onClose: function () {
        alert("Transaction was not completed, window closed.");
      },
    });

    handler.openIframe(); // Use iframe instead of popup
  };
  return (
    <div className="payment">
      <div className="payment-container">
        <div className="payment-header">
          <img src={logo} alt="logo" />
          <Link to={`/therapists`} className="back-button">
            <KeyboardBackspaceIcon className="back-button-icon" />
          </Link>
        </div>
        <form
          id="paymentForm"
          onSubmit={payWithPaystack}
          className="paymentForm"
        >
          <input
            type="text"
            placeholder="Full Name*"
            required
            id="full-name"
            className={"full-name"}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            id="email-address"
            className="email"
            placeholder="Enter email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="form-group">
            <input
              type="number"
              id="tickets"
              className="tickets"
              placeholder="Number of tickets"
              value={tickets}
              onChange={(e) => setTickets(e.target.value)}
              required
              min={1}
            />
            <input
              type={"text"}
              id="coupon"
              className="coupon"
              placeholder="Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-btn">
            Pay
          </button>
        </form>
      </div>
    </div>
  );
}
