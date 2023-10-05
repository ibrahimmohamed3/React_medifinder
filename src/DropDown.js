import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from './images/menu.png';

function MenuDropdown({ userName }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left ml-3">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <img src={menu} className="h-8 w-8 mr-2" alt="menu icon" />
          <span className="hidden md:inline">{userName}</span>
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute mt-2 w-48 h-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" style={{ maxHeight: '600px' }}>
          <div className="py-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <p className="px-4 py-2 text-sm text-gray-700">Welcome back, {userName}!</p>
            <Link to="/appointment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Book Appointment
            </Link>
            <a href="/help" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Help & Support
            </a>
            <Link to="/login" className="block px-4 py-2 text-sm text-red-500 hover:underline" role="menuitem">
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuDropdown;
