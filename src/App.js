import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import SearchBar from './SearchBar';
import HomePage from './HomePage';
import SecondPage from './SecondPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/second-page" element={<SecondPage />} />
        </Routes>

       
      </div>
    </Router>
  );
}

export default App;
