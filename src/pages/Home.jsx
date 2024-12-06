import React,{ useState }from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom"; 
import homeImage from"../assets/home.jpeg"
 

function Home() {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    const handleGetStarted = () => {
        setClicked(true);
        navigate("/RequestService");
    };

    return (
        <div className="home-container">
            <section className="hero-section">
                <h1>Welcome to BekiTech</h1>
                <p>
                    Discover innovative solutions and explore new possibilities with BekiTech. 
                    Our mission is to transform ideas into impactful solutions.
                </p>
                <button class="getstarted" onClick={handleGetStarted} > Get Started</button>
            </section>
            <section className="image-section">
                <img src={homeImage} alt="BekiTech Showcase" className="showcase-image" />
            </section>
        </div>

        

    );
}

export default Home;
