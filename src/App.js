import './App.css';
import React, {useState} from 'react';

//import { useEffect, useState } from "react";
//import axios from "axios";

//components
import {
  Button, TextField, RadioGroup
} from '@mui/material';
import Results from './displayResults/Results';



function App() {
  const [ruleId, setRuleId] = useState('');
  const [result, setResult] = useState();
  const [error, setError] = useState(null);
  
  const onClickHandler = async () => {
    const filePath = '/db/queryResults/' + ruleId + '.json';
    try {
      const response = await fetch (filePath);

      // Check if the response is successful
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }

    const data = await response.json();
    setResult(data);
    setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching data:', error);
      setResult(); // Clear the result
      setError(`Error fetching data. Please check the file path and try again. ${filePath}`);
    }
    
  };

  return ( 
  <div style={{ padding: '20px' }}>
   
    <TextField id="ruleIdInput" label="Enter ruleID (e.g. pli-tv-bu-pm-pj1" variant="outlined" value={ruleId} onChange={(e) => setRuleId(e.target.value)}/>
    <Button id="ruleIdSubmit" variant="contained" onClick={onClickHandler}>Find Parallels</Button>
    <div style={{ marginTop: '20px' }}>
        {error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (result != undefined) ? (
          <Results result = {result}/>
        ) : (
        
          <p>{result}</p>
        )}
      </div>
     
  </div>
  );
}

export default App