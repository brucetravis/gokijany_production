import React from "react";
import "./Bottom.css";
// Anything imported from react-router-dom is not exported from as default, so curly braces are a Must
import { Link } from "react-router-dom";

export default function Bottom() {
  return (
    <div>
      <section className="bottom-body">
        <p className="ready">
          Ready to Experience the speed and
          <br />
          simplicity of Snappy?
        </p>
        <div className="links">
          <Link to="/" className="get">
            Get Started
          </Link>
          <Link to="/apps" className="learn">
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </Link>
        </div>
      </section>
      <section className="snappy-footer" style={{ paddingLeft: "3vw" }}>
        <div className="snappy-logo-and-apps">
          <div>
            <div className="snappy-logo">
              <img
                src={require("../../../../../images/gokijany-logo-nobg.png")}
                alt="snappy logo"
              />
            </div>
            <div className="snappy-apps">
              <Link
                to="/apps"
                className="apps"
                style={{
                  display: "flex",
                  gap: "10px",
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "black",
                }}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="33"
                    fill="currentColor"
                    className="bi bi-apple"
                    viewBox="0 0 16 16"
                    style={{ marginTop: "7px" }}
                  >
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                  </svg>
                </div>
                <div>
                  Download on the
                  <p className="apps-p">App Store</p>
                </div>
              </Link>
              <Link
                to="/apps"
                className="apps"
                style={{
                  display: "flex",
                  gap: "10px",
                  paddingLeft: "10px",
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "black",
                }}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="33"
                    fill="currentColor"
                    className="bi bi-google-play"
                    viewBox="0 0 16 16"
                    style={{ marginTop: "7px" }}
                  >
                    <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
                  </svg>
                </div>
                <div>
                  GET IT ON
                  <p style={{ marginTop: "-0.5vh", fontSize: "25px" }}>
                    Google Play
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div
            className="snappy-footer-texts"
            style={{ display: "flex", gap: "30px" }}
          >
            <div>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "#333333",
                }}
              >
                What we do
              </p>
              <p>Features</p>
              <p>Security</p>
              <p>Business</p>
              <p>Services</p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "#333333",
                }}
              >
                Use Snappy
              </p>
              <p>Android</p>
              <p>Iphone</p>
              <p>Mac/PC</p>
              <p>Snappy Web</p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "#333333",
                }}
              >
                About
              </p>
              <p>Blog</p>
              <p>Meet the Team</p>
              <p>Contact Us</p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "#333333",
                }}
              >
                Social Media
              </p>
              <p>Twitter</p>
              <p>LinkedIn</p>
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
