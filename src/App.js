import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import AppointmentForm from './AppointmentForm';
import './index.css';
import Navbar from './NavBar';
import SearchBar from './SearchBar';
import HomePage from './HomePage';
import SecondPage from './SecondPage';
import Services from './Services';
import HospitalList from './HospitalList';
import Footer from './Footer';


const Home = () => (
  <div>
    <h1>Welcome to My App</h1>
    <p>Explore our amazing features!</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
       
        <Routes>
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/appointment" element={<AppointmentForm />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/second-page" element={<SecondPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hospitals" element={<HospitalList />} />
          
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
