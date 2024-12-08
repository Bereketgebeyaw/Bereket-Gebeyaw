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
    <div  className="home-wrapper">
        <div className="home-container">
            <section className="hero-section">
            <h1>Welcome to My Portfolio</h1>
    <p>
        I'm Bereket Gebeyeyaw, a skilled developer focused on creating impactful digital solutions. Ready to bring your ideas to life? Let’s get started!
    </p>
                <button class="getstarted" onClick={handleGetStarted} > Get Started</button>
            </section>
            <section className="image-section">
                <img src={homeImage} alt="BekiTech Showcase" className="showcase-image" />
            </section>
        </div>
    

        <section className="services-section">
                <h2>Services</h2>
                <div className="services-container">
                    <div className="service-card">
                        <h3>Website Development</h3>
                        <p>We create responsive, user-friendly websites that drive business growth. Our designs are tailored to meet your needs, ensuring an outstanding user experience.</p>
                    </div>
                    <div className="service-card">
                        <h3>Mobile Application Development</h3>
                        <p>Our mobile app development services offer custom solutions for Android and iOS, providing seamless and engaging experiences for your customers.</p>
                    </div>
                    <div className="service-card">
                        <h3>Automation Services</h3>
                        <p>Automate your business processes with our efficient automation services. We provide solutions that save time and reduce errors, enhancing productivity.</p>
                    </div>
                </div>
                <a href="/services" className="explore-more">Explore More Services</a>
            </section>

        </div>
        

    );
}

export default Home;
