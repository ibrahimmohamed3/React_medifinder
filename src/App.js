import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import AppointmentForm from './AppointmentForm';
import './App.css';

const Home = () => (
  <div>
    <h1>Welcome to My App</h1>
    <p>Explore our amazing features!</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/appointment" element={<AppointmentForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;

