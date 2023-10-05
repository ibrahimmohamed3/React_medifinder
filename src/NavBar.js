import React from 'react';

function Navbar() {
  return (
    <nav className="navbar bg-white p-4">
      <div className="flex justify-between items-center">
        <a href="#" className="text-black  text-4xl font-semibold">
          <span className="text-sky-500 text-4xl">M</span>edi<br />Finder
        </a>

        <div className="space-x-4 mr-5  text-4xl font-sans font-semibold">
  <a className="text-black pr-30" href="#">
    Home
  </a>
  <a className="text-black" href="#">
    About
  </a>
  <a className="text-black" href="#">
    Services
  </a>
</div>

      </div>
    </nav>
  );
}


export default Navbar;

