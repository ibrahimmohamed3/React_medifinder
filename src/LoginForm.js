import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://fake-server-jhcl.onrender.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const users = await response.json();
      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        console.log('Login successful');
        setUsername('');
        setPassword('');
        navigate('/');
        alert('Login Successful');
      } else {
        console.log('Login failed');
        alert('Invalid username or password.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during the login. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <h1>Medi<br />Finder</h1>
      <form className="form2" onSubmit={handleFormSubmit}>
        <div>
          <h2>WELCOME BACK!</h2>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
        <p>
          Don't have an Account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;