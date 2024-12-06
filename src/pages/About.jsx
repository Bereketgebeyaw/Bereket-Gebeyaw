import React from "react";
import { FaBullseye, FaEye, FaHandsHelping } from "react-icons/fa";
import "../styles/About.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* General Description Section */}
      <section className="general-description">
        <h1>About BekiTech</h1>
        <p>
          At BekiTech, we are dedicated to creating innovative technology 
          solutions that empower businesses and individuals to achieve their goals. 
          With a focus on quality, efficiency, and customer satisfaction, we strive 
          to bridge the gap between challenges and opportunities in the tech world.
        </p>
        <p>
          Our team of experts is passionate about delivering cutting-edge 
          solutions tailored to the unique needs of our clients. From software 
          development to tech consulting, BekiTech is your trusted partner in 
          navigating the digital landscape.
        </p>
      </section>

      {/* Mission, Vision, and Values Section */}
      <section className="mission-vision-values">
        <h2>Our Mission, Vision, and Values</h2>
        <div className="mvv-cards">
          {/* Mission Card */}
          <div className="card">
            <FaBullseye className="card-icon" />
            <h3>Mission</h3>
            <p>
              To deliver transformative technology solutions that drive growth, 
              foster innovation, and create lasting impact for our clients and communities.
            </p>
          </div>
          {/* Vision Card */}
          <div className="card">
            <FaEye className="card-icon" />
            <h3>Vision</h3>
            <p>
              To be a global leader in technology innovation, known for 
              excellence, creativity, and our commitment to making a difference.
            </p>
          </div>
          {/* Values Card */}
          <div className="card">
            <FaHandsHelping className="card-icon" />
            <h3>Values</h3>
            <p>
              Integrity, collaboration, customer-centricity, and a relentless 
              pursuit of excellence guide everything we do at BekiTech.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
