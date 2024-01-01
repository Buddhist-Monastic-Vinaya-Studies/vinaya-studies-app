import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  const [filename, setFilename] = useState('');
  const [schools, setSchools] = useState([]);
  const [error, setError] = useState(null);

  const handleButtonClick = async () => {
    try {
      const response = await fetch(`/db/${filename}.json`);

      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setSchools(data.schools.map((school) => school.name));
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching data:', error);
      setSchools([]); // Clear the schools array
      setError('Error fetching data. Please check the filename and try again.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <TextField
        label="Enter filename (e.g., john or ann)"
        variant="outlined"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Button variant="contained" onClick={handleButtonClick}>
        Get Schools
      </Button>

      <div style={{ marginTop: '20px' }}>
        {error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : schools.length > 0 ? (
          <ul>
            {schools.map((school, index) => (
              <li key={index}>{school}</li>
            ))}
          </ul>
        ) : (
          <p>No schools found.</p>
        )}
      </div>
    </div>
  );
}

export default App;