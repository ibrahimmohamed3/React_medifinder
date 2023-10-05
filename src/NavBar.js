import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const linkStyle = {
    fontFamily: 'Times New Roman, serif',
    textDecoration: 'none',
    color: 'black',
    transition: 'color 0.3s ease', // Adding transition for smooth color change
  };

  const hoverStyle = {
    color: 'blue', // Setting the hover color to blue
  };

  return (
    <nav className="navbar bg-white p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-black text-4xl font-semibold" style={linkStyle}>
          <span className="text-sky-500 text-4xl">M</span>edi<br />Finder
        </Link>

        <div className="space-x-4 mr-5 text-4xl font-sans font-semibold">
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          {/* <Link to="/about" style={linkStyle}>
            About
          </Link> */}
          <Link to="/services" style={linkStyle}>
            <a href="#our-services" style={linkStyle}>
              Services
            </a>
          </Link>
          <Link to="/login" style={linkStyle}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
