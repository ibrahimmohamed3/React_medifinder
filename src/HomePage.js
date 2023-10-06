import React from 'react';
import img1 from './images/homepage1.jpg.jpg';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function HomePage() {
  const headingStyle = {
    fontFamily: 'Times New Roman, serif',
    fontWeight: 'bold',
    fontSize: '7.5rem',
  };

  const serviceTitleStyle = {
    fontFamily: 'Times New Roman, serif', // Changed the font style to Times New Roman
    fontSize: '2.8rem', // Increased font size
    marginBottom: '1rem',
  };

  return (
    <section className="hero">
      <div className="grid grid-cols-2 gap-1">
        <div className='font-bold text-9xl' style={headingStyle}>
          <h1>
            Find <span className='text-font'>Clinics</span> <br></br><span className='text-centre'>and</span><br></br> <span className='text-font'>Medical Centres</span> <span>Online</span>
          </h1>
        </div>
        <div className="relative">
            <img src={img1} alt="Homepage" />

            <Link to="/second-page">
              {/* Link to the SecondPage component */}
              <button className="absolute top-0 right-0 mt-4 mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                BOOK AN APPOINTMENT
              </button>
            </Link>
        </div>
      </div>
      <div>
        <h1 id="our-services" className='font-bold text-center underline text-river-bed text-4xl ' style={serviceTitleStyle}>
          
        </h1>

        <div className="grid grid-cols-4 grid-rows-2 gap-x-20 gap-y-12 h-full  bg-background p-4">
          {/* Service elements go here */}
        </div>
      </div>
    </section>
  );
}

export default HomePage;
