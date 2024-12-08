import React from "react";
import "../styles/Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import logopic from"../assets/logo.png"

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logopic} alt="Your Logo" />
                </div>
                <div className="footer-about">
                    <h3>I'm Bereket Gebeyeyaw</h3>
                    <p>Creating innovative solutions with passion and creativity.</p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/bereket-g-a8b728234/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Bereketgebeyaw" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:gebeyawbereket8@gmail.com">
                                <FaEnvelope />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Bereket. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
