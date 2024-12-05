import React from "react";
import "../styles/Home.css";
import homeImage from"../assets/home.jpg"
 

function Home() {
    return (
        <div className="home-container">
            <section className="hero-section">
                <h1>Welcome to BekiTech</h1>
                <p>
                    Discover innovative solutions and explore new possibilities with BekiTech. 
                    Our mission is to transform ideas into impactful solutions.
                </p>
            </section>
            <section className="image-section">
                <img src={homeImage} alt="BekiTech Showcase" className="showcase-image" />
            </section>
        </div>

    );
}

export default Home;
