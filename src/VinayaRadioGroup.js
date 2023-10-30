import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material';
import Radio from '@mui/material/Radio';

export default function VinayaRadioGroup(groupName) {
 return (
  <FormControl>
   <FormLabel id={"select-"+ groupName + "-label"}>{groupName}</FormLabel>
   <RadioGroup name={"select-"+ groupName}>
     <FormControlLabel value="" control={<Radio />} label="Female" />
   </RadioGroup>
  </FormControl>
 );
}