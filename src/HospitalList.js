import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const HospitalList = () => {
  const [hospitals, setHospitals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://medifinder-db.onrender.com/hospitals');
        const data = await response.json();
        setHospitals(data.hospitals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredHospitals = hospitals.filter(hospital => {
    const { name, location } = hospital;
    const searchString = `${name.toLowerCase()} ${location.toLowerCase()}`;
    return searchString.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="hospital-list-container">
      <h2 className='hos'>Hospital List</h2>
      <input
        type="text2"
        placeholder="Search hospitals"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="card-container">
        {filteredHospitals.map(hospital => (
          <div className="card" key={hospital.id}>
            <h3>{hospital.name}</h3>
            <p>Location: {hospital.location}</p>
            <Link to="/appointment">
              <button className="book-appointment-button">Book Appointment</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalList;
