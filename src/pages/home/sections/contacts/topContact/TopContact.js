import React, { useRef } from "react";
import "./TopContact.css";
// Anything imported from react-router is not exported as default so curly braces are a Must
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Contacts() {
  const contactForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the page from reloading

    emailjs
      .sendForm(
        "service_ugp9cnd",
        "template_cplg75q",
        contactForm.current, // Reference to the entire form, including all filled-in information
        "0zK7ZW8X77x0lvwC1" // API key of your Email js account
      )
      .then((result) => {
        alert("Email Sent! success");
        console.log("Email Sent!", result.text);
      })
      .catch(
        (error) => alert("Error sending Email:", error.text)
        // console.log("Error sending Email:", error.text)
      );
  };

  return (
    <section className="top-contact">
      <div className="container">
        <div className="row gy-5 gx-4 align-items-center">
          <div className="col-lg-7">
            <div className="contact-details">
              <div className="section-title">
                <h2>Contact Us</h2>
                <p>
                  Email, call or complete the form to reach out in case of any
                  inquiries.
                </p>
              </div>

              <p>
                <strong>Email:</strong> info@gokijany.electrixitay.co
              </p>
              <p>
                <strong>Phone:</strong> +254 705 247 958
              </p>

              <div className="other-infoz">
                <div className="other-info">
                  <h3>Feedback and Suggestions</h3>
                  <p>
                    We value your feedback and are continuously working to
                    improve our response. Your input is crucial in shaping our
                    partnership in the near future.
                  </p>
                </div>
                <div className="other-info">
                  <h3>Contact Support</h3>
                  <p>
                    Support team is available around the clock to address any
                    concerns or queries you may have.
                  </p>
                </div>
                <div className="other-info">
                  <h3>Media Inquiries</h3>
                  <p>
                    For media-related questions or press inquiries, contact us
                    at info@gokijany.electrixitay.co.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <form
              ref={contactForm}
              onSubmit={sendEmail}
              className="contact-form"
            >
              <h2>Get in Touch</h2>
              <p>You can reach us any time</p>

              <div className="row input-group">
                <div className="col">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div className="input-div d-flex align-items-center">
                <i className="bi bi-envelope"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="input-div">
                <input type="tel" name="number" placeholder="Phone Number" />
              </div>

              <textarea
                name="message"
                placeholder="How can we help?"
                rows="5"
              ></textarea>

              <button className="section_btn mt-3">Submit</button>
              <p className="terms">
                By contacting us, you agree to{" "}
                <Link to="#">Terms of Service</Link> and{" "}
                <Link to="#">Privacy Policy</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
