import React, { useState } from 'react';
import Footer from './Footer'


const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        yourname: '',
        email: '',
        phone: '',
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here, for example, sending the data to an API.
        console.log(formData);
    };

    return (
        <div className="appointment-page">
            <form className="form-container" onSubmit={handleSubmit}>
                <h2>Book Appointment</h2>
                <div className="form-group">
                    <label htmlFor="yourname">Your Name:</label>
                    <input
                        type="text"
                        id="yourname"
                        name="yourname"
                        value={formData.yourname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Appointment Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Book Appointment</button>
            </form>
            
            
        </div>
        
    );
};

export default AppointmentForm;
