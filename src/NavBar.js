import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar bg-white p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-black  text-4xl font-semibold">
          <span className="text-sky-500 text-4xl">M</span>edi<br />Finder
        </Link>

        <div className="space-x-4 mr-5  text-4xl font-sans font-semibold">
          <Link to="/" className="text-black pr-30">
            Home
          </Link>
          {/* <Link to="/about" className="text-black">
            About
          </Link> */}
          <Link to="/services" className="text-black">
            <a href="#our-services" className="text-black">
              Services
            </a>
          </Link>
          <Link to="/login" className="text-black">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
