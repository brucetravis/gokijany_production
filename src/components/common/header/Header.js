import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import logo from "../../../data/images/gokijany-logo-nobg.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollTop = useRef(0);
  const [activeSection, setActiveSection] = useState("home");

  // Header style and hide/reveal on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const header = document.getElementById("header");

      if (header) {
        header.classList.toggle("header-scrolled", scrollTop > 50);
        header.style.transform =
          scrollTop > lastScrollTop.current
            ? "translateY(-100%)"
            : "translateY(0)";
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy functionality to set the active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScrollSpy = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const menuItems = [
    { path: "/", label: "Home", sectionId: "home" },
    { path: "/who", label: "About Us", sectionId: "who" },
    { path: "/features", label: "Features", sectionId: "features" },
    { path: "/objectives", label: "Objectives", sectionId: "objectives" },
    // { path: "/careers", label: "Careers", sectionId: "careers" },
    // { path: "/impact", label: "Impact", sectionId: "impact" },
    { path: "/gallery", label: "Gallery", sectionId: "gallery" },
    { path: "/whyus", label: "Why Us", sectionId: "whyus" },
    // { path: "/events", label: "Events", sectionId: "events" },
    { path: "/contacts", label: "Contact Us", sectionId: "contacts" },
  ];

  const toggleMobileMenu = () => setIsMobile((prev) => !prev);
  const closeMobileMenu = () => setIsMobile(false);

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="logo me-auto me-lg-0">
          <img
            src={logo}
            alt="Gokijany Logo"
            className="img-fluid"
            loading="lazy"
          />
        </Link>

        <nav id="navbar" className={`navbar ${isMobile ? "mobile" : ""}`}>
          <div onClick={toggleMobileMenu} className="mobile-nav-toggle">
            {isMobile ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            )}
          </div>
          <ul>
            {menuItems.map(({ path, label, sectionId }) => (
              <li key={path} onClick={closeMobileMenu}>
                {path === "/events" ? (
                  <Link to={path}>{label}</Link>
                ) : (
                  <a
                    href={`/#${sectionId}`}
                    className={activeSection === sectionId ? "active" : ""}
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="https://play.google.com/store/apps/details?id=com.electrixitaty.gokijany&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
          className="section_btn scrollto"
        >
          Download
        </a>
      </div>
    </header>
  );
}
