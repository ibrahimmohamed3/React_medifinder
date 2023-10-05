import React from 'react';
import img1 from './images/homepage1.jpg.jpg';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <section className="hero">
      <div className="grid grid-cols-2 gap-1">
        <div className=' font-bold text-9xl'>
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
      <h1 id="our-services" className='font-bold text-center underline text-river-bed text-4xl '>OUR SERVICES</h1>

        <div className="grid grid-cols-4 grid-rows-2 gap-x-20 gap-y-12 h-full  bg-background p-4">
            <div className="col-span-1  bg-white p-4 shadow-2xl shadow-cyan-300 text-lg font-semibold">
                <h1 className='text-2xl font-sans'>HOSPITALS LOCATOR</h1>
                <h2>Discover nearby hospitals based<br></br> on your location or specific<br></br> preferences.</h2>
            </div>
            <div className="col-span-1 bg-white p-4 shadow-2xl shadow-cyan-300 text-lg font-semibold">
                <h1 className='text-2xl font-sans'>Comprehensive Hospital Information</h1>
                <h2>Access detailed profiles of hospitals, including specialties,facilities, and contact details.</h2>
            </div>
            <div className="col-span-1 bg-white p-4 shadow-2xl shadow-cyan-300 text-lg font-semibold">
                <h1 className='text-2xl font-sans'>Easy Appointment Booking</h1>
                <h2>Book appointments with doctors or specialists at your preferred hospital hassle-free.</h2>
            </div>
            <div className="col-span-1 bg-white p-4 shadow-2xl shadow-cyan-300 text-lg font-semibold">
                <h1 className='text-2xl font-sans'>Smart Search Functionality:</h1>
                <h2>Easily search for hospitals by name, specialty, or services offered.</h2>
            </div>
            <div className="col-span-1 bg-white p-4 shadow-2xl shadow-cyan-300 text-lg font-semibold">
                <h1 className='text-2xl font-sans'>Patient Reviews and Ratings:</h1>
                <h2>Read real user reviews and ratings to make informed decisions.</h2>
            </div>
            <div className="col-span-1 bg-white p-4 shadow-2xl shadow-cyan-300 text-lg font-semibold">
                <h1 className='text-2xl font-sans'>Personalized User Profiles:</h1>
                <h2>Create and manage your user profile, including medical history and preferences.</h2>
            </div>
            
        </div>
        <div>
            <Footer/>
        </div>
      </div>
      
    </section>
  );
}

export default HomePage;