import React from "react";
import "../styles/Footer.css";  // Importing the CSS file from the 'styles' directory

function Footer() {
    return (
        <footer>
            
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
            <p> {new Date().getFullYear()} BekiTech . All rights reserved.</p>
        </footer>
    );
}

export default Footer;
