import React from "react";
import "../styles/Footer.css";  // Importing the CSS file from the 'styles' directory

function Footer() {
    return (
        <footer>
            <p>&copy; 2024 MyCompany. All rights reserved.</p>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
        </footer>
    );
}

export default Footer;
