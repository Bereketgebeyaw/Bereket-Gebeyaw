import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import myresume from "../assets/cv.pdf"


function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled"); // Add the scrolled class when scrolled
      } else {
        navbar.classList.remove("scrolled"); // Remove the class when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener
    };
  }, []);

  return (
    <nav>
  <div className="navbar-container">
    <ul>
      <li><NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink></li>
      <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>About</NavLink></li>
      <li><NavLink to="/services" className={({ isActive }) => (isActive ? "active-link" : "")}>Services</NavLink></li>
      <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active-link" : "")}>Portfolio</NavLink></li>
      <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>Contact</NavLink></li>
    </ul>

    <div className="resume-button">
  <a href={myresume} target="_blank" rel="noopener noreferrer">Resume</a>
</div>

  </div>
</nav>

  );
}

export default Navbar;
