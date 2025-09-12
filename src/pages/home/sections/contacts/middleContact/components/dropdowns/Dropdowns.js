import React, { useState } from "react";
import "./Dropdowns.css";

export default function Dropdowns() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  return (
    <div className="contact-dropdowns">
      <div className="contact-dropdown">
        <p
          onClick={() => setIsOpen1(!isOpen1)}
          className="fs-5 d-flex align-items-center gap-4"
        >
          How will we Know that the trees have been planted?
          <svg
            style={{
              transform: isOpen1 ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.5s ease",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </p>

        {isOpen1 && (
          <div style={{ paddingLeft: "10px", fontSize: '17px', marginBottom: "15px" }}>
            We Geo Tag the areas where the trees have been planted so that you
            as our Volunteers can observe their growth.
          </div>
        )}
      </div>
      <div className="contact-dropdown">
        <p
          onClick={() => setIsOpen2(!isOpen2)}
          className="fs-5 d-flex align-items-center gap-4"
        >
          Can we partner with you to maximize our environmental impact?
          <svg
            style={{
              transform: isOpen2 ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.5s ease",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </p>
        {isOpen2 && (
          <div style={{ paddingLeft: "10px", fontSize: '17px', marginBottom: "15px" }}>
            We welcome all Parternships. Our goal is to transform our
            environment into a carbon free habitat. Kindly reach out to us for partnerships.
          </div>
        )}
      </div>
      <div className="contact-dropdown">
        <p
          onClick={() => setIsOpen3(!isOpen3)}
          className="fs-5 d-flex align-items-center gap-4"
        >
          What is Goshilingy?
          <svg
            style={{
              transform: isOpen3 ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.5s ease",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </p>
        {isOpen3 && (
          <div style={{ paddingLeft: "10px", fontSize: '17px', marginBottom: "15px" }}>
            Goshilingy is our crypto currency which you will be rewarded with
            according your total carbon credits. The ratio is 1:1. 1 Carbon
            credit = 1 Goshilingy.
          </div>
        )}
      </div>
      <div className="contact-dropdown">
        <p
          onClick={() => setIsOpen4(!isOpen4)}
          className="fs-5 d-flex align-items-center gap-4"
        >
          How will I be redeeming my carbon points?
          <svg
            style={{
              transform: isOpen4 ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.5s ease",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </p>
        {isOpen4 && (
          <div style={{ paddingLeft: "10px", fontSize: '17px', marginBottom: "15px" }}>
            We are working on partnering with establishments which will allow you 
            reedem your credits which have been converted into the crypto
            coin, "Goshilingy". We are also working on how you will be able to transfer
            the "Goshilingy"  amongst yourselves.
          </div>
        )}
      </div>

      <div className="contact-dropdown">
        <p
          onClick={() => setIsOpen5(!isOpen5)}
          className="fs-5 d-flex align-items-center gap-4"
        >
          Do you offer any Job Opportunities?
          <svg
            style={{
              transform: isOpen5 ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.5s ease",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </p>
        {isOpen5 && (
          <div style={{ paddingLeft: "10px", fontSize: '17px', marginBottom: "15px" }}>
            From our partnerships, we are confident that job opportunities 
            will be made available for our volunteers. Once It is finalized
            you will be informed.
          </div>
        )}
      </div>
    </div>
  );
}
