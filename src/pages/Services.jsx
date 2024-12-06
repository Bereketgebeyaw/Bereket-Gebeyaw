import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../styles/Services.css";

function Services() {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>We offer a variety of services tailored to your business needs</p>
      </div>
      <div className="services-list">
        {/* Social Media Management Service Card */}
        <div className="service-card">
          <h2>Social Media Management</h2>
          <p>Manage your social presence with strategic content and engagement.</p>
          <Link to="/service-details/social-media-management">
            <button className="view-more">View More</button>
          </Link>
        </div>

        {/* Startup Services Card */}
        <div className="service-card">
          <h2>Startup Services</h2>
          <p>Kickstart your business with our expert guidance and tools.</p>
          <Link to="/service-details/startup-services">
            <button className="view-more">View More</button>
          </Link>
        </div>

        {/* Custom Web Development Service Card */}
        <div className="service-card">
          <h2>Custom Web Development</h2>
          <p>We build scalable, secure, and fast websites tailored to your needs.</p>
          <Link to="/service-details/custom-web-development">
            <button className="view-more">View More</button>
          </Link>
        </div>

        {/* Digital Marketing Service Card */}
        <div className="service-card">
          <h2>Digital Marketing</h2>
          <p>Expand your brand's online presence through targeted digital campaigns.</p>
          <Link to="/service-details/digital-marketing">
            <button className="view-more">View More</button>
          </Link>
        </div>

        {/* UI/UX Design Service Card */}
        <div className="service-card">
          <h2>UI/UX Design</h2>
          <p>Design user-friendly and visually appealing websites and applications.</p>
          <Link to="/service-details/ui-ux-design">
            <button className="view-more">View More</button>
          </Link>
        </div>

        {/* Mobile App Development Service Card */}
        <div className="service-card">
          <h2>Mobile App Development</h2>
          <p>Create innovative and functional mobile applications for iOS and Android.</p>
          <Link to="/service-details/mobile-app-development">
            <button className="view-more">View More</button>
          </Link>
        </div>

        {/* E-Commerce Solutions Service Card */}
        <div className="service-card">
          <h2>E-Commerce Solutions</h2>
          <p>Build your online store with secure, scalable, and user-friendly e-commerce platforms.</p>
          <Link to="/service-details/e-commerce-solutions">
            <button className="view-more">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
