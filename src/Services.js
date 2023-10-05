import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Services = () => {
  return (
    <div id="our-services" className='font-bold text-center underline text-river-bed text-4xl'>
      OUR SERVICES
      <div className="grid grid-cols-4 grid-rows-2 gap-x-20 gap-y-12 h-full bg-background p-4">
        <div className="col-span-1 bg-white p-4 shadow-2xl shadow-cyan-300 text-lg font-semibold">
          <h1 className='text-2xl font-sans'>HOSPITALS LOCATOR</h1>
          <h2>Discover nearby hospitals based<br></br> on your location or specific<br></br> preferences.</h2>
        </div>
        <div className="col-span-1 bg-white p-4 shadow-2xl shadow-cyan-300 text-lg font-semibold">
          <h1 className='text-2xl font-sans'>Comprehensive Hospital Information</h1>
          <h2>Access detailed profiles of hospitals, including specialties, facilities, and contact details.</h2>
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
        <div className="col-span-1 bg-white p-4 shadow-2xl shadow-cyan-300 text-lg font-semibold">
          <h1 className='text-2xl font-sans'>Patient Reviews and Ratings:</h1>
          <h2>Read real user reviews and ratings to make informed decisions.</h2>
        </div>
        <div className="col-span-1 bg-white p-4 shadow-2xl shadow-cyan-300 text-lg font-semibold">
          <h1 className='text-2xl font-sans'>Personalized User Profiles:</h1>
          <h2>Create and manage your user profile, including medical history and preferences.</h2>
        </div>
      </div>
    </div>
  );
}

export default Services;
