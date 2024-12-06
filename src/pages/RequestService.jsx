import React, { useState } from "react";
import "../styles/RequestService.css";  

function RequestService() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        serviceType: "",
        details: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('RequestService', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                alert("Your request has been submitted!");
                setFormData({ name: "", email: "", serviceType: "", details: "" });
            } else {
                alert("Error submitting request: " + result.message);
            }
        } catch (error) {
            alert("Error submitting request: " + error.message);
        }
    };

    return (
        <section className="request-service-section">
            <div className="form-container">
                <h2 className="form-title">Request a Service</h2>
                <p className="form-description">
                    Let us know how we can assist you. Select a service and provide the necessary details to get started!
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="service-type">Service Type:</label>
                        <select 
                            id="service-type" 
                            name="serviceType" 
                            required
                            value={formData.serviceType}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select a service</option>
                            <option value="management-consultancy">Management Consultancy</option>
                            <option value="social media managment">Social Media Management</option>
                            <option value="automation-services">Automation Services</option>
                            <option value="training">Training</option>
                        </select>
                    </div>

                    <p className="service-details">
                        Want to learn more about our services? 
                        <a href="/services" className="view-details">View Service Details</a>
                    </p>

                    <div className="form-group">
                        <label htmlFor="details">Additional Details:</label>
                        <textarea
                            id="details"
                            name="details"
                            rows="4"
                            placeholder="Describe your requirements"
                            value={formData.details}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn-submit">Submit Request</button>
                </form>
            </div>
        </section>
    );
}

export default RequestService;
