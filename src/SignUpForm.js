import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { fullName, email, password, confirmPassword } = formData;
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://fake-server-jhcl.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted:', formData);
        window.alert('Account created successfully! You can now log in.');
        navigate('/');
      } else {
        const errorData = await response.json();
        console.error('Error creating account:', errorData);
        window.alert('Failed to create account. Please try again.');
      }
    } catch (error) {
      console.error('Error creating account:', error);
      window.alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="sign-up-container">
      <div>
        <h1>Medi<br />Finder</h1>
        <form className="form1" onSubmit={handleSubmit}>
          <div>
            <h2>Sign Up</h2>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit">Create an Account</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;