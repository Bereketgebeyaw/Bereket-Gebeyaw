import React from "react";
import { FaBullseye, FaEye, FaHandsHelping } from "react-icons/fa";
import "../styles/About.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* General Description Section */}
      <section className="general-description">
        <h1>About Me</h1>
        <p>
         I'm Bereket Gebeyaw, a passionate and driven individual dedicated to crafting impactful solutions in the tech world. With a strong focus on quality, efficiency, and innovation, I aim to bridge the gap between challenges and opportunities through technology.
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
        <h2> Mission, Vision, and Values</h2>
        <div className="mvv-cards">
          {/* Mission Card */}
          <div className="card">
            <FaBullseye className="card-icon" />
            <h3>Mission</h3>
            <p>
              To deliver transformative technology solutions that drive growth, 
              foster innovation, and create lasting impact for my clients and communities.
            </p>
          </div>
          {/* Vision Card */}
          <div className="card">
            <FaEye className="card-icon" />
            <h3>Vision</h3>
            <p>
              To be a global leader in technology innovation, known for 
              excellence, creativity, and my commitment to making a difference.
            </p>
          </div>
          {/* Values Card */}
          <div className="card">
            <FaHandsHelping className="card-icon" />
            <h3>Values</h3>
            <p>
            Integrity, collaboration, and excellence define my approach, driving impactful and meaningful results in every pursuit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
