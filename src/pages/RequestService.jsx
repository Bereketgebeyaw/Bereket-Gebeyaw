import React, { useState } from "react";
import "../styles/RequestService.css";
import axios from "axios";

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

        const { name, email, serviceType, details } = formData;

        // Validate form fields
        if (!name || !email || !serviceType || !details) {
            alert("Please fill in all fields to continue.");
            return;
        }

        try {
            // Make the POST request to the backend
            const response = await axios.post("http://localhost:2000/send_email", formData);

            if (response.status === 200) {
                alert("Your request has been submitted successfully!");
                setFormData({ name: "", email: "", serviceType: "", details: "" });
            } else {
                alert("An error occurred while submitting your request.");
            }
        } catch (error) {
            console.error("Error submitting request:", error);
            alert("An error occurred. Please try again.");
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
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="service-type">Service Type:</label>
                        <select
                            id="service-type"
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select a service</option>
                            <option value="management-consultancy">Management Consultancy</option>
                            <option value="social-media-management">Social Media Management</option>
                            <option value="automation-services">Automation Services</option>
                            <option value="training">Training</option>
                        </select>
                    </div>

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
