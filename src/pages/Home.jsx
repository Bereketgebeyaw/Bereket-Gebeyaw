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
    const handleExploreMore = () => {
        navigate('/services'); 
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
                        <p>I design and develop responsive, user-friendly websites that showcase creativity and functionality. With a focus on detail, I ensure each project reflects the unique vision and needs of my clients.</p>
                    </div>
                    <div className="service-card">
                        <h3>Mobile Application Development</h3>
                        <p>Specializing in custom mobile app solutions, I create seamless experiences for both Android and iOS platforms. My apps are built to deliver exceptional usability and meet the demands of modern users.</p>

                    </div>
                    <div className="service-card">
                        <h3>Automation Services</h3>
                        <p>I streamline workflows and enhance productivity by automating repetitive tasks. My automation solutions are designed to save time, reduce errors, and optimize efficiency, tailored to meet your goals.</p>
                    </div>
                </div>
                <button className="explore-more" onClick={handleExploreMore}>
        Explore More Services
      </button>
            </section>

        </div>
        

    );
}

export default Home;
