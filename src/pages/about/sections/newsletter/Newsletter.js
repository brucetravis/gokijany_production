import React, { useRef } from "react";
import "./Newsletter.css";
import emailjs from "@emailjs/browser"

export default function Newsletter() {

  // Create a reference to the form email input
  const formRef = useRef()

  // function to manually handle the Newsletter submission
  const handleNewsletterSubmit = (e) => {
    e.preventDefault() // Prevent the default behaviour of the form

    // Access the value of the input
    // const emailValue = formRef.current.user_email.value

    // Access the full form value and send the email to the correct servide provider and the correct template
    emailjs.sendForm(
      "service_wbwxzhd", // service id to the correct service provider
      "template_sxvq8ka", // the temlate that the message should be in
      formRef.current, // The value of the input in the form
      "0zK7ZW8X77x0lvwC1" // The public APi key to identify which account the service id and template Id belong to and for secure transmission via the network
    
    ).then((result) => {
        alert("Email sent successfully.")
        console.log("Success", result.text)
      
      }
    ).catch((err) => {
      console.log("Error sending Email", err.text)
    })
  }

  return (
    <section id="subscribe">
      <div className="container">
        <h2>Subscribe Newsletter & get latest news</h2>
        <div>
          <form 
            action=""
            ref={formRef}
            onSubmit={handleNewsletterSubmit}
          >
            <input 
              type="email"
              name="user_email"
              placeholder="Enter your email address"
            />

            <input type="submit" className="section_btn" />
          </form>
        </div>
      </div>
    </section>
  );
}
