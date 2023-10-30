import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function SelectLanguage() {
  const [language, setLanguage] = React.useState();

  const handleChange = (event) => {
    setLanguage(event.target.language);
  };

  return (
    <FormControl>
      <FormLabel id="language-select-label">Language</FormLabel>
      <RadioGroup
        aria-labelledby="language-select-label"
        name="language-select"
        value={language}
        onChange={handleChange}
      >
        <FormControlLabel value="lzh" control={<Radio />} label="Chinese" />
        <FormControlLabel value="pli" control={<Radio />} label="Paḷī" />
      </RadioGroup>
    </FormControl>
  );
}