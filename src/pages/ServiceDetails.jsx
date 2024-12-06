import React from "react";
import { useParams } from "react-router-dom"; // Get parameters from the URL
import "../styles/ServiceDetails.css"; // Optional: Add styling for the details page

const serviceDetails = {
  "social-media-management": {
    title: "Social Media Management",
    description: "Manage your social presence with strategic content, engagement, and growth.",
    additionalInfo: "We help you with content creation, post scheduling, and community management."
  },
  "startup-services": {
    title: "Startup Services",
    description: "Kickstart your business with expert guidance, tools, and resources.",
    additionalInfo: "Our experts assist in market research, business strategy, and execution."
  },
  "custom-web-development": {
    title: "Custom Web Development",
    description: "We build scalable, secure, and fast websites tailored to your needs.",
    additionalInfo: "Full-stack web development, from UI/UX design to back-end services."
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Expand your brand’s online presence through targeted campaigns.",
    additionalInfo: "SEO, SEM, social media, and email marketing campaigns to grow your brand."
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "Design user-friendly, visually appealing websites and applications.",
    additionalInfo: "We ensure an intuitive and engaging experience for your users."
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    description: "Create innovative and functional mobile applications for iOS and Android.",
    additionalInfo: "We offer end-to-end mobile app development, from design to launch."
  },
  "e-commerce-solutions": {
    title: "E-Commerce Solutions",
    description: "Build secure, scalable, and user-friendly e-commerce platforms.",
    additionalInfo: "Custom e-commerce platforms that fit your business model, secure payments, and more."
  }
};

function ServiceDetails() {
  const { serviceId } = useParams(); // Get the serviceId from the URL
  const service = serviceDetails[serviceId]; // Find the service from the data

  if (!service) {
    return <div>Service not found!</div>; // Handle case where the service doesn't exist
  }

  return (
    <div className="service-details">
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <div>{service.additionalInfo}</div>
    </div>
  );
}

export default ServiceDetails;
