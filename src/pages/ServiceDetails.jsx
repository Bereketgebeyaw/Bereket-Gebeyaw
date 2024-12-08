import React from "react";
import { useParams } from "react-router-dom"; 
import "../styles/ServiceDetails.css"; 

const serviceDetails = {
  "social-media-management": {
    title: "Social Media Management & Growth Strategy",
    description: "I help businesses turn their social media platforms into powerful tools for engagement and brand growth. By creating tailored content, managing posts, and analyzing performance metrics, I ensure your brand resonates with the right audience and stands out in a crowded digital space.",
    additionalInfo: "I specialize in crafting personalized strategies that are aligned with your brand’s voice and goals. From content creation to performance tracking, I oversee every aspect of your social media presence. My approach is rooted in data, ensuring that each post serves a strategic purpose, builds community, and drives measurable results. I stay up-to-date with trends and platform changes to keep your content fresh and relevant, helping you stay ahead of the competition."
  },
  "startup-services": {
    title: "Startup Support & Business Consulting",
    description: "Launching a startup can be overwhelming, but with the right guidance, you can navigate through early challenges and build a strong foundation for growth. I provide expert consulting services that include market research, business strategy development, and execution planning to ensure that your startup is ready for success from day one.",
    additionalInfo: "With a deep understanding of the startup ecosystem, I offer solutions that address common pain points such as finding product-market fit, refining business models, and scaling efficiently. My services include everything from strategic planning, risk management, and competitive analysis to securing initial customers and investments. Whether you're in the ideation phase or scaling, my goal is to equip you with the tools and insights necessary for sustained growth and profitability."
  },
  "custom-web-development": {
    title: "Custom Web Development Solutions",
    description: "Your website is often the first point of contact with potential customers. I offer web development solutions that ensure your website is not only visually appealing but also fully functional, fast, and scalable. From creating responsive designs to developing robust back-end systems, I make sure your website delivers a seamless user experience and meets your business goals.",
    additionalInfo: "Leveraging modern web technologies and best practices, I develop websites that are easy to navigate, mobile-friendly, and optimized for speed. Whether you need an e-commerce platform, a content management system, or a custom-built solution, I have the skills and experience to deliver a tailored website that grows with your business. I ensure that your site is secure, scalable, and future-proof, allowing you to adapt to changing market demands and evolving user expectations."
  },
  "digital-marketing": {
    title: "Targeted Digital Marketing Strategies",
    description: "Digital marketing is all about connecting with your target audience in meaningful ways. I design and implement data-driven digital marketing strategies that leverage SEO, social media campaigns, content marketing, and email marketing to drive traffic, increase engagement, and ultimately, boost conversions. My goal is to help your business reach its full potential in the digital world.",
    additionalInfo: "I take a holistic approach to digital marketing, focusing on crafting compelling content that speaks to your audience while optimizing for search engines. By understanding your business and customers, I create strategies that are tailored to your needs, whether you're looking to increase brand awareness, drive website traffic, or generate leads. With regular performance tracking and optimization, I ensure that your marketing efforts are always aligned with your goals, yielding measurable and sustainable growth."
  },
  "ui-ux-design": {
    title: "Creative UI/UX Design Services",
    description: "A great user experience can be the difference between a satisfied customer and a lost opportunity. I design intuitive, visually appealing user interfaces and seamless experiences that delight users and drive engagement. By focusing on the user's journey, I ensure that every interaction with your website or app is as easy and enjoyable as possible.",
    additionalInfo: "I use a user-centered design approach, conducting thorough research to understand the needs and behaviors of your target audience. From wireframing and prototyping to the final visual design, I create products that not only look great but are also functional and easy to use. My designs prioritize usability, accessibility, and responsiveness, ensuring that users have a positive experience across all devices and platforms."
  },
  "mobile-app-development": {
    title: "Mobile App Development for iOS & Android",
    description: "I help bring your ideas to life by creating feature-rich mobile apps for iOS and Android. Whether you're building an app to enhance customer engagement or streamline your internal processes, I handle everything from concept and design to coding and deployment, ensuring that your app delivers a seamless experience across platforms.",
    additionalInfo: "With expertise in mobile development, I focus on building apps that are both high-performing and secure. I work with you to understand your app's purpose and target audience, ensuring that the final product aligns with your business objectives. I follow industry best practices to create apps that are fast, scalable, and easy to maintain, providing a reliable and enjoyable experience for your users on both iOS and Android devices."
  },
  "e-commerce-solutions": {
    title: "E-Commerce Development & Optimization",
    description: "Building a successful online store requires more than just setting up an e-commerce platform. I offer end-to-end e-commerce solutions that include everything from website design and development to payment gateway integration and inventory management, ensuring that your online store provides a seamless, secure, and enjoyable shopping experience for your customers.",
    additionalInfo: "Whether you're starting from scratch or looking to optimize an existing store, I help businesses design and implement e-commerce platforms that cater to both customer needs and business requirements. I ensure that your store is fully optimized for mobile devices, fast loading times, and secure transactions. With features like inventory tracking, payment integration, and user-friendly interfaces, I create e-commerce solutions that are built for growth, scalability, and customer satisfaction."
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
