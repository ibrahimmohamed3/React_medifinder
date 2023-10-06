import React, { useEffect, useState } from 'react';

const HospitalList = () => {
  const [hospitals, setHospitals] = useState([]);

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

  return (
    <div>
      <h2>Hospital List</h2>
      <ul>
        {hospitals.map(hospital => (
          <li key={hospital.id}>{hospital.name} - {hospital.location}</li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalList;