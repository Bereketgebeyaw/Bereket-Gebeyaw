import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import Navbar component
import Footer from './components/Footer';  // Import Footer component
import Home from './pages/Home';  // Import the Home component
import About from './pages/About';  // Import the About component
import Contact from './pages/Contact';  // Import the Contact component
import RequestService from "./pages/RequestService";
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Portfolio from './pages/Portfolio';


function App() {
  return (
    <Router>  {/* Wrap the entire app in Router */}
      <div>
        <Navbar />  {/* Display the Navbar */}
        <Routes>  {/* Define the Routes */}
          <Route path="/" element={<Home />} />  {/* Define route for Home */}
          <Route path="/about" element={<About />} />  {/* Define route for About */}
          <Route path="/contact" element={<Contact />} />  {/* Define route for Contact */}
          <Route path="/RequestService" element={<RequestService />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/service-details/:serviceId" element={<ServiceDetails />} />
          <Route path="/portfolio" element={<Portfolio />} />
          

        </Routes>
        <Footer />  {/* Display the Footer */}
      </div>
    </Router>
  );
}

export default App;
