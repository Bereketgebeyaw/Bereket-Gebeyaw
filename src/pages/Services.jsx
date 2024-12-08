import React from "react";
import { Link } from "react-router-dom"; 
import "../styles/Services.css";

function Services() {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Services</h1>
        <p>I offer a variety of services tailored to your business needs</p>
      </div>
      <div className="services-list">
        
        <div className="service-card-item">
          <h2>Social Media Management</h2>
          <p>Manage your social presence with strategic content and engagement.</p>
          <Link to="/service-details/social-media-management">
            <button className="view-more">View More</button>
          </Link>
        </div>

        
        <div className="service-card-item">
          <h2>Startup Services</h2>
          <p>Kickstart your business with our expert guidance and tools.</p>
          <Link to="/service-details/startup-services">
            <button className="view-more">View More</button>
          </Link>
        </div>

       
        <div className="service-card-item">
          <h2>Custom Web Development</h2>
          <p>We build scalable, secure, and fast websites tailored to your needs.</p>
          <Link to="/service-details/custom-web-development">
            <button className="view-more">View More</button>
          </Link>
        </div>

        <div className="service-card-item">
          <h2>Digital Marketing</h2>
          <p>Expand your brand's online presence through targeted digital campaigns.</p>
          <Link to="/service-details/digital-marketing">
            <button className="view-more">View More</button>
          </Link>
        </div>

       
        <div className="service-card-item">
          <h2>UI/UX Design</h2>
          <p>Design user-friendly and visually appealing websites and applications.</p>
          <Link to="/service-details/ui-ux-design">
            <button className="view-more">View More</button>
          </Link>
        </div>

      
        <div className="service-card-item">
          <h2>Mobile App Development</h2>
          <p>Create innovative and functional mobile applications for iOS and Android.</p>
          <Link to="/service-details/mobile-app-development">
            <button className="view-more">View More</button>
          </Link>
        </div>

      
        <div className="service-card-item">
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
