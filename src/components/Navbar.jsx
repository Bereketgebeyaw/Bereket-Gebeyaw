import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

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
      <div className="logo">BekiTech</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
