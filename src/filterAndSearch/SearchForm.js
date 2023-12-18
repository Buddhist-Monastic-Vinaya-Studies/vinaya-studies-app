import React from 'react';
import { TextField, Button } from '@mui/material';

export default function SearchForm() {
 const useState = React.useState
 const [ruleId, setRuleId] = useState('pli-tv-bu-pm-pj1')
 const [result, setResult] = useState('hello')

  return (
   <section id="searchFormId">
    <TextField id="ruleIdInput"
     label="Input Rule Id"
     defaultValue={ruleId}
     helperText="<language>-<vinaya>-<bu or bi>-pm-<offense class><rule number>"
    />
    <Button variant="contained" 
     onClick={ruleId => alert(ruleId)}>Search
    </Button>
   </section>
 )
}