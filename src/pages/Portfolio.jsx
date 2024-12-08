import React from "react";
import "../styles/Portfolio.css";

import eLearning from "../assets/elearning.png";
import realEstate from "../assets/realestate.png";
import transportation from "../assets/transportation.png";
import website from "../assets/website.png";
import blog from "../assets/blog.png";
import taskManagement from "../assets/task.png";

const projects = [
  { id: 1, title: "E-Learning Platform", image: eLearning },
  { id: 2, title: "Real Estate Management System", image: realEstate },
  { id: 3, title: "Transportation Management System", image: transportation },
  { id: 4, title: "Company Website", image: website },
  { id: 5, title: "Blog Platform", image: blog },
  { id: 6, title: "Task Management System", image: taskManagement },
];

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1>My Portfolio</h1>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <div className="portfolio-overlay">
              <h2>{project.title}</h2>
            </div>
          </div>
        ))}
      </div>
     
      
      <a href="/contact" className="contact-button">Contact Me</a>
    </div>
  );
}

export default Portfolio;
