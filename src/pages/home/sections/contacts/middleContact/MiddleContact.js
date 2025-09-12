import React, { useRef } from "react";
import "./MiddleContact.css";
import Dropdowns from "./components/dropdowns/Dropdowns";
import emailjs from "@emailjs/browser";

export default function MiddleContact() {
  
  const contactEmailForm = useRef();

  const sendEmailForm = (e) => {
    e.PreventDefault(); // Prevent the page from reloading
    emailjs
      .sendForm(
        "service_wbwxzhd", // Link your service Id
        "template_2yxyqgq", // Link your template Id
        contactEmailForm.current, // Reference to the entire form, including all filled-in information
        "0zK7ZW8X77x0lvwC1" // API to your specified Email.js account
      )
      .then((result) => {
        alert("Email Sent! success");
        console.log("Email Sent", result.text);
      })
      .catch((error) => alert("Error sending Email: ", error.text));
  };

  return (
    <section className="container-fluid d-flex justify-content-center">
      <div className="contact-middle-section row mt-5 d-flex">
        <div className="contact-questions col-md-4">
          <div className="section-title">
            <h2>FAQ's</h2>
            <p>Do You have any questions for us?</p>
          </div>
          <p>
            If there are any questions you want to ask. We will answer all your
            questions.
          </p>
          <form
            ref={contactEmailForm}
            onSubmit={sendEmailForm}
            className="email-contact-form mt-3"
          >
            <input type="email" placeholder="Enter your Email" />
            <button className="btn ">Submit</button>
          </form>
        </div>
        <div className="contact-faqs col-md-6">
          <Dropdowns />
        </div>
      </div>
    </section>
  );
}
