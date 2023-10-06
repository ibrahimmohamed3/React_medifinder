import React, { useState } from 'react';

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://medifinder-db.onrender.com/create_patient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Appointment booked successfully:', formData);
                alert('Appointment booked successfully!');
                setFormData({
                    yourname:'',
                    email:'',
                    phone:'',
                    date:''
                })
            } else {
                console.error('Failed to book appointment:', response.status);
                alert('Failed to book appointment. Please try again.');
            }
        } catch (error) {
            console.error('Error booking appointment:', error);
            alert('An error occurred while booking the appointment. Please try again.');
        }
    };

    return (
        <div className="appointment-page">
            <form className="form-container" onSubmit={handleSubmit}>
                <h2 className='bk-btn'>Book Appointment</h2>
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