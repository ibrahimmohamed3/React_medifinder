import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, for example, send a login request to the server
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form after processing
    setUsername('');
    setPassword('');
  };

  return (
    <div  className="login-container">
     <h1>Medi<br></br>Finder</h1>
      <form className = "form2"onSubmit={handleFormSubmit}>
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
