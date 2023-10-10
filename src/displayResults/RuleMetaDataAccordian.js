import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import RuleMetaData from './RuleMetaData';

const RuleMetaDataAccordian = ({rule}) => {

return ( 
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>{rule.label}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <RuleMetaData key={rule.id} {...rule} />
    </AccordionDetails>
  </Accordion> 
);
};

export default RuleMetaDataAccordian;