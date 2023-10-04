import React, { useState, useEffect } from 'react';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [hospitalData, setHospitalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`http://localhost:5500/Hospitals?location=${searchInput}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setHospitalData(data.Hospitals);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, [searchInput]);

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  function handleSearch() {
    
    if (hospitalData) {
      
      const filteredHospitals = hospitalData.filter((hospital) =>
        hospital.location.toLowerCase().includes(searchInput.toLowerCase())
      );
  
      // Update the hospitalData state with the filtered results
      setHospitalData(filteredHospitals);
    }
  }
  

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white p-2 rounded-lg shadow-md flex">
        <input
          type="search"
          placeholder="Enter location here"
          onChange={handleChange}
          value={searchInput}
          className="w-80 py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-r-md"
        >
          Search
        </button>
      </div>
      {loading && <p className="ml-4">Loading...</p>}
    
      {(!loading && hospitalData && hospitalData.length === 0) && (
        <p className="ml-4">No hospitals found.</p>
      )}
      {hospitalData && hospitalData.length > 0 &&
        hospitalData.map((hospital) => (
          <div key={hospital.id} className="ml-4 bg-white p-2 rounded shadow-md">
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">{hospital.name}</h3>
              <p className="text-gray-600">{hospital.address}</p>
              <p className="text-gray-600">Location: {hospital.location}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SearchBar;
