import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { fullName, email, password, confirmPassword } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here (e.g., send form data to the server)
    console.log('Form submitted:', formData);
  };

  return (
    <div  className="sign-up-container">
      <div>
      <h1>Medi<br></br>Finder</h1>
       <form className = "form1"  onSubmit={handleSubmit}>
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
